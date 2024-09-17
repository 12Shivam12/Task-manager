import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
 
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized. No token provided." });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = verified.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
}