import React, { useEffect, useState } from 'react'
import { UserContext, IUserContext } from '../contexts/UserContext'
import { UserSignIn } from '../models/userModel'
import { validateEmail, validatePassword } from '../utilities/Validation'


const LogInSection: React.FC = () => {

  const { get } = React.useContext(UserContext) as IUserContext

    let currentPage = "My Account"
    document.title = `${currentPage} || Fixxo` 

    const DEFAULT_VALUES: UserSignIn = {email: '', password: ''}
    const [formData, setformData] = useState<UserSignIn>(DEFAULT_VALUES) 
    const [errors, setErrors] = useState<UserSignIn>(DEFAULT_VALUES)
    const [submitted, setSubmitted] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setformData({...formData, [id]: value}) //vi tar ett id ( email password) och sätter ett värde med value
        
        if (id === 'email')
          setErrors({...errors, [id]: validateEmail(id, value)})

        if (id === 'password')
            setErrors({...errors, [id]: validatePassword(id, value)})
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(false)

        if (formData.email !== '' && formData.password !== '')
          if (errors.email === '' && errors.password === '') { //här görs en validerin av alla fält och om alla fält är tomma (inga error meddelanden) då kan vi fortsätta med submit
            
            const res = await fetch('http://localhost:5555/api/users', {
              method: 'get',
              headers: {
                'Content-Type': 'application/json'
              },
              //body: JSON.stringify(formData)
            })

            if (res.status === 200) {
              setSubmitted(true)
              setformData(DEFAULT_VALUES)
              console.log("Logged in")
            }
            else {
              setSubmitted(false)
            }
          }
    }

    const Logout = () => {
      setformData(DEFAULT_VALUES)
    }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div>LOG IN</div>
          <div>
              <input id="email" type="email" className={(errors.email ? 'error': '')} placeholder="Your Email" value={formData.email} onChange={(e) => handleChange(e)} />
              <div className="errorMessage  mb-3">{errors.email}</div>
          </div>
          <div>
              <input id="password" type="password" className={(errors.password ? 'error': '')} placeholder="Your Password" value={formData.password} onChange={(e) => handleChange(e)} />
              <div className="errorMessage mb-3">{errors.password}</div>
          </div>
          <button className="btn-red mb-5" type="submit">LOG IN</button>
      </form>
    </>
  )
}

export default LogInSection