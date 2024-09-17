import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exist' });
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword,
            username
        })


        await newUser.save();
        res.status(201).json({ message: 'signup successful' });
    } catch (error) {
        console.log('error during signup', error);
        res.status(500).json({ message: 'Server error, please try again later' })
    }

}

export const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(500).json({ message: 'All fields required' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(500).json({ message: "User not found" });
        }

        const validPassword = bcryptjs.compareSync(password, existingUser.password)

        if (!validPassword) {
            return res.status(500).json({ message: 'Invalid Password' });
        }

        const token = jwt.sign({
            id: existingUser._id
        }, process.env.JWT_SECRET_KEY)


        const { password: pass, ...rest } = existingUser._doc

        res.status(200)
            .cookie('access_token', token, {
                httpOnly: true, 
            })
            .json({ message: 'Login successful', user: rest });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}