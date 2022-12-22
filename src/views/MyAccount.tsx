import React from 'react'
import CreateForm from '../components/CreateForm'
import FooterSection from '../section/FooterSection'
import LogInSection from '../section/LogInSection'
import MainMenuSection from '../section/MainMenuSection'

const MyAccount: React.FC = () => {

  return (
    <>
     <MainMenuSection />
     <LogInSection />
     <CreateForm />
     <FooterSection />
    </>
  )
}

export default MyAccount