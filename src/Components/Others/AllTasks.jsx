import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTasks = () => {
    const [userData,setUserData] = useContext(AuthContext)
   
    

    return (
        <div id='task' className='w-[90%] bg-black rounded-2xl h-60 mt-3 ml-auto mr-auto px-4 py-3 '>
            <div className='bg-red-400 flex justify-between rounded px-4 py-2'>
                <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
                <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
                <h5 className='text-lg font-medium '>Failed</h5>
            </div>
            <div id='task' className='h-[80%] overflow-auto'>
                {userData.map(function (elem,idx) {
                    return <div key={idx} className=' mt-2 overflow-auto flex justify-between rounded px-4  border-2 py-2'>
                        <h2 className='text-lg font-medium w-1/5 '>{elem.name}</h2>
                        <h3 className='text-lg font-medium w-1/5 '>{elem.taskNumber.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-blue-700 '>{elem.taskNumber.active} </h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-700 '>{elem.taskNumber.completed}</h5>
                        <h5 className='text-lg font-medium text-red-800'>{elem.taskNumber.failed}</h5>
                    </div>
                })}
            </div>




        </div>
    )
}

export default AllTasks