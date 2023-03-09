import React from 'react'
import Apple from "./images/appleStore.png"
import Google from "./images/googleStore.png"
import Flippy from "./images/mobileflippy.png"



const GetStarted = () => {
  return (
    <>

   
    
    <div className="GetStarted">
        <div className="getStartedleft">
            <h6 style={{color:"#164c96"}}>Ready to get started ?</h6>
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
