import React from 'react'
import { useQuery, gql } from '@apollo/client'

//vad som ska hämtas
const GET_PRODUCTS_QUERY = gql`{ products { _id, name, description, price, category, tag, rating, imageName } }` //här hämtar vi vendors som vi gjorde på testen i graphql


const ProductList = () => {
  const {loading, error, data} = useQuery(GET_PRODUCTS_QUERY) //här hämtar vi

  if (loading) return <p>Loading...</p>
  if (error) return <p>An error occured : {error.message}</p>


  return (
    <div className="container">
    <h4 className="mb-3">List of Products</h4>

    {
      data.products.map(product => (<div key={product._id}><span className="text-muted">{product.name}</span> {product.name}</div>))
    }
    </div>
  )
}

export default ProductList