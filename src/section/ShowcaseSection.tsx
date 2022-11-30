import React from 'react'
import LeftImage from '../assets/images/img-2.svg';
import RightImage from '../assets/images/img-1.svg';


const ShowcaseSection: React.FC = () => {
  return (
    <section className="showcase">
        <div className="container-fluid">
            <img className="left-img" src={LeftImage} alt="" />
            <div className="main-menu">
                    <h1>Sale Up To 50% Off</h1>
                    <p>Online shopping free home delivery over $100</p>
                    <button type="button" className="btn btn-red">SHOP NOW</button>
                </div>
            <img className="right-img" src={RightImage} alt="" />
        </div>
    </section>
  )
}

export default ShowcaseSection