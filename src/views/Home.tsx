import React, { useEffect } from 'react'
import Showcase from '../section/ShowcaseSection'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'
import ProductGridSection from '../section/ProductGridSection'
import ConsciousSection from '../section/ConsciousSection'
import FlashSaleLeft from '../section/FlashSaleLeft'
import FlashSaleRight from '../section/FlashSaleRight'
import BottomMenuSection from '../section/BottomMenuSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const Home: React.FC = () => {
  document.title = 'Fixxo.' //detta gör att namnet på fliken ändras
  
  const {featuredProducts, getfeaturedProducts, saleProducts, getsaleProducts} = useProductContext() as ProductContextType

  useEffect(() =>  {
    getfeaturedProducts(8)
    getsaleProducts(4)
  }, [])

  return (
    <>
      <header style={{ backgroundColor : "#F5F5F5" , height : "90px" }}> {/* ljusgrå bakgrundsfärg på home */}
        <MainMenuSection />
      </header>
      <Showcase />
      <ProductGridSection title="Featured Products" items={featuredProducts} /> {/* här hämtas produkterna i listan in och läggs in i den sectionen */}
      <ConsciousSection />
      <FlashSaleLeft items={saleProducts} />
      <FlashSaleRight items={saleProducts} />
      <BottomMenuSection />
      <FooterSection />
    </>
  )
}

export default Home