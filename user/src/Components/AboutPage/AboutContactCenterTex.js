import React from 'react'

const AboutContactCenterTex = (props) => {
  return (
    <>
        <span>{props.tophead}</span>
     <div className="chooseHead">
        <h4>{props.heading}</h4>
        <p>{props.paraCont}</p>

     </div>
    </>
  )
}

export default AboutContactCenterTex
