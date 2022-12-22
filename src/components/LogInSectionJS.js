/////// TEST /////////
//////////////////////


import React, { useState } from 'react'
import LogInForm from './LogInForm'

function LogInSectionJS () {

    let currentPage = "My Account"
    document.title = `${currentPage} || Fixxo` 

    const adminUser = {
        email: "hej123@hej.com",
        password: "hej123"
    }

    const [user, setUser] = useState({name: '', email: ''})
    const [error, setError] = useState('')

    const Login = details => {
        if (details.email !== '' && details.password !== '') {
        //if (details.email == adminUser.email && details.password == adminUser.password)
            console.log("Logged in")
            setUser({
                email: details.email,
                password: details.password
            })
        }
        else {
            setError("Details do not match")
        }
    }

    const Logout = () => {
        setUser({ email: '' })
    }

  return (
    <div>
        {(user.email != '') ? ( //om email inte är tom så renderar vi ut följande
            <div className="welcome">
                <h2>Welcome, </h2><span>{user.name}</span>
                <button onClick={Logout}>Logout</button>
            </div>
        ) : (
            <LogInForm Login={Login} error={error} />
        )}
    </div>
  )
}

export default LogInSectionJS