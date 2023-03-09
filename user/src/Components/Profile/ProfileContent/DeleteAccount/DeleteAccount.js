import React, { useState } from 'react'

const DeleteAccount = () => {
const [show , setShow] = useState("false");
const showPassword = ()=>{
    setShow(!show);
}


    return (
        <div className='container-fluid'>
            <div style={{ backgroundColor: "#FEF8F2", color: "#DC6803", fontSize: ".7rem" }} className="alert alert-warning alert-dismissible fade show px-2" role="alert">
                <span ><i style={{ color: "#DC6803" }} class="ri-alert-line"></i></span>
                When you delete your account, your public profile will be deactivated immediately. If you change your
                mind before the 14 days are up, sign in with your email and password, and we'll send a link to
                reactivate account.
                
            </div>

            <div className="container-fluid delete_account">
                <div className="row text-nowrap">
                    <div className="col-4">
                        <div class="mb-1" >
                            <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Enter Password</label>
                            <div style={{ overflow: "hidden", outline: "none" }} className=" input-group input-group-sm mb-3 border rounded-2">
                                {
                                    show ? 
                                  <>
                                    <input style={{ border: "none", width: "fit-content" }} placeholder="Enter password" type="password" className="form-control text-nowrap" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    <span style={{ border: "none" }} class="input-group-text" id="inputGroup-sizing-sm"><i onClick={()=>showPassword()} class="las la-low-vision"></i></span>
                                    
                                  </>
                                    :
                                   <>
                                    <input style={{ border: "none", width: "fit-content" }} placeholder="Enter password" type="text" className="form-control text-nowrap" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    <span style={{ border: "none" }} class="input-group-text" id="inputGroup-sizing-sm"><i onClick={()=>showPassword()} class="ri-eye-line"></i></span>
                                   </>
                                }
                            </div>
                        </div>
                        <div className="contaioner d-flex gap-2 mt-4">
                            <div className="btn btn-outline-primary d-flex px-2 py-1 gap-1 " style={{ display :"flex",justifyContent:"center",alignItems:"center",width: "fit-content", backgroundColor:"#D92D20",color: "white", textTransform: "capitalize", boxShadow: "none", border: "1px solid #D0D5DD", borderRadius: "2rem", fontSize:".7rem",fontWeight: "600" }}> 
                            <i class="ri-delete-bin-line"></i>  <button style={{border:"none",outline:"none",backgroundColor:"transparent",color:"white"}}>Save Details</button>
                            </div>
                            <div className="btn d-flex px-2 py-1 gap-1" style={{display :"flex",justifyContent:"center",alignItems:"center", fontSize:"1rem" , width: "fit-content", color: "#344054", textTransform: "capitalize", boxShadow: "none", border: "1px solid #D0D5DD", borderRadius: "2rem", fontWeight: "600",fontSize:".7rem" }}>
                                <i class="ri-close-circle-line"></i><button style={{border:"none",outline:"none",backgroundColor:"transparent"}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeleteAccount