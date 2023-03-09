import React from 'react'
import Apple from "./Images/Apple.png"
import Google from "./Images/google.png"
import Flippy from "./Images/mobileflippy.png"
import  './GetStarted.css'


const GetStarted = () => {
  return (
    <>
    <div className="GetStarted">
        <div className="getStartedleft">
            <h6>Ready to get started ?</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, hic? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, odio.</p>
        
         <div className="playstoreimage">
         <div className="firstplay">
                <img src={`${Google}`} alt="" />
            </div>
            <div className="firstplay">
                <img src={`${Apple}`} alt="" />
            </div>
            
         </div>
        
        </div>
        <div className="getStartedright">
               <div className="mobileflippy">
                    <img src={`${Flippy}`} alt="" />
                </div>
            </div>
        </div>
                
      
    </>
  )
}

export default GetStarted
