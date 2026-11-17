import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { saveEmployees } from '../../Utils/LocalStorage'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const formHandler = (e) => {
        e.preventDefault()

        const task = {
            taskTitle,
            taskDesc,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        }

        const updated = [...userData]
        updated.forEach((elem) => {
            if (elem.name === assignTo) {
                elem.tasks.push(task)
                elem.taskNumber.newTask = elem.taskNumber.newTask + 1
            }
        })
        setUserData(updated)
        saveEmployees(updated)

        setTaskTitle('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
        setTaskDesc('')
    }

    return (
        <div className='mt-6 w-full max-w-6xl mx-auto bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-lg'>
            <h2 className='text-lg font-semibold text-zinc-100 mb-6'>Assign New Task</h2>
            
            <form onSubmit={formHandler} className='flex flex-col md:flex-row gap-8 justify-between'>
              
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <div>
                        <label className='block text-lg font-medium text-zinc-400 mb-1.5'>Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            required
                            className='w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-700 px-3.5 py-2.5 rounded-xl text-sm text-zinc-100 outline-none transition-all placeholder:text-zinc-600'
                            type="text"
                            placeholder='e.g., Make Product Page' 
                        />
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-lg font-medium text-zinc-400 mb-1.5'>Due Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                required
                                className='w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-700 px-3.5 py-2.5 rounded-xl text-sm text-zinc-300 outline-none transition-all [color-scheme:dark]'
                                type="date" 
                            />
                        </div>

                        <div>
                            <label className='block text-lg font-medium text-zinc-400 mb-1.5'>Category</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                className='w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-700 px-3.5 py-2.5 rounded-xl text-sm text-zinc-100 outline-none transition-all placeholder:text-zinc-600'
                                type="text"
                                placeholder='Design, Frontend, etc.' 
                            />
                        </div>
                    </div>

                    <div>
                        <label className='block text-lg font-medium text-zinc-400 mb-1.5'>Assign To</label>
                        <select
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            required
                            className='w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-700 px-3.5 py-2.5 rounded-xl text-sm text-zinc-100 outline-none transition-all'
                        >
                            <option value="" disabled className='text-zinc-600'>Select an employee</option>
                            {userData?.map((emp, idx) => (
                                <option key={idx} value={emp.name} className='bg-zinc-900 text-zinc-100'>
                                    {emp.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='w-full md:w-1/2 flex flex-col justify-between gap-4'>
                    <div className='flex-1 flex flex-col'>
                        <label className='block text-lg font-medium text-zinc-400 mb-1.5'>Description</label>
                        <textarea
                            value={taskDesc}
                            onChange={(e) => setTaskDesc(e.target.value)}
                            required
                            placeholder='Provide detailed instructions for this task...'
                            className='w-full flex-1 min-h-35 bg-zinc-950 border border-zinc-800 focus:border-zinc-700 px-3.5 py-2.5 rounded-xl text-sm text-zinc-100 outline-none transition-all resize-none placeholder:text-zinc-600'
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className='w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 py-2.5 px-6 rounded-xl text-sm font-semibold transition-all active:scale-95 cursor-pointer'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask