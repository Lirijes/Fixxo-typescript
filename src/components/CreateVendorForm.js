import React, { useState } from 'react'

const CreateVendorForm = () => {
  const [vendor, setVendor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setVendor('')
  }

  return (
    <form onSubmit={handleSubmit} className="d-grid mb-5">
      <h4 className="mb-3">Add an supplier</h4>
      <input value={vendor} onChange={e => setVendor(e.target.value)} className="form-control mb-3" placeholder="Leverantörens namn" />
      <button type="submit" className="btn btn-secondary py-2 mt-3">SPARA</button>
    </form>
  )
}

export default CreateVendorForm