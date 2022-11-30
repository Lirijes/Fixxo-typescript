import React from 'react'
import ProductCard from '../components/ProductCard'
import { Product } from '../models/productModel'

interface ProductGridType {
  title: string
  items: Product[]
}

const ProductGridSection: React.FC<ProductGridType> = ({title, items = []}) => {

  return (
    <section>
        <div className="product-grid">
            <div className="container">
                <div className="featured-product-header">{title}</div>
                <div className="grid">
                    {
                      items.map( product => <ProductCard key={product.articleNumber} item={product} />) /* här lägger vi in våra produkter, på vår home vy lägger vi in product.context för att de ska synas */
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection