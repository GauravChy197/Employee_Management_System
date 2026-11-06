import React from 'react'

const TaskList = () => {
    return (
        <div id='list' className='mt-15  h-[50%] flex  flex-nowrap  overflow-auto items-center  gap-5'>
            <div id='task' className='bg-blue-400 rounded-2xl h-[80%] w-90 shrink-0 px-5 py-8'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-xl font-semibold bg-red-800 rounded px-3 py-1'>High</h2>
                    <h3 className='text-sm font-medium'>Oct-24</h3>
                </div>
                <h1 className='text-2xl font-semibold mb-3'>Complete react</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem excepturi iste itaque fugiat! Accusantium voluptatibus in quisquam, similique culpa cupiditate!</p>
            </div>
            <div id='task' className='bg-blue-400 rounded-2xl h-[80%] w-90 shrink-0 px-5 py-8 overflow-auto'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-xl font-semibold bg-red-800 rounded px-3 py-1'>High</h2>
                    <h3 className='text-sm font-medium'>Oct-24</h3>
                </div>
                <h1 className='text-2xl font-semibold mb-3'>Complete react</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, a. Minus aut quo explicabo quae magni maiores dolore blanditiis quibusdam quaerat, veritatis ipsum repellendus aliquam iure excepturi? Numquam harum hic, laudantium eius saepe quas quasi enim, odio quis est assumenda.</p>
            </div>
                         
        </div>
    )
}

export default TaskList