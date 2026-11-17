import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div id='task' className='bg-zinc-900 border border-zinc-800 rounded-2xl h-full w-90 shrink-0 px-6 py-8 flex flex-col justify-between overflow-auto shadow-lg'>
            <div>
                <div className='flex justify-between items-center mb-5'>
                    <span className='text-xs font-semibold tracking-wider uppercase bg-emerald-950 text-emerald-400  rounded-full px-3 py-1'>{data.category}</span>
                    <span className='text-xs text-zinc-400 font-medium'>{data.taskDate}</span>
                </div>
                <h1 className='text-xl font-semibold mb-3 text-zinc-100'>{data.taskTitle}</h1>
                <p className='text-zinc-400 text-sm leading-relaxed'>{data.taskDesc}</p>
            </div>
            <div className='mt-6'>
                <div className='w-full text-center bg-emerald-950/40 text-emerald-400  text-sm font-semibold rounded-xl py-2.5'>Completed</div>
            </div>
        </div>
    )
}

export default CompleteTask