import React from 'react'
import ProductCard from '../components/ProductCard'
import { Product } from '../models/productModel'

interface FlashSaleRight {
  items: Product[]
}

const FlashSaleRight: React.FC<FlashSaleRight> = ({items}) => {

  return (
    <section className="flash-sale-right container">
        <div className="row row-cols-2 row-cols-md-2 g-4 flash-sale-right-cards" style={{"width" : "90%"}}>
              {
              items.map(product => <ProductCard key={product.articleNumber} item={product} />)
              }
        </div>
        <div className="flash-sale-box">
            <h1>2 FOR USD $29</h1>
            <button type="button" className="btn btn-red">FLASH SALE</button>
        </div>
    </section>
  )
}

export default FlashSaleRight