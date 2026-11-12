import React from 'react'

const FailedTaks = ({ data }) => {
    return (
        <div id='task' className='bg-purple-400 rounded-2xl h-full w-90 shrink-0 px-5 py-8 overflow-auto'>
            <div className='flex justify-between items-center mb-5'>
                <h2 className='text-xl font-semibold bg-red-800 rounded px-3 py-1'>{data.category}</h2>
                <h3 className='text-sm font-medium'>{data.taskDate}</h3>
            </div>
            <h1 className='text-2xl font-semibold mb-3'>{data.taskTitle}</h1>
            <p>{data.taskDesc}</p>
            <div className='mt-5'>
                <button className='w-full bg-red-700 text-lg font-semibold rounded px-3 py-1'>Failed</button>
            </div>
        </div>


    )
}

export default FailedTaks