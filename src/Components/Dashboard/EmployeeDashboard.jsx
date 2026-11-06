import React from 'react'
import Header from '../Others/Header'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../Others/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen text-white'>
        <Header />
        <TaskNumber />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard