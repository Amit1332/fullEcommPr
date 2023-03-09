import React from 'react'


const NavHeaderContent = (props,color) => {
  return (
    <>
       <div className="NavHeaderContent" style={{ backgroundColor: "#fef8f2"}}>
        <div className="includeHeadnav">
            <h5 style={{ color: "#164c96"}}>{props.heading}</h5>
            <div className="aboutff">
            <i style={{ color: "black"}}  class="las la-home"></i>
            <span style={{ color: "black"}} >Home/{props.title}</span>
            </div>
        </div>

       </div>

      
    </>
  )
}

export default NavHeaderContent
