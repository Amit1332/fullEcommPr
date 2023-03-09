import React from 'react'
import Tabs from './Tabs/Tabs'
import "./Profile.css"
const Profile = () => {
  return (
    <div className='container-fluid py-4 mt-5 px-2 profile_input' >
      {/* <h4 style={{color:"#1D2939"}}>My Profile</h4> */}
      <div className="term-nav-left mt-3"> <h3>My Profile</h3></div>
      <div className="border p-2 rounded-3" >
      <Tabs />
      </div>
    </div>
  )
}

export default Profile;