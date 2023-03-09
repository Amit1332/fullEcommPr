import React from 'react'
import BankDetailsContent from './BankDetailsContent/BankDetailsContent'
import AddNewBankAccount from "./AddNewBankAccount/AddNewBankAccount";
const BankDetails = () => {
  return (
    <div className='container-fluid mt-5 p-0' >
       <BankDetailsContent btnData={{ databstoggle: "modal", databstarget: "#staticBackdrop" }} />
      <AddNewBankAccount/>
    </div>
  )
}

export default BankDetails
