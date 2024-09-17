import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {

    const [formData, setFormData] = useState({  password: "", email: "" });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:8080/api/auth/login`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
            const data = await res.json();

            if (res.ok) {
                setFormData({ password: "", email: "" });
                navigate('/todos');
            } else {
                console.error('login failed:', data.message); 
            }
        } catch (error) {
            console.error('Error during login:', error); 

        }
    }

    return (
        <div className='w-[35%]  border border-black m-auto rounded-lg mt-10 poppins'>
            <h2 className='text-2xl font-medium text-center'>Login</h2>
            <form className='flex flex-col gap-10 mt-5 p-5' onSubmit={handleSubmit}> 
                <input className='border rounded-lg p-2' name='email' type="email" placeholder='email...' onChange={handleChange}/>
                <input className='border rounded-lg p-2' name='password' type="password" placeholder='password' onChange={handleChange}/>
                <input className='border rounded-lg p-2 bg-black text-white font-normal text-lg cursor-pointer' type='submit' value='Login'/>
            </form>
        </div>
    )
}

export default Login