import React from 'react'

const OrderData = () => {
    const orders =[
        {
    orderID:"#1234",
    images:"https://pixlr.com/images/index/remove-bg.webp",
    cust_name:"Sally Jain",
    product:"Clothes",
    noprod:"03",
    price:"109.00",
    status:"Paid"
    
      },
      {
        orderID:"#1234",
        images:"https://pixlr.com/images/index/remove-bg.webp",
        cust_name:"Sally Jain",
        product:"Clothes",
        noprod:"03",
        price:"109.00",
        status:"Confirmed"
        
          },
          {
            orderID:"#1234",
            images:"https://pixlr.com/images/index/remove-bg.webp",
            cust_name:"Sally Jain",
            product:"Clothes",
            noprod:"03",
            price:"109.00",
            status:"Pending"
            
              }
    ]
  return (
    <>
      
<div className="container-fluid">
<div class="table-responsive producscroller_responsive">
  <table class="table text-nowrap startcontentleft">
   
    <tbody>
{
    orders.map((elem)=>{
return (
  <>
       <div className="row border-bottom" style={{width:"100%"}}>
        <div className="col px-0 p-2 d-flex align-items-center justify-content-center">
            <div className="prod_images_order">
                <img src="https://s40424.pcdn.co/in/wp-content/uploads/2022/04/March_How-to-become-Product-Manager-1-1140x800.jpg" alt="" />
            </div>
            <div className="orderContent d-flex  justify-content-center mx-2" style={{flexDirection:"column"}}>
                <h6 className='h6 my-1' style={{fontWeight:"bold",color:"#344054"}}>Cotton Baby Bed Protecting Mat</h6>
                <h6 className='h6 my-1'style={{fontSize:".8rem",color:"#A6ACBS"}}>Cotton Baby Bed Protecting Mat</h6>


            </div>

        </div>
        <div className="col px-0 p-2 d-flex align-items-center justify-content-around">
        <div className="orderContent d-flex  justify-content-center mx-2" style={{flexDirection:"column"}}>
                <h6 className='h6 my-1' style={{fontWeight:"bold",color:"#344054"}}>₹ 6000</h6>
                <h6 className='h6 my-1'style={{fontSize:".8rem",color:"#A6ACBS"}}>Order Deliverd in 5days</h6>


            </div>
        <div className="btn btn-sm rounded-pill px-3 py-2 border shadow-none text-capitalize" style={{fontWeight:"bold", color:"#344054"}}>View Details</div>
           

        </div>

       </div>
       
  </>
)
})
        }

</tbody>
  </table>
</div></div>
    </>
  )
}

export default OrderData
