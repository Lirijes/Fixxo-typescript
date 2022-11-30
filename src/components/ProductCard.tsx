import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext';
import { Product } from '../models/productModel';

interface ProductCardType {
    item: Product
}

const ProductCard: React.FC<ProductCardType> = ({item}) => {
    const { incrementQuantity } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <div className="col">
        <div className="card">
            <img src={item.imageName} alt={item.name} />
            <ul className="card-menu">
                <li>
                    <button className="btn btn-light"><i className="fa-regular fa-heart"></i></button>
                </li>
                <li>
                    <button className="btn btn-light"><i className="fa-regular fa-code-compare"></i></button>
                </li>
                <li>
                    <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item, quantity: 1})} className="btn btn-light"><i className="fa-regular fa-bag-shopping"></i></button>
                </li>
            </ul>
            <div className="card-body"> 
                <Link className="btn btn-red" to={`/products/${item.articleNumber}`} target="_blank" >QUICK VIEW</Link> {/* använder Link istället för NavLink för att kunna använda target blank och öppna sidan i en ny tab. (genom att skriva to: product id skickas man till en specifik produktsida) */}
                <div className="card-info"> 
                    <p className="category">{item.category}</p>
                    <h1>{item.name}</h1>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="card-price">  {/* delas upp separat för att använda flexbox */}
                    <p className="card-price">$ {item.price}</p>
                    <p className="card-dicsount-price">{item.discountprice}</p>
                </div>
            </div>
            <div className="card-background"></div>
        </div>
    </div>
  )
}

export default ProductCard