import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
//import { ProductContext, ProductContextType } from '../contexts/ProductContext'


const GET_VENDOR_QUERY = gql`{ vendors { _id, name } }` //här hämtar vi vendors som vi gjorde på testen i graphql

const CreateProduct = () => {
    const default_value = { name: '', description: '', price: '', category: '', tag: '', rating: '', imageName: '', vendorId: '0' }
    const [product, setProduct] = useState(default_value) 
    //const { ProductNew, setproductNew, create } = React.useContext(ProductContext) as ProductContextType
    const {loading, error, data} = useQuery(GET_VENDOR_QUERY) // hämtas från gql

    const populateVendors = () => {
      if (loading) return <option disabled>Loading...</option>
      if (error) return <option disabled>An error occured</option>
      return data.vendors.map(vendor => (<option key={vendor._id} value={vendor._id}>{vendor.name}</option>)) //sätter in det vi hämtat
    } 

    const handleSubmit = (e) => {
      e.preventDefault()

      setProduct(default_value)
    }

  return (
    <form onSubmit={handleSubmit} className="d-grid mb-5">
       <h4 className="mb-4">Create Product</h4>
       <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value })} className="form-control py-2 mb-3" placeholder="Enter item name..." />
       <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value })} className="form-control py-2 mb-3" placeholder="Enter item price..." />
       <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value })} className="form-control py-2 mb-3" placeholder="Enter item category..." />
       <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value })} className="form-control py-2 mb-3" placeholder="Enter item tag..." />
       <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value })} className="form-control py-2 mb-3" placeholder="Enter item rating..." />
       <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value })} className="form-control py-2 mb-3" placeholder="Enter item picture link..." />
       
       <select value={product.vendorId} onChange={(e) => setProduct({...product, vendorId: e.target.value })} className="form-select mb-3">
        <option value="0" disabled>Choose delivery</option>
        { populateVendors() }
       </select>
       
       <textarea value={product.description} onChange={(e) => setProduct({...product, description: e.target.value })} className="form-control py-2 mb-3" rows={6} placeholder="Enter item description..."></textarea>
       
       <button type="submit" className="btn btn-secondary py-2 mt-3">CREATE PRODUCT</button> 
    </form>
  )
}

export default CreateProduct