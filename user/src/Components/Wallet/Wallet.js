import React from "react";
import AddReacharg from "./AddRecharge/AddReacharg";
import "./Wallet.css";
const Wallet = () => {
  return (
    <>
    <AddReacharg/>
      <div className="container-fluid py-3 wallet_recharge_ww mt-5">
        <div className="nan_wallet mb-3">
          <h3 style={{fontWeight:"600"}}>Wallet</h3>
          <button
            className="btn rounded-pill text-light d-flex align-items-center gap-1"
            style={{ backgroundColor: "#164c96" }}
            type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"
          >
            <i className="ri-add-circle-line"></i>
            <span>Recharge Wallet</span>
          </button>
        </div>

        <div className="container_Recharge">
          <div className="row">
            <div className="col-4">
              <div className="card firstcard" style={{ background: "#f1f8fd" }}>
                <div className="icon-box">
                  <i
                    class="ri-store-2-line rounded"
                    style={{ color: "#164c96" }}
                  ></i>
                </div>
                <span className="priceee">109.00</span>
                <div
                  className="btn rounded-pill text-light"
                  style={{ backgroundColor: "#164c96" }}
                >
                  <span>shop Now</span>
                </div>
              </div>
            </div>

            <div className="col-8">
              <div className="card secondcard rounded shadow-none border">
                <div className="card-title p-2" style={{color:"#344054", fontWeight:600, fontSize:"1.2rem"}}>Wallet Recharge History</div>

                <div style={{ overflowX: "auto" }}>
                <table className="table  ">
                    <thead>
                    <tr>
                      <th>Wallet Id</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Payment Amount</th>
                      <th>Approval</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Jill</td>
                      <td>Smith</td>
                      <td>50</td>
                      <td>50</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>Eve</td>
                      <td>Jackson</td>
                      <td>94</td>
                      <td>94</td>
                      <td>94</td>
                    </tr>
                    <tr>
                      <td>Adam</td>
                      <td>Johnson</td>
                      <td>67</td>
                      <td>67</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <td>Adam</td>
                      <td>Johnson</td>
                      <td>67</td>
                      <td>67</td>
                      <td>67</td>
                    </tr>

                    <tr>
                      <td>Adam</td>
                      <td>Johnson</td>
                      <td>67</td>
                      <td>67</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <td>Adam</td>
                      <td>Johnson</td>
                      <td>67</td>
                      <td>67</td>
                      <td>67</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
