import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashobard from './Components/Dashboard/AdminDashobard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInEmail, setLoggedInEmail] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  let loggedInUserData = null
  if (userData && loggedInEmail) {
    loggedInUserData = userData.find(function (e){
      return e.email == loggedInEmail
    })
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const saved = JSON.parse(loggedInUser)
      setUser(saved.role)
      setLoggedInEmail(saved.email)
    }

  }, [])



  const handelLogin = (email, password) => {
    if (email == "admin@1.com" && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    } else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInEmail(employee.email)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email: employee.email }))
      }
      else {
        alert('Invalid Credentials')
      }
    }
  }

  let screen = null

  if(!user){
    screen = <Login handelLogin={handelLogin} />
  }else if(user == 'admin'){
    screen = <AdminDashobard changeUser = {setUser} />
  }else if (user == 'employee' && loggedInUserData){
    screen = <EmployeeDashboard changeUser={setUser} data = {loggedInUserData} />
  }
  return  <>{screen}</>  
}

export default App