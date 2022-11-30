import React from 'react'
import Counter from '../components/Counter'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'

const ShoppingCart: React.FC = () => {
  return (
    <>
      <MainMenuSection />
      <Counter init={0} />
      <FooterSection />
    </>
  )
}

export default ShoppingCart