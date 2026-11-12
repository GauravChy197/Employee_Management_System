import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

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

        const updated = userData.map((elem) =>
            elem.name.trim().toLowerCase() === assignTo.trim().toLowerCase()
                ? {
                    ...elem,
                    tasks: [...elem.tasks, task],
                    taskNumber: { ...elem.taskNumber, newTask: elem.taskNumber.newTask + 1 },
                }
                : elem
        )

        setUserData(updated)
        localStorage.setItem('employees', JSON.stringify(updated))

        setTaskTitle('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
        setTaskDesc('')
    }
    return (
        <div className='mt-5 w-[90%] flex flex-col ml-auto mr-auto'>
            <form
                onSubmit={(e) => { formHandler(e) }}
                className='flex gap-20 bg-black px-4 pt-4 rounded-lg' >
                <div className='w-1/2 pl-4 '>
                    <div>
                        <h3 className='text-lg mb-1 font-medium'>Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => { setTaskTitle(e.target.value) }}
                            className=' bg-[#1c1c1c] px-2 w-[70%] py-2 rounded-lg mb-5 mt-1 outline-none'
                            type="text"
                            placeholder='Make Product Page' />
                    </div>

                    <div>
                        <h3 className='text-lg mb-1 font-medium'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => { setTaskDate(e.target.value) }}
                            className='bg-[#1c1c1c] px-2 w-[70%] py-2 rounded-lg mb-5 mt-1 outline-none'
                            type="date" />
                    </div>
                    <div>
                        <h3 className='text-lg mb-1 font-medium'>Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => { setAssignTo(e.target.value) }}
                            className='bg-[#1c1c1c] px-2 w-[70%] py-2 rounded-lg mb-5 mt-1 outline-none'
                            type="text"
                            placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-lg mb-1 font-medium'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                            className='bg-[#1c1c1c] px-2 w-[70%] py-2 rounded-lg mb-5 mt-1 outline-none'
                            type="text"
                            placeholder='Design, Dev, etc' />
                    </div>

                </div>
                <div className=' w-1/2 flex flex-col pr-5'>
                    <div>
                        <h3 className='text-lg mb-1 font-medium'>Description</h3>
                        <textarea
                            value={taskDesc}
                            onChange={(e) => setTaskDesc(e.target.value)}
                            className='w-full h-40 bg-[#1c1c1c] px-2 py-2 rounded-lg mb-5 mt-1 outline-none'
                            name="desc" >
                        </textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-blue-400 px-13 rounded text-xl font-semibold active:scale-95 py-1 w-fit'>Create Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask