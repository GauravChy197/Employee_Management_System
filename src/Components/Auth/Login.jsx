import React, { useState } from 'react'

const Login = ({ handelLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handelLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex justify-center items-center bg-zinc-950 h-screen text-zinc-100 px-4'>
            <div className='w-full max-w-sm p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl flex flex-col justify-between'>
                <div className='mb-6'>
                    <h2 className='text-2xl font-bold tracking-tight text-zinc-100'>Sign In</h2>
                    <p className='text-sm text-zinc-400 mt-1'>Enter your credentials to access your account</p>
                </div>
                
                <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-zinc-400 mb-1.5'>Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className='w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-700 px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-100 outline-none transition-all placeholder:text-zinc-600'
                            type="email"
                            placeholder='name@example.com' 
                        />
                    </div>
                    
                    <div>
                        <label className='block text-sm font-medium text-zinc-400 mb-1.5'>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-700 px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-100 outline-none transition-all placeholder:text-zinc-600'
                            type="password"
                            placeholder='••••••••' 
                        />
                    </div>

                    <button className='w-full mt-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 cursor-pointer'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login