import React from 'react'

const AcceptedTask = ({data}) => {
    
    return (


        <div id='task' className='bg-gray-800 rounded-2xl h-full w-90 shrink-0 px-5 py-8'>
            <div className='flex justify-between items-center mb-5'>
                <h2 className='text-xl font-semibold bg-red-800 rounded px-3 py-1'>{data.category}</h2>
                <h3 className='text-sm font-medium'>{data.taskDate}</h3>
            </div>
            <h1 className='text-2xl font-semibold mb-3'>{data.taskTitle}</h1>
            <p>{data.taskDesc}</p>
            <div className='flex gap-10 mt-10 '>
                <button className='bg-green-500 px-3 py-1 rounded text-sm font-bold active:scale-95'>Mark as Completed</button>
                <button className='bg-red-600 px-3 py-1 rounded text-sm font-bold active:scale-95'>Mark as Failed</button>
            </div>
        </div>

    )
}

export default AcceptedTask