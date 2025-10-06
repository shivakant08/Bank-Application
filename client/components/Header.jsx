import React from 'react'
import { Link } from 'react-router'
import { FaBuilding } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='flex flex-row justify-around items-center min-w-full h-20 bg-orange-400'>
            <div className='flex justify-center items-center'>
                <h1 className='flex justify-center items-center text-3xl font-bold'>SIMPLE-BANK</h1>

               
            </div>
            <nav className=''>
                <ul className='flex items-center justify-center'>
                    <Link to="/home"><li className='text-lg p-10'>Home</li></Link>
                    <Link to="/about"><li className='text-lg p-10'>About</li></Link>
                    <Link to="/admin-dashboard"><li className='text-lg p-10'>Admin</li></Link>
                    <Link to="/sign-up"><li className='text-lg p-10'>Sign-up</li></Link>
                    <Link to="/login"><li className='text-lg p-10'>Login</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header