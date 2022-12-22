/////// TEST /////////
//////////////////////


import React, { useState } from 'react'

function LogInForm({ Login, error }) {
    const [details, setDetails] = useState({email: '', password: ''})

    const handleSubmit = async (e) => {
        e.preventDefault()
        Login(details)
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error != "") ? ( <div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" className={(error.email ? 'error' : '')} id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                <div className="errorMessage  mb-3">{error.email}</div>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" className={(error.password ? 'error' : '')} id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                <div className="errorMessage mb-3">{error.password}</div>
            </div>
            <input type="submit" value="Login" />
        </div>
    </form>
  )
}

export default LogInForm