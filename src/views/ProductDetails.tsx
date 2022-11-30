import React, { useEffect } from 'react'
import MainMenuSection from '../section/MainMenuSection'
import FooterSection from '../section/FooterSection'
import { useParams } from 'react-router-dom'
import BreadcrumbSection from '../section/BreadcrumbSection'
import ProductDescriptionSection from '../section/ProductDescriptionSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'


const ProductDetails: React.FC = () => {
  const {id} = useParams<string>()
  const {product, getProduct} = useProductContext() as ProductContextType

  useEffect(() =>  {
    getProduct(id)
  }, [])

    return (
      <>
          <MainMenuSection />
          <p className="top-info">Get 25% OFF at the Fixxo Selection - Shop Now!</p>
          <BreadcrumbSection parentPage="Product Description" currentPage={product.name} />
          <ProductDescriptionSection item={product} />
          <FooterSection />
      </>
  )
}

export default ProductDetails