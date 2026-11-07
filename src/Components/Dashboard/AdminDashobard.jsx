import React, { use, useState } from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'

const AdminDashobard = () => {
   

    return (
        <div className='p-5 bg-[#1c1c1c] text-white h-screen w-full '>
            <Header />
            <CreateTask />
            <AllTasks />
        </div>
    )
}

export default AdminDashobard