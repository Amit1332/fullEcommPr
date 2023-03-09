import React from 'react'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import "./BankDetailsContent.css";
const BankDetailsContent = ({btnData}) => {
    const data = [
        {
            name :"Priya Pathak",
            payment_icon : <i class="lab la-cc-visa"></i>,
            card_number : "Visa ******9016",
            card_type : "debit",
            expire_date :"Expired 04/21"
        },
        {
            name :"Priya Pathak",
            payment_icon : <i class="las la-university"></i>,
            card_number : "Mastercard ******9016",
            card_type : "debit",
            expire_date :"Expired 04/21"
        },
        {
            name :"Priya Pathak",
            card_number : "SBI-Rander *************9016",
            card_type : "IFSC Code : SBI-5456",
            expire_date :"Expired 04/21"
        },
        {
            name :"Priya Pathak",
            card_number : "Mastercard ******9016",
            card_type : "debit",
            expire_date :"Expired 04/21"
        },
    ];

    return (
        <>
        <div className='container-fluid  manage_addressCont text-nowrap px-3'>
            <nav className="navbar bg-body-tertiary" style={{boxShadow:"none"}}>
                <div className="container-fluid p-0" >
                <div className="term-nav-left mt-3"> <h3>Bank Details</h3></div>
                    {/* <a className="navbar-brand" style={{ color: "color: #1D2939", fontWeight: "600" }}>Bank Details</a> */}
                    <div className="d-flex gap-2 " role="search" >
                        <div className='container d-flex align-items-center border rounded-pill' >
                            <i className="ri-search-line"></i>
                            <input style={{backgroundColor:"transparent"}} className="form-control me-2 rounded-pill border-0 shadow-0" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <button data-bs-toggle={btnData.databstoggle} data-bs-target={btnData.databstarget} className="btn btn-outline-success d-flex align-items-center border-0 rounded-pill text-light gap-2" style={{ background: '#164C96', textTransform: "capitalize" }} type="submit">
                            <i style={{fontSize:"1rem"}} className="las la-plus-circle"></i>
                            <span>Add New</span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
<div className="px-4">
        <div className="container-fluid manage_addressCont border mt-3 px-3 pb-2 pt-0 rounded-3  ">
            <div className="row text-nowrap  p-0" id='dd' >
           {
            data.map((element)=>{
                return(
                    <div className="col-6 px-2 " >
                        <div className="card bg-transparent border" id="card">
                            <div className="p-1">
                            <div className="d-flex justify-content-between" id='content'>
                                <div className="">
                                    <div className="container d-flex gap-3 text-nowrap" id='address_Heading' >
                                        <h6>{element.name}</h6>
                                    </div>
                                    <div className="container-fluid d-flex" style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}>
                                        <div className="container-fluid rounded-2 px-4" style={{height:"2rem" ,width:"2rem",fontSize:"2rem",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            {element.payment_icon}
                                        </div>
                                        <div className="container-fluid text-nowrap">
                                            <h6 style={{fontWeight:"700",color:"#1D2939"}} id='paragraph'>{element.card_number}</h6>
                                            <p style={{fontWeight:"400",color:"#667085"}}>{element.card_type} {element.expire_date}</p>
                                        </div>
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
        </div>
    </>
    )
}

export default BankDetailsContent