import React from 'react'
import "../OrdersReturn/Orders.css"
import OrderTable from './OrderTable';

function Orders() {
  return (
    <>
      <div className="container-fluid p-3 mt-4 m-0">
        <div className="order-nav pt-2  justify-content-between mb-4 ">
          <div className="order-nav-left px-4 mx-2"> <h3>Orders <span>(8 items)</span></h3></div>
          <div className="order-nav-right d-flex gap-2 overflow-auto">
            <div className="order-nav-right-one text-nowrap">
              <i style={{ marginBottom: "0" }} class="las la-info-circle"></i> <button class="btn shadow-none text-capitalize " type="submit" style={{ marginBottom: "0", backgroundColor: "transparent" }}> Need More Help?</button>
            </div>
            <div className="order-nav-right-one text-nowrap">
              <button class="btn shadow-none text-capitalize " type="submit" style={{ marginBottom: "0", backgroundColor: "transparent" }}>Status</button><i class="las la-angle-down"></i>
            </div>
            <div className="order-nav-right-one text-nowrap">
              <button class="btn shadow-none text-capitalize " type="submit" style={{ marginBottom: "0", color: "#344054", backgroundColor: "transparent" }}>For all times</button><i class="las la-angle-down"></i>
            </div>
          </div>
        </div>
        <div className="orderTable overflow-auto">
          <OrderTable />
        </div>
      </div>
    </>
  )
}

export default Orders