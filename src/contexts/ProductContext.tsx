import React, { createContext, useContext, useState } from "react"
import { Product, ProductNew } from "../models/productModel"
import { useQuery, gql, ApolloError, ApolloClient } from '@apollo/client'

export interface ProductContextType {
    product: Product
    allProducts: Product[]
    featuredProducts: Product[]
    saleProducts: Product[]
    ProductNew: ProductNew
    setproductNew: React.Dispatch<React.SetStateAction<ProductNew>>

    create: (e: React.FormEvent) => void
    update: (articleNumber: string, e: React.FormEvent) => void
    remove: (articleNumber: string) => void
    getProduct: (articleNumber?: string) => void
    getallProducts: () => void
    getfeaturedProducts: (take?: number) => void
    getsaleProducts: (take?: number) => void
}

//export const GET_ALL_PRODUCTS = gql`{ products { _id, name, description, price, category, tag, rating, imageName } }`
//export const getProductsQL = (GET_ALL_PRODUCTS)


interface ProductProviderProps {
    children: any
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const EMPTY_PRODUCT: Product = {
        tag: '', articleNumber: '', name: '', category: '', price: 0, imageName: '', discountprice: 0,
        quantity: 0
    }

    const defaultProductsNewValues: ProductNew = {
        name: '',
        description: '',
        price: 0,
        imageName: '',
        category: '',
        tag: "",
        rating: 0
    }


    const url = 'http://localhost:5555/api/products'

    const [product, setProduct] = useState<Product>(EMPTY_PRODUCT)
    const [allProducts, setallProducts] = useState<Product[]>([])
    const [featuredProducts, setfeaturedProducts] = useState<Product[]>([])
    const [saleProducts, setsaleProducts] = useState<Product[]>([])
    const [ProductNew, setproductNew] = useState<ProductNew>(defaultProductsNewValues)
    const [getProducts, setProducts] = useState<Product[]>([])    

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ProductNew)
        })

        if (result.status == 201)
            setproductNew(defaultProductsNewValues)
    }

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const result = await fetch(`${url}/details/${articleNumber}`)
            setProduct(await result.json())
        }
    }

    const getallProducts = async () => {
        const result = await fetch(url)
        setallProducts(await result.json())
    }

    const getfeaturedProducts = async (take: number = 0) => {
        let featuredUrl = `${url}/featured`

        if (take !== 0)
            featuredUrl += `/${take}`

        const res = await fetch(featuredUrl)
        setfeaturedProducts(await res.json())
    }

    const getsaleProducts = async (take: number = 0) => {
        let salesUrl = `${url}/sales`

        if (take !== 0)
            salesUrl += `/${take}`

        const result = await fetch(salesUrl)
        setsaleProducts(await result.json())
    }

    const update = async (articleNumber: string, e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${url}/${articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product) 
        })
        
        if (result.status === 201)
            setProduct(await result.json())
    }

    const remove = async (articleNumber: string) => {
        const result = await fetch(`${url}/${articleNumber}`, {
            method: 'delete'
        })
        
        if (result.status === 204)
            setProduct(EMPTY_PRODUCT) //VET EJ OM JAG KAN GÖRA SÅHÄR?
    }

    return (
        <ProductContext.Provider value={{ update, remove, create, ProductNew, setproductNew, product, getProduct, allProducts, getallProducts, featuredProducts, getfeaturedProducts, saleProducts, getsaleProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider