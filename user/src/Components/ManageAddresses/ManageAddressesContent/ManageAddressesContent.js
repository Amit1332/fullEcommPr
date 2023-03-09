import React from 'react'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import "./ManageAddressesContent.css";
const ManageAddressesContent = ({ btnData }) => {

        const data = [
            {
                name :"Priya Pathak",
                houseNumber :"43, Nilkamal House, Parvat Patiya",
                address :"Surat, Gujarat - 364589",
                mobileno: "+91 9852454852",
            }
            ,   {
                name :"Priya Pathak",
                houseNumber :"43, Nilkamal House, Parvat Patiya",
                address :"Surat, Gujarat - 364589",
                mobileno: "+91 9852454852",
            },
            {
                name :"Priya Pathak",
                houseNumber :"43, Nilkamal House, Parvat Patiya",
                address :"Surat, Gujarat - 364589",
                mobileno: "+91 9852454852",
            },
            {
                name :"Priya Pathak",
                houseNumber :"43, Nilkamal House, Parvat Patiya",
                address :"Surat, Gujarat - 364589",
                mobileno: "+91 9852454852",
            }
        ]

    return (
        <>
            <div className='container-fluid manage_addressCont text-nowrap p-0'>
                <nav className="navbar bg-body-tertiary" style={{boxShadow:"none"}}>
                    <div className="container-fluid p-0" >
                    
                    <div className="term-nav-left mt-3"> <h3>Manage Address</h3></div>
                        {/* <a className="navbar-brand" style={{ color: "color: #1D2939", fontWeight: "600" }}>Manage Addresses</a> */}
                        <div className="d-flex gap-2 " role="search" >
                            <div className='container d-flex align-items-center border rounded-pill' >
                                <i className="ri-search-line"></i>
                                <input style={{backgroundColor:"transparent"}} className="form-control me-2 rounded-pill border-0 shadow-0" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                            <button data-bs-toggle={btnData.databstoggle} data-bs-target={btnData.databstarget} className="btn btn-outline-success d-flex align-items-center border-0 rounded-pill text-light gap-2" style={{ background: '#164C96', textTransform: "capitalize" }} type="submit">
                                <i style={{fontSize:"1rem"}} className="las la-plus-circle"></i>
                                <span>Add New Address</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container-fluid manage_addressCont border mt-3 p-3 rounded-3  ">
                <div className="row text-nowrap gap-0 p-0" id='dd' >
               {
                data.map((elemnt)=>{
                    return(
                        <div className="col-6">
                            <div className="card bg-transparent border" id="card">
                                <div className="p-1">
                                <div className="d-flex justify-content-between" id='content'>
                                    <div className="">
                                        <div className="container d-flex gap-3 text-nowrap" id='address_Heading' >
                                            <h6>{elemnt.name}</h6>
                                            <button id='homebtn' type="button" className="btn btn-primary-secondary btn-sm">Home</button>
                                        </div>
                                        <div className="container text-nowrap">
                                         <p  id='paragraph'>{elemnt.houseNumber}</p>
                                         <p id='paragraph'>{elemnt.address}</p>
                                         <p id='paragraph'>Mobile ;<b style={{color:"#1D2939"}} >{elemnt.mobileno}</b> </p>
                                        </div>
                                    </div>
                                    <div className="vvvvvvvv">
                                        <div className="d-flex gap-1 px-3" style={{display:"flex" , justifyContent:"center",alignItems:"center"}}>
                                        <Button id='homebtn' size="small" variant="outlined" startIcon={<EditIcon />}>
                                            Edit
                                        </Button>

                                            <button id='homebtn' type="button" className="btn btn-primary-secondary btn-sm">Remove</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
                
                <div className="container-fluid manage_addressCont border gap-2 mt-2 text-nowrap " style={{ display: "flex", cursor:"pointer",justifyContent: "flex-start", alignItems: "center", borderRadius: "1rem", padding: "1rem .5rem", color: "#164C96", fontWeight: "500" }}>
                    <i style={{ fontSize: "1.5rem",color:"#164C96"}} className="las la-plus-circle"></i> Add New Address
                </div>
            </div>
        </>
    )
}

export default ManageAddressesContent