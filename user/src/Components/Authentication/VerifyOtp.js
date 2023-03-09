import React from 'react'
import Otp from './Otp'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import Forgetimg from "./Images/Forgetimg.png"
import './Login.css'
import { Link } from 'react-router-dom'

function VerifyOtp() {
  return (
    <div className=" d-flex align-items-center " style={{height:"90vh"}}>

    <div className="container text-center verify_con shadow-4 p-0 rounded-5 d-flex" style={{ overflow: "hidden",width:"fit-content", height: `fit-content`, marginTop: "4vh" }}>
         <form className='p-3'>
                        <div className="text">
                            <img src={Forgetimg} style={{width:"8rem"}} alt="" />
                            <h1 style={{ fontWeight: `700`, fontSize: `30px`, lineHeight: `30px`, color: `#164C96` }}>Verify Your Number</h1>
                            <p style={{ fontWeight: `400`, width:"60%", margin:'0 auto',fontSize: `16px`, lineHeight: `24px`, color: `#98A2B3` }}>Please Enter the <span style={{color:'#164C96'}}>4 Digit</span> Code send to +91 8465254525</p>
                            <hr className='my-4' style={{width:'100%'}}/>
                            <div className="btn shadow-0 p-0 m-0"><Otp/></div>
                            <Link to={'/create/account'} className="btn rounded-pill w-100" style={{ background: "#164C96", color: "#ffff" }}>Continue</Link>
                        </div>
                        <p className='my-2' style={{ fontWeight: `400`, width:"60%", margin:'0 auto',fontSize: `16px`, lineHeight: `24px`, color: `#98A2B3` }}>Login using <span style={{color:'#F04438'}}>Password</span></p>
                        <p className='my-2 mb-4' style={{ fontWeight: `400`,transform:'translate(-10px,0px)', width:"60%", margin:'0 auto',fontSize: `16px`, lineHeight: `24px`, color: `#98A2B3` }}> <span className='mx-2'><i class="las la-angle-left" style={{fontWeight:'900'}}></i></span> Back to Sign In</p>
                    </form>
 </div>   </div>
  )
}

export default VerifyOtp