import * as React from 'react';
import StarRatings from 'react-star-ratings';
import LinearProgress from '@mui/joy/LinearProgress';

export default function ProgressBar({reviewData}) {


  return (
    <div className='container-fluid singleProduct ' spacing={.5} sx={{ flex: 1 }} style={{color:"#20590C" ,backgroundColor:"#F9FAFB"}} >
        {
            reviewData.map((element)=>{
                return(
                    <div className="row" style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                        <div className="col-9 col9 ">
                          <LinearProgress className="mt-1 prg" determinate value={element.progressValue} style={{backgroundColor:"#E6EAEE"}}  />
                        </div>
                        <div className="col-3 d-flex gap-2  text-nowrap p-0 star">

                            <StarRatings 
                                    
                                    rating={element.rating}
                                    starRatedColor="#FDB022"
                                    starDimension="12px"
                                    starSpacing="2px"> 
                            </StarRatings>
                            
                            <span  style={{fontSize:".8rem",marginTop:".5rem",color:" #164C96"}}>{element.progressPercent}</span>
                        </div>
                              
                    </div>
                )
            })
        }

    </div>
  );
}