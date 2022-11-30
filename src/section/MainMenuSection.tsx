import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'

const MainMenuSection: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { cartQuantity } = useShoppingCartContext() as ShoppingCartContextType;

  
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="menu-bar">
        <div className="container">
            <NavLink className="logo" to="/" end>Fixxo.</NavLink> 
            <div className={`menu-links ${showMenu ? "d-flex" : ""}`}>
                <NavLink className="menu-link" to="/" end>Home</NavLink>
                <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
                <NavLink className="menu-link" to="/products">Products</NavLink>
                <NavLink className="menu-link" to="/contact" end>Contact</NavLink>
            </div>
            <span className="circle-icon">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" button={undefined} quantity={0} hideOnMobile={false} />
                <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" button={undefined} quantity={0} /> {/* hideonmobile är en klass i MenuIcon som gör att knappen döljer sig vid en viss px med bootstrap */}
                <MenuIcon hideOnMobile={true} quantity={3} link="/wishlist" icon="fa-regular fa-heart" button={undefined} />

                <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{cartQuantity}</span>
                  <i className="fa-regular fa-bag-shopping"></i>
                </button>
            
                <button onClick={toggleMenu} className="d-lg-none btn btn-light btn-dropdown"><i className="fa-regular fa-bars"></i></button> {/* en dropdown knapp som dyker upp vid mindre skärm som får kategorierna att öppna sig som en menyrad under */}

            </span>
        </div>
    </div>
  )
}

export default MainMenuSection