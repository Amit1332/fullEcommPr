import React from 'react'
import OrderData from './OrderData'
import OrderDonutChart from './OrderDonutChart'
import ReferBonus from './ReferBonus'

const DashboardChart = () => {
  return (
    <>
<div className="container-fluid DashboardChart">
    <div className="row d-flex gap-3 mt-3">
       
      <div className="col-4 p-0">
           
           <div className="card" style={{position:"relative", overflow:"hidden"}}>
           <div className="row py-3 p-2" style={{borderBottom:"1px solid #EAECF0"}}>
                   <div className="col ">
                       <p style={{fontWeight:"600", fontSize:".9rem", color:"#344054"}}>Sales State</p>
                   </div>
   
                   <div className="col d-flex align-items-center justify-content-end" style={{color:"#667085" ,fontWeight:"600", fontSize:".9rem",}}>
                     <p style={{color:"#667085" ,fontWeight:"600", fontSize:".8rem",}}>  Export Report</p>
                     <i class="las la-angle-down mx-2"style={{color:"#667085" ,fontWeight:"600", fontSize:".8rem",}}></i>
   
                   </div>
               </div>
           <OrderDonutChart/>
               
               </div>
           </div>
   
         <div className="col p-0">
         <div className="card" style={{position:"relative", overflow:"hidden"}}>
           <div className="row py-3 p-2" style={{borderBottom:"1px solid #EAECF0"}}>
                   <div className="col ">
                       <p style={{fontWeight:"600", fontSize:".9rem", color:"#344054"}}>My Order</p>
                   </div>
   
                   <div className="col d-flex align-items-center justify-content-end" style={{color:"#667085" ,fontWeight:"600", fontSize:".9rem",}}>
                     <p style={{color:"#667085" ,fontWeight:"600", fontSize:".8rem",}}> View All</p>
                     <i class="ri-arrow-right-s-line" style={{color:"#667085" ,fontWeight:"600", fontSize:".8rem",}}></i>
   
                   </div>
               </div>

               <OrderData/>
               
               </div>
          <ReferBonus/>

         </div>


      </div>



    </div>

      
    </>
  )
}

export default DashboardChart
