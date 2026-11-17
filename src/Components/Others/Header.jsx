import React from 'react'

const Header = (props) => {
    let username = 'Admin'
    if (props.data) {
        username = props.data.name
    }

    const logOut = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }

    return (
        <div className='flex justify-between items-center bg-zinc-900/50 border border-zinc-800/80 px-8 py-5 rounded-2xl mb-8 backdrop-blur-md'>
            <div>
                <h1 className='text-zinc-400 text-sm font-medium'>Welcome back,</h1>
                <span className='text-2xl font-bold text-zinc-100'>{username} </span>
            </div>
            <button onClick={logOut} className='bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 px-4 py-2 rounded-xl text-sm font-medium transition-all active:scale-95 cursor-pointer'>Logout</button>
        </div>
    )
}

export default Header