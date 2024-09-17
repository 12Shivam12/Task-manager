import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {

    const [formData, setFormData] = useState({ username: "", password: "", email: "" });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:8080/api/auth/signup`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();

            if (res.ok) {
                setFormData({ username: "", password: "", email: "" });
                navigate('/log-in');
            } else {
                console.error('Signup failed:', data.message); // Show error message
            }
        } catch (error) {
            console.error('Error during signup:', error); // Catch fetch/network errors
           
        }
    }


    return (
        <div className='w-[35%]  border border-black m-auto rounded-lg mt-10 poppins'>
            <h2 className='text-2xl font-medium text-center'>Signup</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-10 mt-5 p-5'>
                <input
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    className='border rounded-lg p-2'
                    type="text"
                    placeholder='username...'
                    required
                />
                <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='border rounded-lg p-2'
                    type="email"
                    placeholder='email...'
                    required
                />
                <input
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='border rounded-lg p-2'
                    type="password"
                    placeholder='password'
                    required
                />
                <input
                    className='border rounded-lg p-2 bg-black text-white font-normal text-lg cursor-pointer'
                    type='submit'
                    value='Signup'
                />
            </form>
        </div>
    )
}

export default Signup
