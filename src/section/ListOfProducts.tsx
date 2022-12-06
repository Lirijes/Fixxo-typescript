import React from 'react'
import CreateProduct from '../components/CreateProduct'
import ProductList from '../components/ProductList'
import ProductProvider from '../contexts/ProductContext'

const ListOfProducts: React.FC = () => {
  return (
    <ProductProvider>
        <CreateProduct />
        <ProductList />
    </ProductProvider>
  )
}

export default ListOfProducts