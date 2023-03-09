import React from 'react'
import "./BasicInfo.css"
const BasicInfo = () => {
    return (

        <div className="container-fluid basic_info">
             
            <div className="card px-3" style={{ width :"fit-content" , display: "flex", flexDirection: "row", alignItems: "center",backgroundColor:"transparent" ,boxShadow:"none"}} >
                <div>
                <img  src="https://images.unsplash.com/photo-1578102718171-ec1f91680562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" class="card-img-top" alt="..." />
                </div>
                <div class="card-body " >
                    <h5  class="card-title">Card title</h5>
                    <p  class="card-text pb-1">PNG or JPG no bigger than IOOOpx wide and tall.</p>
                    <div className="contaioner d-flex gap-2">
                        <div className="btn d-flex px-2 py-1 gap-1" id='profile_button_upload' >
                            <i class="ri-upload-2-line"></i> <span>Upload New Photo</span>
                        </div>
                        <div className="btn d-flex px-2 py-1 gap-1" id='profile_button_delete'  >
                            <i class="ri-delete-bin-line"></i> <span>Delete Photo</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-8">
                    <form>
                      <div className="row">
                                <div class="col mb-1" >
                                    <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">First Name</label>
                                    <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                        <input style={{ border: "none" }} type="text" placeholder='First Name' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                                <div class="col mb-1" >
                                    <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                        <input style={{ border: "none" }} type="text" placeholder='Last Name' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                        </div>   

                        <div className="row">
                                <div class="col mb-1" >
                                    <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Email Address</label>
                                    <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                        <input style={{ border: "none" }} type="text" placeholder='bocouse@example.com' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                                <div class="col mb-1" >
                                    <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Phone</label>
                                    <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                        <input style={{ border: "none" }} type="text" placeholder='+91 98124 56525' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                        </div> 

                         <div className="row bottom_row">
                                <div class="col mb-1" >
                                    <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Date of Birth</label>
                                    <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                        <input style={{ border: "none" }} type="date" placeholder='' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                                <div class="col mb-1" >
                                    <label style={{ fontSize: ".8rem", fontWeight: "700" }} for="exampleInputEmail1" class="form-label">Mobile</label>
                                    <div style={{ overflow: "hidden", outline: "none" }} className="input-group input-group-sm mb-3 border rounded-2">
                                        <input style={{ border: "none" }} type="text" placeholder='Mobile details' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                        </div>

                        <div className="contaioner d-flex gap-2 mt-2">
                            <div className="btn btn-outline-primary d-flex px-2 py-1 gap-1 " style={{ display :"flex",justifyContent:"center",alignItems:"center",width: "fit-content", backgroundColor:"#164C96",color: "white", textTransform: "capitalize", boxShadow: "none", border: "1px solid #D0D5DD", borderRadius: "2rem", fontSize:".7rem",fontWeight: "600" }}> 
                            <i class="las la-check-circle"></i> <button style={{border:"none",outline:"none",backgroundColor:"transparent",color:"white"}}>Save Details</button>
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

export default BasicInfo;
