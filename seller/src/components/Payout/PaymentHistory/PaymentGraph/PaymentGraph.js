import React from 'react'
import PayemntData from './PayemntData'
import PaymentDonutGraph from './PaymentDonutGraph'
import PaymentLineChart from './PaymentLineChart'

const PaymentGraph = () => {
  return (
    <>
       <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-8" >
            <div className="card">
              <div className="card-body py-3 px-3">
                <div className="container-fluid p-0">
                  <div className="row d-flex align-items-center">
                    <div className="col d-flex justify-content-start">
                      <div className="card-text" style={{color:"#344054"}}>Revenue</div>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <div className="card-text d-flex gap-2">
                        <a href="">
                          <div className="orderhistory d-flex align-items-center justify-content-center">All</div>
                        </a>
                        <a href="">
                          <div className="orderhistory  d-flex align-items-center justify-content-center">1M</div>
                        </a>

                        <a href="">
                          <div className="orderhistory  d-flex align-items-center justify-content-center">6M</div>
                        </a>
                        <a href="">
                          <div className="orderhistory  d-flex align-items-center justify-content-center">1Y</div>
                        </a>
                      </div>
                    </div>
                  </div>

                        <PayemntData/>
                        <PaymentLineChart/>

                   

















                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body py-3 px-3 m-0">
                <div className="container-fluid p-0">
                  <div className="row">
                    <div className="col d-flex justify-content-star">
                      <div className="card-text" style={{color:"#344054"}}>Add Cost</div>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <div className="card-text exportReport">
                        View Details <i class="las la-angle-right"></i>
                      </div>
                    </div>
                  </div>

                <PaymentDonutGraph/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentGraph
