import React, { useEffect } from 'react'
import { ProductContext, ProductContextType } from '../contexts/ProductContext'
import { Product } from '../models/productModel';
import CreateProduct from './CreateProduct';

const ProductList = () => {
    const { allProducts, getallProducts } = React.useContext(ProductContext) as ProductContextType

    useEffect (() => {
        getallProducts()
    }, [getallProducts])

  return (
    <>
    <h3 className="display-6 mb-4">List of Products</h3>
        {
            allProducts.map((product: Product) => (<div key={product.articleNumber} className="mb-3">{product.articleNumber} {product.name} {product.price}</div>))
        }
    </>
  )
}

export default ProductList