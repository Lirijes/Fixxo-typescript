import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_VENDORS_QUERY = gql`{ vendors { _id, name } }`

const VendorList = () => {

  const {loading, error, data} = useQuery(GET_VENDORS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>An error occured : {error.message}</p>

  return (
    <div className="container">
      <h4 className="mb-3">List of suppliers</h4>
      {
        data.vendors.map(vendor => (<div key={vendor._id}><span className="text-muted">{vendor._id}</span> {vendor.name}</div>))
      }
    </div>
  )
}

export default VendorList