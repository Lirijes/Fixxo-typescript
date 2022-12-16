import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/ProductCard'

//vad som ska hämtas 
//const GET_ALL_PRODUCTS = gql`{ products { _id, name, description, price, category, tag, rating, imageName } }`


const AllProducts = () => {
    const GET_ALL_PRODUCTS = gql`{ products { _id, name, description, price, category, tag, rating, imageName } }`
    const {loading, error, data} = useQuery(GET_ALL_PRODUCTS) //hämtar från gql
    //const setallProductsQL = useQuery(GET_ALL_PRODUCTS)
    //const { getallProducts} = useProductContext()


    /* const getallProductsQL = () => {
        if (setallProductsQL.loading) return <p>Loading...</p>
        if (setallProductsQL.error) return <p>An error occured</p>
        else {
            getallProductsQL(setallProductsQL.data.products)
        }
        //return data.products.map(setallProductsQL(data.products)) //sätter in det vi hämtat 
    }

    useEffect(() => {
        getallProductsQL()
    }, [getallProductsQL]) */

  return (<section>
        <div className="product-grid">
            <div className="container">
                <div className="featured-product-header">All Products</div>
                <div className="grid">
                    {
                    data?.products.map(product => <ProductCard item={product} key={product._id} />)
                    }   
                </div>
            </div>
        </div>
    </section>
  )
}

export default AllProducts