import React from 'react'

const TaskNumber = ({ data }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
   
        <div className='bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-6 shadow-lg flex flex-col justify-between'>
            <h2 className='text-4xl font-bold mb-2 text-sky-400'>{data.taskNumber.newTask}</h2>
            <h3 className='text-sm font-semibold tracking-wider uppercase text-zinc-400'>New Task</h3>
        </div>

   
        <div className='bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-6 shadow-lg flex flex-col justify-between'>
            <h2 className='text-4xl font-bold mb-2 text-emerald-400'>{data.taskNumber.completed}</h2>
            <h3 className='text-sm font-semibold tracking-wider uppercase text-zinc-400'>Completed</h3>
        </div>

       
        <div className='bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-6 shadow-lg flex flex-col justify-between'>
            <h2 className='text-4xl font-bold mb-2 text-amber-400'>{data.taskNumber.active}</h2>
            <h3 className='text-sm font-semibold tracking-wider uppercase text-zinc-400'>Accepted</h3>
        </div>

     
        <div className='bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-6 shadow-lg flex flex-col justify-between'>
            <h2 className='text-4xl font-bold mb-2 text-rose-400'>{data.taskNumber.failed}</h2>
            <h3 className='text-sm font-semibold tracking-wider uppercase text-zinc-400'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskNumber