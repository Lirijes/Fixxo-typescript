import React from 'react'
import { NavLink } from 'react-router-dom'

interface MenuIconType {
  button: any
  link: string
  icon: string
  quantity: number
  hideOnMobile: boolean 
}

const MenuIcon: React.FC<MenuIconType> = ({button, link, icon, quantity, hideOnMobile}) => {

  return (
    <button type={button} className={`btn btn-light ${hideOnMobile ? "d-none d-md-flex" : ""}`}> {/* en klass för att kunna dölja vissa knappar efter tex en viss skärm */}
        <NavLink className="menu-icon" to={link} end>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
            <i className={icon}></i>
        </NavLink>
    </button>
  )
}

export default MenuIcon