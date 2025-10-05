import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
    return (
        <div className='bg-[#004c8f] w-full h-20'>
            <div className='flex justify-around items-center'>
                <p className='text-3xl font-bold text-white p-5'>THOKO BANK</p>

                <div className='flex'>
                    <ul className='flex justify-around items-center space-x-10'>
                        <Link to="/home"><li className='text-lg text-white cursor-pointer'>Home</li></Link>
                        <Link to="/about"><li className='text-lg text-white cursor-pointer'>About</li></Link>
                        <Link to="/sign-up"><li className='text-lg text-white cursor-pointer'>Sign-up</li></Link>
                        <Link to="/login"><li className='text-lg text-white cursor-pointer'>Login</li></Link>
                    </ul>


                </div>
            </div>


        </div>
    )
}

export default Navbar