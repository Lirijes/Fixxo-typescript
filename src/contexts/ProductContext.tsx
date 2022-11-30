import { createContext, useContext, useState } from "react"
import { Product } from "../models/productModel"

export interface ProductContextType {
    product: Product
    allProducts: Product[]
    featuredProducts: Product[]
    saleProducts: Product[]

    getProduct: (articleNumber?: string) => void
    getallProducts: () => void
    getfeaturedProducts: (take?: number) => void
    getsaleProducts: (take?: number) => void
}

interface ProductProviderProps {
    children: any
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

const ProductProvider: React.FC<ProductProviderProps> = ({children}) => { //cred till Ninja för koden nedan
    const EMPTY_PRODUCT: Product = {
        articleNumber: '', name: '', category: '', price: 0, imageName: '', discountprice: 0,
        quantity: 0
    }
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    
    const [product, setProduct] = useState<Product>(EMPTY_PRODUCT)
    const [allProducts, setallProducts] = useState<Product[]>([])
    const [featuredProducts, setfeaturedProducts] = useState<Product[]>([])
    const [saleProducts, setsaleProducts] = useState<Product[]>([])

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const result = await fetch(url + `/${articleNumber}`)
            setProduct(await result.json())
        }
    }

    const getallProducts = async () => {
        const result = await fetch(url)
        setallProducts(await result.json())
    }

    const getfeaturedProducts = async (take: number = 0) => {
        const result = await fetch(url + `?take=${take}`)
        const data = await result.json()
        console.log(data)
        setfeaturedProducts(data)
    }

    const getsaleProducts = async (take: number = 0) => {
        const result = await fetch(url + `?take=${take}`)
        setsaleProducts(await result.json())
    }

    return (
       <ProductContext.Provider value={{product, getProduct, allProducts, getallProducts, featuredProducts, getfeaturedProducts, saleProducts, getsaleProducts }}>
            {children}
       </ProductContext.Provider>
    )
}

export default ProductProvider