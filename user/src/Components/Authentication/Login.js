import React from 'react'
import Header from "../include/Header/Header"
import LeftcomponentAuth from './LeftcomponentAuth'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
    <div className=" d-flex align-items-center mtenlog" style={{height:"90vh"}}>

        <div className='w-100 d-flex align-items-center toplogcon' style={{padding:"0px 4rem"}}>

            <div className="container shadow-4 p-0 rounded-5 d-flex mainlogcon" style={{ overflow: "hidden", height: `70vh`, marginTop: "6vh" }}>
                <LeftcomponentAuth />
                <div className=" rightlogin px-3 d-flex align-items-center justify-content-center" style={{ width: "50%", height: `100%` }}>
                    <form className='p-4'>
                        <div className="account d-flex justify-content-center" >
                            <i class="las la-user fs-2 p-2 rounded-circle" style={{ background: `#F1F8FD`, color: '#164C96' }}></i>
                        </div>
                        <div className="text text-center">
                            <h1 style={{fontWeight: `700`,fontSize: `30px`, lineHeight: `38px`,color: `#164C96`}}>Login or Signup to Flippy 7</h1>
                            <p style={{fontWeight: `400`,fontSize: `16px`,lineHeight: `24px`,color: `#98A2B3`}}>Welcome back, you’ve been missed!</p>
                            <div class="input-group border mb-3 rounded-5" style={{ background: "#FCFCFD" }}>
                                <span class="input-group-text border-0" id="basic-addon1"><i class="las la-phone"></i></span>
                                <input type="text" class="form-control border-0 bg-transparent" placeholder="Enter Mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <Link to="/signup" className="btn rounded-pill w-100" style={{background:"#164C96", color:"#ffff"}}>Log In</Link>
                        </div>
                        <h6 className='my-1 mt-2 text-center w-100' >OR</h6>
                        <div className="loginbtnscon text-nowrap row gap-2 justify-content-center mt-4">
                            <div className="col btn rounded-5 googlebtnlog shadow-0 d-flex gap-1 justify-content-center align-items-center" style={{background:'#F9FAFB'}}><FcGoogle fontSize={`17px`}/> <span>Sign Up with Google</span></div>
                            <div className="col btn rounded-5 shadow-0 d-flex gap-1 justify-content-center align-items-center" style={{background:'#F9FAFB'}}><AiFillApple fontSize={`20px`} color={`#050505`}/><span>Sign Up with Apple</span></div>
                            <div className="col-12 btn rounded-5 shadow-0 d-flex gap-1 justify-content-center align-items-center" style={{background:'#F9FAFB'}}><BsTwitter fontSize={`17px`} color={'#1DA1F2'}/> <span>Sign Up with Twitter</span></div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div></div>
    )
}

export default Login