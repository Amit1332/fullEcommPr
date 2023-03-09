import React from 'react'
import "../Rewards/Rewards.css"
import RewardCard from './RewardsCard/RewardCard'

function Rewards() {
  return (
    <>
        <div className="container-fluid rewardContainer mt-3 pt-4 m-0" style={{backgroundColor:"white"}}>
           <div className="rewards-nav pt-2 d-flex justify-content-between align-items-center">
                {/* <div className="rewards-nav-left "> <h3>Rewards</h3></div> */}
                <div className="term-nav-left mt-3"> <h3>Rewards</h3></div>
                <div className="reward-nav-right d-flex gap-3">
                     <div className="rewards-nav-right-one text-nowrap" style={{color: "#667085"}}>
                       <i style={{marginBottom:"0"}} class="las la-search"></i> <button class="btn shadow-none text-capitalize  gap-2" type="submit" style={{gap:"10px", marginBottom:"0"}}> Search by name</button>
                      </div>
                     <div className="rewards-nav-right-one" style={{color: "#667085"}}>
                       <button class="btn shadow-none text-capitalize  gap-2" type="submit" style={{gap:"10px", marginBottom:"0"}}> Latest </button><i style={{marginBottom:"0"}} class="las la-angle-down"></i> 
                      </div>
                </div>
           </div>

           <div className="row reward-card pt-3">
                 <RewardCard/>  
                 <RewardCard/>  
                 <RewardCard/>  
                 <RewardCard/>  
                 <RewardCard/>  
                 <RewardCard/>  
                 <RewardCard/>  
                 <RewardCard/>  
           </div>
        </div>
    </>
  )
}

export default Rewards