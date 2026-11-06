import React, { useState } from 'react'

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('')
        setPass('')
    }

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className='flex justify-center items-center bg-black h-screen text-white'>
            <div className='w-90 justify-between p-4 h-85   bg-gray-900 rounded-lg flex  items-center flex-col'>
                <h2 className='text-3xl font-bold mb-2.5'>Login</h2>
                <div className='mb-2'>
                    <form onSubmit={(e) => { submitHandler(e) }}>
                        <div className='flex flex-col items-center justify-center '>
                            <div>
                                <input
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    value={email}
                                    required
                                    className='w-full bg-black mb-4 px-3 py-2.5 rounded font-semibold outline-0 active:bg-black'
                                    type="email"
                                    placeholder='email address' />
                                <input
                                    value={pass}
                                    onChange={(e) => {
                                        setPass(e.target.value)
                                    }}
                                    required
                                    className='w-full bg-black px-3 py-2.5 rounded font-semibold outline-0'
                                    type="password"
                                    placeholder='password' />
                            </div>
                            <button className='bg-blue-600 mb-4 px-8 py-1.5 text-lg font-medium rounded-sm  active:scale-95 mt-10'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login