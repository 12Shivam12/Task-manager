import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Ensure you have react-icons installed

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='w-full h-20 border flex justify-between px-5 items-center poppins text-xl shadow-md'>
            <div className='flex items-center font-semibold italic '>
                <img className='w-20' src="data:image/png;base64,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" alt="" />
                <h1>My Todo</h1>
            </div>
            <div className='hidden md:flex list-none gap-10'>
                <li>Home</li>
                <li>About us</li>
                <li>Todos</li>
            </div>
            <div className='hidden md:flex gap-3'>
                <button className='px-4 py-1 border border-black rounded-full cursor-pointer'>Log in</button>
                <button className='px-4 py-1 border border-black rounded-full bg-black text-white cursor-pointer'>Sign up</button>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
            {menuOpen && (
                <div className='absolute top-20 left-0 w-full bg-white shadow-md md:hidden'>
                    <ul className='flex flex-col items-center list-none'>
                        <li className='py-2'><button onClick={toggleMenu}>Home</button></li>
                        <li className='py-2'><button onClick={toggleMenu}>About us</button></li>
                        <li className='py-2'><button onClick={toggleMenu}>Todos</button></li>
                        <li className='py-2'><button className='px-4 py-1 border border-black rounded-full cursor-pointer' onClick={toggleMenu}>Log in</button></li>
                        <li className='py-2'><button className='px-4 py-1 border border-black rounded-full bg-black text-white cursor-pointer' onClick={toggleMenu}>Sign up</button></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
