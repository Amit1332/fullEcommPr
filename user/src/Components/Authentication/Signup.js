import React, { useEffect, useState } from 'react'
import LeftcomponentAuth from './LeftcomponentAuth'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, registerUser } from '../../Actions/UserActions'

function Signup() {
    // const Navigate = useNavigate();
    // const dispatch = useDispatch();
    // const alert = useAlert();
    // // register seller
    // const { error, isAuthenticatedSeller } = useSelector((state) => state.userSignup);
  
    // const [userData, setUserData] = useState({
    //   phone: "",
    // });
  
    // const handleInputs = (e) => {
    //   const name = e.target.name;
    //   const value = e.target.value;
    //   setUserData({ ...userData, [name]: value });
    // };
  
    // const submitRegisterUSer = (e) => {
    //   e.preventDefault();
    //   dispatch(registerUser(userData));
    // };
  
    // useEffect(() => {
    //   if (error) {
    //     alert.error(
    //       <>
    //         <div style={{ color: "white", fontSize: ".8rem" }}>{error}</div>
    //       </>
    //     );
    //     dispatch(clearErrors());
    //   }
  
    //   if (isAuthenticatedSeller) {
    //     alert.success(
    //       <div style={{ color: "white", fontSize: ".8rem" }}>
    //         Registered Successfully
    //       </div>
    //     );
    //     Navigate("/gstin");
    //   }
    // }, [dispatch, error, alert, Navigate, isAuthenticatedSeller]);
  

    return (
    <div className=" d-flex align-items-center mtenlog" style={{height:"90vh"}}>

        <div className='w-100 d-flex align-items-center toplogcon' style={{ padding: "0px 4rem" }}>

            <div className="container mainlogcon shadow-4 p-0 rounded-5 d-flex" style={{ overflow: "hidden", height: `70vh`, marginTop: "3vh" }}>
                <LeftcomponentAuth />
                <div className=" rightlogin px-3 d-flex align-items-center justify-content-center" style={{ width: "50%", height: `100%` }}>
                    <form className='p-4'>
                        <div className="text">
                            <h1 style={{ fontWeight: `700`, fontSize: `30px`, lineHeight: `38px`, color: `#164C96` }} >Login or Signup to Flippy 7</h1>
                            <p style={{ fontWeight: `400`, fontSize: `16px`, lineHeight: `24px`, color: `#98A2B3` }}>Welcome back, you’ve been missed!</p>
                            <hr className='my-4'/>
                            <div class="input-group border mb-3 rounded-5" style={{ background: "#FCFCFD" }}>
                                <div className="btn shadow-0 " style={{paddingRight:"0.3rem", fontSize:"1rem", borderRight:"1px solid gray"}}>+91 &nbsp;&nbsp;&nbsp;<i class="las la-angle-down"></i></div>
 
                                <input type="text" name='phone'  class="form-control border-0 bg-transparent" placeholder="Enter Mobile Numver" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <Link to={'/verify_otp'} className="btn rounded-pill w-100"  style={{ background: "#164C96", color: "#ffff" }}>Continue</Link>
                        </div>
                        <h6 className='my-1 mt-2 text-center w-100' >OR</h6>

                        <div className="loginbtnscon text-nowrap row gap-2 justify-content-center mt-4">
                            <div className="col btn rounded-5 shadow-0 d-flex gap-1 justify-content-center align-items-center" style={{ background: '#F9FAFB' }}><FcGoogle fontSize={`17px`} /> <span>Sign Up with Google</span></div>
                            <div className="col btn rounded-5 shadow-0 d-flex gap-1 justify-content-center align-items-center" style={{ background: '#F9FAFB' }}><AiFillApple fontSize={`20px`} color={`#050505`} /><span>Sign Up with Apple</span></div>
                            <div className="col-12 btn rounded-5 shadow-0 d-flex gap-1 justify-content-center align-items-center" style={{ background: '#F9FAFB' }}><BsTwitter fontSize={`17px`} color={'#1DA1F2'} /> <span>Sign Up with Twitter</span></div>
                        </div>
                    </form>
                </div>
            </div></div>
        </div>
    )
}

export default Signup