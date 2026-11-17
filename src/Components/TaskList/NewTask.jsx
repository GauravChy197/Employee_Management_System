import React from 'react'

const NewTask = ({ data, onAccept }) => {
    return (
        <div id='task' className='bg-zinc-900 border border-zinc-800 rounded-2xl h-full w-90 shrink-0 px-6 py-8 flex flex-col justify-between overflow-auto shadow-lg'>
            <div>
                <div className='flex justify-between items-center mb-5'>
                    <span className='text-xs font-semibold tracking-wider uppercase bg-sky-950 text-sky-400      rounded-lg px-3 py-1'>{data.category}</span>
                    <span className='text-xs text-zinc-400 font-medium'>{data.taskDate}</span>
                </div>
                <h1 className='text-xl font-semibold mb-3 text-zinc-100'>{data.taskTitle}</h1>
                <p className='text-zinc-400 text-sm leading-relaxed'>{data.taskDesc}</p>
            </div>
            <div className='mt-5'>
                <button onClick={onAccept} className='w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 px-4 py-2.5 rounded-xl text-sm font-medium transition-all active:scale-95 cursor-pointer'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask