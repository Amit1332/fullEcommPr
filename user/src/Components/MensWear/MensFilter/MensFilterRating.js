import Accordion from 'react-bootstrap/Accordion';
import StarRatings from 'react-star-ratings';
function MensFilterRating() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Rating</Accordion.Header>
        <Accordion.Body>
<div className="container-fluid p-0">
                       
                        <div className="container-fluid mt-2">
                        <div className="container-fluid p-0 " style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p style={{display:"flex",justifyContent:"start",alignItems:"center"}} className=' d-flex gap-2 '><input type="radio"  style={{marginTop:".5rem"}} />  <StarRatings
                                rating={5}
                                starRatedColor="#FDB022"
                                starDimension="15px"
                                starSpacing="2px"
                                /> <span style={{marginTop:".5rem"}} >4.5 & up</span> </p>
                                <p>(1991)</p>
                            </div>
                            <div className="container-fluid p-0 " style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p style={{display:"flex",justifyContent:"start",alignItems:"center"}} className=' d-flex gap-2 '><input type="radio"  style={{marginTop:".5rem"}} />  <StarRatings
                                rating={5}
                                starRatedColor="#FDB022"
                                starDimension="15px"
                                starSpacing="2px"
                                /> <span style={{marginTop:".5rem"}} >4.5 & up</span> </p>
                                <p>(200)</p>
                            </div>
                            <div className="container-fluid p-0 " style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p style={{display:"flex",justifyContent:"start",alignItems:"center"}} className=' d-flex gap-2 '><input type="radio"  style={{marginTop:".5rem"}} />  <StarRatings
                                rating={5}
                                starRatedColor="#FDB022"
                                starDimension="15px"
                                starSpacing="2px"
                                /> <span style={{marginTop:".5rem"}} >4.5 & up</span> </p>
                                <p>(300)</p>
                            </div>
                            <div className="container-fluid p-0 " style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p style={{display:"flex",justifyContent:"start",alignItems:"center"}} className=' d-flex gap-2 '><input type="radio"  style={{marginTop:".5rem"}} />  <StarRatings
                                rating={5}
                                starRatedColor="#FDB022"
                                starDimension="15px"
                                starSpacing="2px"
                                /> <span style={{marginTop:".5rem"}} >4.5 & up</span> </p>
                                <p>(500)</p>
                            </div>
                        <div className="container-fluid mt-4 mb-3" style={{border :"1px solid #DDDDDD"}}></div>
                        </div>
                        

                    </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


  );
}

export default MensFilterRating;