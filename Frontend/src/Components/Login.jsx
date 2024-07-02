import React from 'react'

const Login = () => {
    return (
        <div className='w-[35%]  border border-black m-auto rounded-lg mt-10 poppins'>
            <h2 className='text-2xl font-medium text-center'>Login</h2>
            <form className='flex flex-col gap-10 mt-5 p-5'>
                <input className='border rounded-lg p-2' type="email" placeholder='email...' />
                <input className='border rounded-lg p-2' type="password" placeholder='password' />
                <input className='border rounded-lg p-2 bg-black text-white font-normal text-lg cursor-pointer' type='button' value='Login' />
            </form>
        </div>
    )
}

export default Login