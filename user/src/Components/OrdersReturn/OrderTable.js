import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Data from "./OrderData";
import "../OrdersReturn/Orders.css";


export default function OrderTable() {
    return (
        <table  className="text-nowrap overflow-auto  table table-content-coupon p-0 w-100" style={{  fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
            <thead>
                <tr className=' p-0 overflow-auto  text-dark bg-opacity-10' style={{backgroundColor:"#F9FAFB",}} >
                    {/* <th scope="col" className='m-0 p-1 text-center '>#</th> */}
                    <th className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex pt-0 mb-1">
                            <p style={{ marginBottom: `0px`, fontSize:"14px" , fontWeight:"600" }}>Product ID</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className=' text-end p-0'style={{ margin: `0px` ,  }}>
                        <div className="d-flex pt-0" style={{paddingTop:"10px"}}>
                            <p id='product-2' style={{marginBottom:"",fontSize:"14px", textAlign:"center" , fontWeight:"600"  }}>Product</p>
                           
                        </div>
                    </th>
                    <th scope="col" className='m-0 p-1'style={{ marginBottom: `0px`,fontSize:"14px" , fontWeight:"600"  }}>Status</th>
                    <th scope="col" className='m-0 p-1 d-flex'style={{ marginBottom: `0px`,fontSize:"14px" , fontWeight:"600"  }}>Price  <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div></th>
                    <th scope="col" className='m-0 p-1'style={{ marginBottom: `0px`,fontSize:"14px" , fontWeight:"600"  }}>Action</th>
                </tr>
            </thead>
            <tbody className=''>
                {Data.map((data) => {
                    return (
                        <tr className='  m-0 p-5'>
                            <th scope='row' className=' p-0 py-1 productcol1' style={{fontWeight: '400',paddingTop:"25px", fontSize: `14px`,lineHeight: `20px`,color:`#344054`}}>
                               <p></p> {data.product_id}
                            </th>
                            <td className='px-2 py-1' style={{backgroundColor:"transparent"}}><span className = 'bg-dark mt-5'> <div className="prod-img"><div className="product-img"><img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" /> </div> <div className="product-content"><h4 style={{marginBottom:'0px'}}>Cotton Baby Bed Protecting Mat</h4> <h5>Color- Dark Blue, Size: Extra Large</h5></div>{data.product} </div></span></td>
                            <td className='px-2 py-1' style={{paddingTop:"25px"}}> <div className="order-status text-center"><h4>Inprogress</h4></div> <p> {data.status} </p>  </td>
                            <td className='px-2 py-1' style={{paddingTop:"25px"}}> <div className="prod-img"> <div className="product-content "><h4 style={{marginBottom:'0px', marginTop:"10px"}}>₹109.00</h4> <h5 style={{marginBottom:'0px'}}>Order Delivered on 9th Sep</h5></div> </div>{data.price}</td>
                            <td className='px-0 py-3' style={{paddingTop:"20px"}}>{data.action}
                               <div className="view-details"><h5>View Details</h5></div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    )
    
}


//  <div className="prod-img"><div className="product-img"><img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" /> </div> <div className="product-content"><h4>Cotton Baby Bed Protecting Mat</h4> <h5>Color- Dark Blue, Size: Extra Large</h5></div>{data.product} </div>