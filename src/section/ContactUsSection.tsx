import React, { useState } from 'react'
import AlertNotification from '../components/AlertNotification'
import { validateEmail, validateText } from '../utilities/Validation'

export interface ContactUsType {
  name: string
  email: string
  comments: string
}

const ContactUsSection: React.FC = () => {

    let currentPage = "Contact Us"
    document.title = `${currentPage} || Fixxo` 
  
    const DEFAULT_VALUES: ContactUsType = {name: '', email: '', comments: ''}
    const [formData, setformData] = useState<ContactUsType>(DEFAULT_VALUES)
    const [errors, setErrors] = useState<ContactUsType>(DEFAULT_VALUES)
    const [submitted, setSubmitted] = useState<boolean>(false)
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setformData({...formData, [id]: value}) //vi tar ett id (name email comment) och sätter ett värde med values

        if (id === 'name')
          setErrors({...errors, [id]: validateText(id, value)})

        if (id === 'email')
          setErrors({...errors, [id]: validateEmail(id, value)})
    }
    
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {id, value} = e.target
        setformData({...formData, [id]: value})

        if (id === 'comments')
          setErrors({...errors, [id]: validateText(id, value, 3)})
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(false)

        if (formData.name !== '' && formData.email !== '' && formData.comments !== '')
          if (errors.name === '' && errors.email === '' && errors.comments === '') { //här görs en validerin av alla fält och om alla fält är tomma (inga error meddelanden) då kan vi fortsätta med submit
            
            const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            })

            if (res.status === 200) {
              setSubmitted(true)
              setformData(DEFAULT_VALUES)
            }
            else {
              setSubmitted(false)
            }
          }
    }
  

  return (
    <section className="contact-us">
    <div className="container">

        {
          submitted ? (<AlertNotification alertType="success" title="Thank you for your comment" text="We will contact you as soon as possible." />) : (<></>)
        }

        <h2>Come in contact with us</h2>
        <form onSubmit={handleSubmit} noValidate>
            <div>
                {/* value används för att skapa ett värde av det som anges i formuläret, för att användaren ska kunna skriva något används onChange som sedan läggs in i objektet contactForm */}
                <input id="name" type="text" className={(errors.name ? 'error': '')} placeholder="Your Name" value={formData.name} onChange={(e) => handleChange(e)} required />
                <div className="errorMessage">{errors.name}</div>
            </div>
            <div>
                <input id="email" type="email" className={(errors.email ? 'error': '')} placeholder="Your Mail" value={formData.email} onChange={(e) => handleChange(e)} />
                <div className="errorMessage">{errors.email}</div>
            </div>
            <div className="textarea">
                <textarea id="comments" className={(errors.comments ? 'error': '')} placeholder="Comments" value={formData.comments} onChange={(e) => handleTextAreaChange(e)} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )}></textarea>
                <div className="errorMessage">{errors.comments}</div>
            </div>
            <button className="btn-red" type="submit">POST COMMENT</button>
        </form>
    </div>
    </section>
  )
}


export default ContactUsSection