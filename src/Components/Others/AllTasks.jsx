import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTasks = () => {
    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className='w-full max-w-6xl mx-auto mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-lg font-semibold text-zinc-100'>Employee Task Status</h2>
                <span className='text-sm text-zinc-400 font-medium'>Overview</span>
            </div>

 
            <div className='grid grid-cols-5 gap-4 bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-400 uppercase tracking-wider'>
                <h2>Employee</h2>
                <h3>New Tasks</h3>
                <h5>Active</h5>
                <h5>Completed</h5>
                <h5 className='text-right'>Failed</h5>
            </div>

        
            <div id='task' className='mt-2 space-y-2 max-h-64 overflow-y-auto pr-1'>
                {userData.map((elem, idx) => (
                    <div
                        key={idx}
                        className='grid grid-cols-5 gap-4 items-center bg-zinc-950/40 hover:bg-zinc-950/80 border border-zinc-800/50 rounded-xl px-4 py-3 transition-colors'
                    >
                        <h2 className='text-sm font-medium text-zinc-100 truncate'>{elem.name}</h2>

                        <div>
                            <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-lg font-medium  text-sky-400 '>
                                {elem.taskNumber.newTask}
                            </span>
                        </div>

                        <div>
                            <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-lg font-medium  text-amber-400 '>
                                {elem.taskNumber.active}
                            </span>
                        </div>

                        <div>
                            <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-lg font-medium  text-emerald-400 '>
                                {elem.taskNumber.completed}
                            </span>
                        </div>

                        <div className='text-right'>
                            <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-lg font-medium  text-rose-400 '>
                                {elem.taskNumber.failed}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTasks