import React from 'react'
import Counter from '../components/Counter'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'

const WishList: React.FC = () => {
  return (
    <>
      <MainMenuSection />
      <Counter />
      <FooterSection />
    </>
  )
}

export default WishList