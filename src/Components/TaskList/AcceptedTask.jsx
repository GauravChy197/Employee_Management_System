import React from 'react'

const AcceptedTask = ({ data, onComplete, onFail }) => {
    return (
        <div id='task' className='bg-zinc-900 border border-zinc-800 rounded-2xl h-full w-90 shrink-0 px-6 py-8 flex flex-col justify-between overflow-auto shadow-lg'>
            <div>
              <div className='flex justify-between items-center mb-5'>
                  <span className='text-xs font-semibold tracking-wider uppercase bg-amber-950 text-amber-400  rounded-lg px-3 py-1'>{data.category}</span>
                  <span className='text-xs text-zinc-400 font-medium'>{data.taskDate}</span>
              </div>
              <h1 className='text-xl font-semibold mb-3 text-zinc-100'>{data.taskTitle}</h1>
              <p className='text-zinc-400 text-sm leading-relaxed'>{data.taskDesc}</p>
            </div>
            <div className='flex gap-3 mt-6'>
                <button onClick={onComplete} className='flex-1 bg-emerald-950 hover:bg-emerald-900 text-emerald-400  py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 cursor-pointer'>Complete</button>
                <button onClick={onFail} className='flex-1 bg-rose-950 hover:bg-rose-900 text-rose-200  py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 cursor-pointer'>Fail</button>
            </div>
        </div>
    )
}

export default AcceptedTask 