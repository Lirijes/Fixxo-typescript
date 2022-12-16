import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useProductContext } from '../contexts/ProductContext'
import { Product } from "../models/productModel"

//vad som ska hämtas 
export const GET_ALL_PRODUCTS = gql`{ products { _id, name, description, price, category, tag, rating, imageName } }`

const AllProducts = () => {
    const { allProducts, getallProducts} = useProductContext()
    //const getallProductsQL = useQuery(GET_ALL_PRODUCTS)
    const {loading, error, data} = useQuery(GET_ALL_PRODUCTS) //hämtar från gql
    const setallProductsQL = useQuery(GET_ALL_PRODUCTS)


    const getallProductsQL = () => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>An error occured</p>
        return data.products.map(setallProductsQL(data.products)) //sätter in det vi hämtat 
    }

    useEffect(() => {
        getallProductsQL()
    }, [getallProductsQL])


  return (
    <div>
        {getallProductsQL}
    </div>
  )
}

export default AllProducts