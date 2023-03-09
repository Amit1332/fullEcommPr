import React from 'react'
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const AddNewAdresses = () => {
    return (
        <div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header pt-2 pb-0" style={{ border: "none" }} >
                        
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add New Address</h1>
                            <button id="cross" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body pt-0">
                            <div className="container-fluid">
                                <div className="row">
                                    <div class="mb-2">
                                        <label  for="exampleInputEmail1" class="form-label">Address line</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Address line 1' />
                                    </div>
                                 <div className="container-fluid gap-2 d-flex inp ">
                                    <div className="col-6">
                                        <form>
                                            <div class="mb-2">
                                                <label  for="exampleInputEmail1" class="form-label">Email Address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter Email' />
                                            </div>

                                            <div class="mb-2">
                                                <label  for="exampleInputPassword1" class="form-label">Country</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"  placeholder='Enter Country' />
                                            </div>
                                            <div class="mb-2">
                                                <label  for="exampleInputPassword1" class="form-label">City</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"  placeholder='Enter City' />
                                            </div>
                                          
                                        </form>
                                    </div>
                                    <div className="col-6">
                                        <form>
                                            <div class="mb-2">
                                                <label  for="exampleInputEmail1" class="form-label">Phone</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter Phone'/>
                                            </div>
                                            <div class="mb-2">
                                                <label  for="exampleInputPassword1" class="form-label">State</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"  placeholder='Enter State'/>
                                            </div>
                                            <div class="mb-2">
                                                <label  for="exampleInputPassword1" class="form-label">Zip Code</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"  placeholder='Enter Zip Code'/>
                                            </div>
                        
                                        </form>
                                    </div>
                                    </div>
                                    <div className="container-fluid d-flex " id='bottom' >
                                            <div className=" container  form-check" style={{fontSize :".8rem"}} >
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Set as primary billing address</label>
                                            </div>
                                            <div className="container d-flex gap-2 mt-3 ">
                                            <Button size='small' style={{color:"white" , backgroundColor:"#164C96",textTransform:"capitalize",borderRadius:"2rem",height:"1.8rem"}} variant="outlined" startIcon={<TaskAltIcon  style={{fontSize:".8rem"}} />}>
                                             Save Details
                                            </Button>
                                            <Button size='small' style={{color:"#344054",fontWeight:"700",fontSize:".7rem",boxShadow:"none",border: "1px solid #D0D5DD" , backgroundColor:"transparent" ,textTransform:"capitalize",borderRadius:"2rem",height:"1.8rem"}} variant="contained" startIcon={<HighlightOffIcon style={{fontSize:".8rem"}}/>}>
                                             Cancel
                                            </Button>
                                            </div>
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