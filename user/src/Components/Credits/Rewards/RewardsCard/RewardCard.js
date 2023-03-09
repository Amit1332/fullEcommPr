import React from 'react'
// import "../Rewards/Rewards.css"

const RewardCard = () => {
  return (
    <>
      <div className="col-6 reward-one-card shadow-0 p-2 ">

        <div class="card p-2 d-flex flex-row ">
          <div className="p-0 rewards-img">
            <div className="reward-img-circle"><h5>Staples</h5></div>
            <img src="https://images.unsplash.com/photo-1635405050330-b0824eb1bf26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" class="card-img-top" alt="..." />
          </div>
          <div class="p-0 m-0 card-body ">
            <div className="rewards-content p-3">
              <h4 class="p-0 m-0 card-title">Set Wallet Auto Top-up</h4>
              <h5 className=' '>Up to ₹500 Cashback*</h5>
              <div className="p-0 m-0 reward-bag d-flex align-items-center"><i class=" p-0 m-0 las la-briefcase" style={{ marginBottom: "0px" }}></i> <p class=" p-0 m-0 card-text">Button CTA</p></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default RewardCard
