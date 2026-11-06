import React from 'react'

const TaskNumber = () => {
  return (
    <div className=' flex mt-10  gap-10'>
        <div className='bg-red-300 rounded-2xl px-8 py-6 w-[45%] '>
            <h2 className='text-5xl font-bold mb-2'>1</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='bg-blue-300 rounded-2xl px-8 py-6 w-[45%] p-5'>
            <h2 className='text-5xl font-bold mb-2'>1</h2>
            <h3 className='text-xl font-semibold'>Completed</h3>
        </div>
        <div className='bg-green-300 rounded-2xl px-8 py-6 w-[45%] p-5'>
            <h2 className='text-5xl font-bold mb-2'>1</h2>
            <h3 className='text-xl font-semibold'>Accepted</h3>
        </div>
        <div className='bg-purple-300 rounded-2xl px-8 py-6 w-[45%] p-5'>
            <h2 className='text-5xl font-bold mb-2'>1</h2>
            <h3 className='text-xl font-semibold'>Failed</h3>
        </div>
       
    </div>
  )
}

export default TaskNumber