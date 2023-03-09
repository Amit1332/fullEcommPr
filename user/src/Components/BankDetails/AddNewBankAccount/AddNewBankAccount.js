import React from 'react'
import "./AddNewBankAccount.css"
const AddNewAdresses = () => {
    return (
        <div>
            <div class="modal fade bankdetails_model" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header " style={{ border: "none", color: "#344054" }} >
                            <h1 class="modal-title fs-5 " id="staticBackdropLabel">Account Holder Name</h1>
                            <button type="button" class="btn-close" style={{ border: "1px solid gray", borderRadius: "50%", fontSize: ".5rem" }} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div class="mb-2">
                                        <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Account Holder Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ fontSize: ".8rem" }} placeholder='Enter account holder name' />
                                    </div>

                                    <div class="mb-2">
                                        <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Bank Account Number</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ fontSize: ".8rem" }} placeholder='Enter bank account number' />
                                    </div>

                                    <div class="mb-2">
                                        <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Re-enter Bank Account Number</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ fontSize: ".8rem" }} placeholder='Re-enter bank account number' />
                                    </div>

                                    <div class="mb-2">
                                        <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">IFSC Code</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ fontSize: ".8rem" }} placeholder='Enter IFSC code' />
                                    </div>

                                    <div className='mb-2 mt-2 d-flex gap-2'>
                                        <button type="button" id="btn1" class="btn btn-primary btn-sm rounded-pill"> <i class="las la-check-circle"></i> <span>Save Address</span> </button>
                                        <button type="button"  id="btn2"  class="btn btn-secondary btn-sm rounded-pill"> <i class="ri-close-circle-line"></i> <span>Cancel</span> </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewAdresses