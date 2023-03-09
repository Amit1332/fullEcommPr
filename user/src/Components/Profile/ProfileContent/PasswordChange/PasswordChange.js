import React, { useState } from 'react'

const PasswordChange = () => {
    const [showOne , setShowOne] = useState(true);
    const [showTwo , setShowTwo] = useState(true);
    const [showThree , setShowThree] = useState(true);
    return (
        <div className='container-fluid password_change '>
            <div className="row  py-4" >
                <div className="col-4">
                    <form>
                        <div class="mb-1 rounded-2" >
                            <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Current password</label>
                            <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                <input style={{ border: "none" }}  type={showOne ? "password" : "text"} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                <span onClick={()=>setShowOne(!showOne)} style={{ border: "none" }} class="input-group-text" id="inputGroup-sizing-sm"> {showOne ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>} </span>
                            </div>
                        </div>

                        <div class="mb-1" >
                            <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">New Password</label>
                            <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                <input style={{ border: "none" }} type={showTwo ? "password" : "text"} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                <span onClick={()=>setShowTwo(!showTwo)} style={{ border: "none" }} class="input-group-text" id="inputGroup-sizing-sm">{showTwo ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>}</span>
                            </div>
                        </div>
                        <div class="mb-1" >
                            <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Confirm Password</label>
                            <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                <input style={{ border: "none" }} type={showThree ? "password" : "text"} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                <span onClick={()=>setShowThree(!showThree)} style={{ border: "none" }} class="input-group-text" id="inputGroup-sizing-sm">{showThree ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>}</span>
                            </div>
                        </div>
                        <div className="contaioner d-flex gap-2 mt-4">
                            <div className="btn btn-outline-primary d-flex px-2 py-1 gap-1 " style={{ display :"flex",justifyContent:"center",alignItems:"center",width: "fit-content", backgroundColor:"#164C96",color: "white", textTransform: "capitalize", boxShadow: "none", border: "1px solid #D0D5DD", borderRadius: "2rem", fontSize:".7rem",fontWeight: "600" }}> 
                            <i class="las la-check-circle"></i> <button style={{border:"none",outline:"none",backgroundColor:"transparent",color:"white"}}>Change Password</button>
                            </div>
                            <div className="btn d-flex px-2 py-1 gap-1" style={{display :"flex",justifyContent:"center",alignItems:"center", fontSize:"1rem" , width: "fit-content", color: "#344054", textTransform: "capitalize", boxShadow: "none", border: "1px solid #D0D5DD", borderRadius: "2rem", fontWeight: "600",fontSize:".7rem" }}>
                                <i class="ri-close-circle-line"></i><button style={{border:"none",outline:"none",backgroundColor:"transparent"}}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordChange