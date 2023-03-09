import React from 'react'
import { Link } from 'react-router-dom'

function CreateyourAccount() {
  return (
    <div className=" d-flex align-items-center" style={{height:"90vh"}}>

    <div className="container text-center shadow-4 p-0 rounded-5 d-flex" style={{ overflow: "hidden",width:"fit-content", height: `fit-content`, marginTop: "6vh" }}>
         <form className='p-3'>
                        <div className="text">
                            <img src='./flippyLogo.png' style={{width:"8rem"}} alt="" />
                            <h1 style={{ fontWeight: `700`, fontSize: `30px`, lineHeight: `30px`, color: `#164C96` }}>Create Your Account</h1>
                            <p style={{ fontWeight: `400`, width:"60%", margin:'0 auto',fontSize: `16px`, lineHeight: `24px`, color: `#98A2B3` }}>Just take one minute to create your account</p>
                            <hr className='my-4' style={{width:'100%'}}/>
                            <Link to={'/'}  className="text-capitalize border rounded-pill p-1" style={{fontWeight: `600`, fontSize: `16px`, lineHeight: `24px`, color: `#344054`}}>I will Do it Later</Link>
                            <div className="text-capitalize border rounded-pill p-1 mt-3" style={{background:"#164C96", color:'white',fontWeight: `600`, fontSize: `16px`, lineHeight: `24px` }}>Create Account</div>
                        </div>
                                               </form>
                                               </div>

    </div>
  )
}

export default CreateyourAccount