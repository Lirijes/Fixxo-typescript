export interface Product {
    articleNumber: string
    name: string
    description?: string
    price: number
    imageName: string 
    category: string
    discountprice: number
    quantity: number
}

export interface ProductNew {
    name: string
    description: string
    price: number
    imageName: string 
    category: string
}