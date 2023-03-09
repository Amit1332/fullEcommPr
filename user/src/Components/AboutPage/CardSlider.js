import React from 'react'
import Carousel from 'react-grid-carousel'

const CardSlider = () => {

    const card =[
        {
            heading:"sadfasfsad"
        },
        {
            heading:"sadfasfsad"
        },
        {
            heading:"sadfasfsad"
        }
    ]
    
  return (
    <>
 
 <div className="cardss">

 <Carousel cols={3} rows={1} gap={10} loop>
 {
        card.map((elem)=>{
            return(
             <Carousel.Item>
               <div className="card">
               <div className="cardtitleimg">
                <div className="cardrimg">
                    <img src="/lgoo.png" alt="" />
                </div>
                <div className="cardrcont">
                    <p>fdgfdgdgs</p>
                    <p>fdsafdas</p>
                </div>
               </div>
               </div>
             </Carousel.Item>
              
          
            )
        })
    }
     
    </Carousel>
  
     
   </div>
 
      
    </>
  )
}

export default CardSlider
