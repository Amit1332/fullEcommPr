import React from 'react'
import AddNewAdresses from './AddNewAdresses/AddNewAdresses'
import ManageAddressesContent from './ManageAddressesContent/ManageAddressesContent'

const ManageAddresses = () => {
  return (
    <div className='container-fluid mt-5'>
      <ManageAddressesContent btnData={{ databstoggle: "modal", databstarget: "#staticBackdrop" }} />
      <AddNewAdresses />
    </div>  
  )
}

export default ManageAddresses;