import React from 'react'
import AcceptedTask from '../TaskList/AcceptedTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTaks from '../TaskList/FailedTaks'

const TaskList = ({data}) => {
        
    return (
        <div id='list' className='mt-15  h-[50%] flex  flex-nowrap  overflow-auto items-center  gap-5'>
            {data.tasks.map((e,idx)=>{
            if(e.active){
                return<AcceptedTask key={idx} data = {e} />
            }if(e.newTask){
                return <NewTask key={idx} data = {e} />
            } if (e.failed){
                return <FailedTaks key={idx} data = {e} />
            }if(e.completed){
                return<CompleteTask key={idx} data = {e} />
            }             
            })}
        </div>
    )
}

export default TaskList