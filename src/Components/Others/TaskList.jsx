import React, { useContext } from 'react'
import AcceptedTask from '../TaskList/AcceptedTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTaks from '../TaskList/FailedTaks'
import { AuthContext } from '../../Context/AuthProvider'

const TaskList = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const countTasks = (tasks) => {
        return {
            newTask: tasks.filter(function (t) { return t.newTask }).length,
            active: tasks.filter(function (t) { return t.active }).length,
            completed: tasks.filter(function (t) { return t.completed }).length,
            failed: tasks.filter(function (t) { return t.failed }).length,
        }
    }

    if (!data) return null


    const acceptTask = (taskIndex) => {
        const updated = [...userData]

        updated.forEach(function (emp) {
            if (emp.email == data.email) {
                emp.tasks[taskIndex].newTask = false
                emp.tasks[taskIndex].active = true

                emp.taskNumber = countTasks(emp.tasks)
            }
        })

        setUserData(updated)
        localStorage.setItem('employees', JSON.stringify(updated))
    }

    const completeTask = (taskIndex) => {
        const updated = [...userData]

        updated.forEach(function (emp) {
            if (emp.email == data.email) {
                emp.tasks[taskIndex].active = false
                emp.tasks[taskIndex].completed = true

                emp.taskNumber = countTasks(emp.tasks)
            }
        })

        setUserData(updated)
        localStorage.setItem('employees', JSON.stringify(updated))
    }

    const failTask = (taskIndex) => {
        const updated = [...userData]

        updated.forEach(function (emp) {
            if (emp.email == data.email) {
                emp.tasks[taskIndex].active = false
                emp.tasks[taskIndex].failed = true

                emp.taskNumber = countTasks(emp.tasks)
            }
        })

        setUserData(updated)
        localStorage.setItem('employees', JSON.stringify(updated))
    }

    return (
        <div id='list' className='mt-15 h-[50%] flex flex-nowrap overflow-auto items-center gap-5'>
            {data.tasks.map((e, idx) => {
                if (e.active) {
                    return <AcceptedTask
                        key={idx}
                        data={e}
                        onComplete={() => completeTask(idx)}
                        onFail={() => failTask(idx)}
                    />
                }
                if (e.newTask) {
                    return <NewTask
                        key={idx}
                        data={e}
                        onAccept={() => acceptTask(idx)}
                    />
                }
                if (e.failed) return <FailedTaks key={idx} data={e} />
                if (e.completed) return <CompleteTask key={idx} data={e} />
                return null
            })}
        </div>
    )
}

export default TaskList