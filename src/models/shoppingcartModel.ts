import { Product } from "./productModel"

export interface CartItem {
    articleNumber: string
    product: Product
    quantity: number
}


/*
[
    {
        "articleNumber": "123123"
        "quantity": 1,
        "product": {
            "articleNumber": "123123",
            "name": "Product 1",
            "category": "Fashion",
            "price": "70", 
            "imageName": "kfkmdökmlknjedn"
        }
    },
    {
        "articleNumber": "123123"
        "quantity": 1,
        "product": {
            "articleNumber": "123123",
            "name": "Product 1",
            "category": "Fashion",
            "price": "70", 
            "imageName": "kfkmdökmlknjedn"
        }
    },
]
*/