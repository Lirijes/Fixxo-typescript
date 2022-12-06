import React from 'react'
import FooterSection from '../section/FooterSection'
import ListOfProducts from '../section/ListOfProducts'
import ListOfUsers from '../section/ListOfUsers'
import MainMenuSection from '../section/MainMenuSection'

const Categories: React.FC = () => {
  return (
    <>
      <MainMenuSection />
      <ListOfUsers />
      <ListOfProducts />
      <FooterSection />
    </>
  )
}

export default Categories