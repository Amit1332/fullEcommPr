import React from 'react'
import ReactApexChart from "react-apexcharts"

const OrderDonutChart = () => {
    var state = {
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut'
          },
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
          

            },
          },
   
          labels: [
            "Direct",
            "Social",
            "Others",
            "Emails",
            "Referals",


          ],

         colors: ['#164C96', '#12B76A', '#F7B84B','#DC6803','#6DA7DF'],
       
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          legend: {
            position: 'bottom',
          }
        },
      
      
      };
    
  return (
    <>
      
      <div id="chart" className='donutchart'>
  <ReactApexChart options={state.options} series={state.series} type="donut"  height={350} />

  <div className='d-flex align-items-center justify-content-center mt-5 mb-4'>

   <div className="row d-flex align-items-center justify-content-between">
    <div className="col d-flex align-items-center flex-column justify-content-center">
      <h4>18</h4>
      <h6 style={{color:"#667085"}}>Order</h6>
    </div>
    <div className="col d-flex align-items-center flex-column justify-content-center">
       <h4>18</h4>
      <h6 style={{color:"#667085"}}>Cancelled</h6>
      </div>
    <div className="col d-flex align-items-center flex-column justify-content-center">

    <h4>1855</h4>
      <h6 style={{color:"#667085"}}>Payments</h6>
    </div>
   </div>

  </div>

</div>


    </>
  )
}

export default OrderDonutChart
