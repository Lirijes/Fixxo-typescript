import React, { useEffect } from 'react'
import FooterSection from '../section/FooterSection'
import MainMenuSection from '../section/MainMenuSection'
import ProductGridSection from '../section/ProductGridSection'
import BreadcrumbSection from '../section/BreadcrumbSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const Products: React.FC = () => {

  let currentPage = "Products"
    document.title = `${currentPage} || Fixxo` 

  const {allProducts, getallProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getallProducts()
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Product Grid Section" items={allProducts} />
      <FooterSection />
    </>
  )
}

export default Products