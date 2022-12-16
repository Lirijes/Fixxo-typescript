import React from 'react'
import CreateProduct from '../components/CreateProduct'
import CreateVendorForm from '../components/CreateVendorForm'
import ProductList from '../components/ProductList'
import VendorList from '../components/VendorList'
import MainMenuSection from '../section/MainMenuSection'

const Vendor = () => {
  return (
    <>
    <MainMenuSection />
    <div className="container mt-5">
        <div className="row">
            <div className="col-6 mb-5"><CreateVendorForm /></div>
            <div className="col-6 mb-5"><VendorList /></div>
            <div className="col-6"><CreateProduct /></div>
            <div className="col-6"><ProductList /></div>
        </div>
    </div>
    </>
  )
}

export default Vendor