import OTPInput, { ResendOTP } from "otp-input-react";
import  { useState } from "react";
import React from "react";
function Otp() {
  const [OTP, setOTP] = useState("");
  return (
    <div className="otpp" style={{width:"fit-content"}}>
     
      <OTPInput id="otppp"  style={{marginBottom:"20px",}}  inputStyles={{
            display:"flex",       
            alignItems:"flex-start",
            width: "55px",
            height: "55px",
            boxShadow:"0px 0px 5px 1px rgba(0, 0, 0, 0.2) ",
            border: "1px solid #D0D5DD",
            borderRadius: "7px ",
            outline:"none",
            fontSize:'1.3rem',
            fontWeight:"900"
          }}  value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" placeholder={[0, 0, 0, 0, 0, 0]} disabled={false}  />
      <ResendOTP 
          renderTime={() => React.Fragment}
          renderButton={(buttonProps) => {
            return (
              <button style={{border:"none",textAlign:'center', color:'gray', width:"100%", fontSize:"1rem",marginBottom:'10px', fontWeight: `400`, width:"60%", margin:'0 auto',fontSize: `16px`, lineHeight: `24px`, color: `#98A2B3`, background:"transparent"}} {...buttonProps}>
                {buttonProps.remainingTime !== 0 ? (
                    <p>Resend OTP in <span className="text-dark text-bold" style={{fontWeight:'900'}}>{buttonProps.remainingTime}</span></p>
                ) : "Resend"}
              </button>
            );
          }}
        />
      
    </div>
  );
}
export default Otp