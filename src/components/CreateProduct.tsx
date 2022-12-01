import React from 'react'
import { ProductContext, ProductContextType } from '../contexts/ProductContext'

const CreateProduct = () => {
    const { ProductNew, setproductNew, create } = React.useContext(ProductContext) as ProductContextType

  return (
    <form onSubmit={create} className="d-grid mb-5">
       <h3 className="display-6 mb-4">Create Product</h3>
       <input value={ProductNew.name} onChange={(e) => setproductNew({...ProductNew, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter item name..." />
       <input value={ProductNew.description} onChange={(e) => setproductNew({...ProductNew, description: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter item description..." />
       <input value={ProductNew.price} onChange={(e) => setproductNew({...ProductNew, price: e.target.valueAsNumber })} type="number" className="form-control py-2 mb-3" placeholder="Enter item price..." />
       <input value={ProductNew.imageName} onChange={(e) => setproductNew({...ProductNew, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter item picture..." />
       <input value={ProductNew.category} onChange={(e) => setproductNew({...ProductNew, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter item category..." />
       
       <button type="submit" className="btn py-2 mt-3">CREATE PRODUCT</button> 
    </form>
  )
}

export default CreateProduct