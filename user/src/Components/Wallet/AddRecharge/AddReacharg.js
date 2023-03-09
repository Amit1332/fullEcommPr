import React from 'react'

const AddReacharg = () => {
    return (
        <div class="offcanvas offcanvas-top p-2 rounded-3 mt-5 " tabindex="-1"  style={{zIndex:"9999", width:"50%", height:"fit-content",marginLeft:"25vw"}} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
  <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Money</h1>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
                <div >
                    <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Amount</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter amount' />
                </div>
                <div >
                    <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Select Payment Method</label>
                    <select class="form-select" aria-label="Default select example">
<option selected>Enter bank account number</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
                </div>
                <div className='mb-2 mt-2 d-flex gap-2'>
                <button type="button btn22" id="btn22" class="btn  btn-sm rounded-pill"> <i class="las la-check-circle text-light"></i> <span>Save Address</span> </button>
                    <button type="button"  id="btn"  class="btn btn-secondary btn-sm rounded-pill"> <i class="ri-close-circle-line "></i> <span>Cancel</span> </button>
                </div>
        </div>
    </div>


    )
}

export default AddReacharg
