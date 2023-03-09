import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddNewAdresses from "../BankDetails/AddNewBankAccount/AddNewBankAccount";
import "./Payments.css"
const Payments = () => {
  const Data = [{
    coupon_id:'#F7234',
    coupon_code:'GOODGUYS',
    type:'Product Base',
    status:'paid',
    end_date:'03-10-2022',
    discount:'50%'
},
{
  coupon_id:'#F7234',
  coupon_code:'GOODGUYS',
  type:'Product Base',
  status:'paid',
  end_date:'03-10-2022',
  discount:'50%'
},
{
  coupon_id:'#F7234',
  coupon_code:'GOODGUYS',
  type:'Product Base',
  status:'paid',
  end_date:'03-10-2022',
  discount:'50%'
},
{
  coupon_id:'#F7234',
  coupon_code:'GOODGUYS',
  type:'Product Base',
  status:'paid',
  end_date:'03-10-2022',
  discount:'50%'
},
{
  coupon_id:'#F7234',
  coupon_code:'GOODGUYS',
  type:'Product Base',
  status:'paid',
  end_date:'03-10-2022',
  discount:'50%'
},
{
  coupon_id:'#F7234',
    coupon_code:'GOODGUYS',
    type:'Product Base',
    status:'paid',
    end_date:'03-10-2022',
    discount:'50%'
},
]
  return (
    
      <div>
        <div className="rewards-nav px-3 d-flex justify-content-between align-items-center" style={{marginTop:"70px"}}>
                <div className="rewards-nav-left "> <h3>Payments</h3></div>
                <div class="d-flex gap-2 bankgrid" role="search">
                            <div className='container d-flex align-items-center border rounded-pill '>
                                <i class="ri-search-line"></i>
                                <input class="form-control itttt rounded-pill border-0 shadow-0" type="search" placeholder="Search by name" aria-label="Search" />
                            </div>
                            <button  class="btn btn-outline-success d-flex align-items-center border-0 rounded-pill text-light gap-2" style={{ background: '#164C96', textTransform: "capitalize" }} type="submit">
                                <i style={{ fontSize: "1rem" }} class="las la-plus-circle"></i>
                                <span className='text-nowrap'>Add New</span>
                            </button>
                        </div>
           </div>
    <div className="container-fluid payments_page mt-3 w-100" style={{overflow:"auto"}} >
<table className="table table-content-coupon sadbkjasdh" style={{  fontSize: `12px`, fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
            <thead>
                <tr className='bg-dark p-2 text-dark bg-opacity-10 text-center' >

                    <th scope="row" className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex pt-0">
                            <p className="text-nowrap" style={{ marginBottom: `0px`,textAlign:"center" }}>Invoice ID</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className='m-0 p-1 text-start'>Description</th>
                     <th className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex  pt-0">
                            <p style={{ marginBottom: `0px` }}>Price</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex">
                            <p style={{ marginBottom: `0px` }}>Date ID</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className='m-0 p-1 text-start '>Status</th>
                    <th scope="col" className='m-0 p-1'>Invoice</th>
                </tr>
            </thead>
            <tbody>
            {Data.map((data) => {
             return (
        <tr className='border m-0 p-0'>
            <td  style={{color:"#344054",fontWeight:"600"}}> #235645 </td>
            <th  className='mt-0 px-1 productcol1' style={{fontWeight: '600',fontSize: `14px`,lineHeight: `20px`,color:`#344054`}}>
            <div class="card p-0  text-nowrap gap-2" style={{display:"flex",flexDirection:"row",alignItems:"center", backgroundColor:"transparent",boxShadow:"none"}} >
            <img style={{height:"3rem",width:"3rem",borderRadius:"2px"}} src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top p-0" alt="..."/>
            <div class="card-body p-0">
            <h5 class="card-title p-0"style={{fontWeight:"600" , fontSize:"1rem",marginBottom:"0px",color:"#344054"}} >Card title</h5>
            <p class="card-text" style={{fontWeight:"400",color:"#667085",marginBottom:"0px"}}> the bulk of the card's content.</p>
           </div>
</div>
            </th>

            <th  className="border-0" style={{color:"#344054",fontWeight:"600" ,display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
              <div>
              <h6 style={{marginBottom:"0px"}}>{data.coupon_code}</h6> <p className="text-nowrap" style={{color:'#667085',marginBottom:"0px",fontWeight:"400"}}>somthing related to price</p>

              </div>
            </th>
            <td className="text-nowrap bg"> {data.type} </td>
            <td>
           <p className="rounded-pill" style={{backgroundColor:"#ECFDF3",display:"flex",justifyContent:"center",alignItems:"center"  ,width:"fit-content",color:"#12B76A"}}>{data.status}</p>
            </td>
            <th style={{fontWeight: '600',transform:"translate(0px, 10px)" ,fontSize: `14px`,lineHeight: `20px`,color:`#344054`}}>
                <div className="d-flex gap-2" style={{justifyContent:"center"}} id="vvvv" >
                <button  id="invoice_icon"><i class="ri-eye-line"></i></button>
                <button id="invoice_icon"><i class="ri-download-2-line"></i></button>
      
                </div>
            </th>
          
            
        </tr>
    )
})}
</tbody> 
        </table>

    </div>
    </div>
  );
};

export default Payments;


