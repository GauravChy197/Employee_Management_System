import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-2xl '>Hello <br /><span className='text-4xl font-semibold'>Gaurav 👋</span></h1>
            <button className='bg-red-500 px-3 py-1 rounded font-semibold text-lg active:scale-95 cursor-pointer'>Logout</button>
        </div>
    )
}

export default Header