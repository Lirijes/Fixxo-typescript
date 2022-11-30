import React from 'react'
import MenuIcon from '../components/MenuIcon'

const BottomMenuSection: React.FC = () => {
    
  return (
    <section className="bottom-menu">
        <div className="container">
            <div className="support">
                <span className="circle-icon">
                    <MenuIcon link="/support" icon="fa-regular fa-headset" button={undefined} quantity={0} hideOnMobile={false}/>
                </span>
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="support">
                <span className="circle-icon">
                    <MenuIcon link="/support" icon="fa-regular fa-credit-card" button={undefined} quantity={0} hideOnMobile={false}/>
                </span>
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="support">
                <span className="circle-icon">
                    <MenuIcon link="/support" icon="fa-regular fa-truck" button={undefined} quantity={0} hideOnMobile={false} />
                </span>
                <h1>Free Home Deliver</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="support">
                <span className="circle-icon">
                    <MenuIcon link="/support" icon="fa-regular fa-truck" button={undefined} quantity={0} hideOnMobile={false} />
                </span>
                <h1>30 Days Reuters</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default BottomMenuSection