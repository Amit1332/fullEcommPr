import Accordion from 'react-bootstrap/Accordion';
function MensFilterPrice() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
           

                <div className="container-fluid p-0">
                      
                        <div className="container-fluid mt-2">
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Rs. 521 and Less</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Rs. 521 to Rs. 738</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Rs. 738 to Rs. 955</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" />Rs. 955 to Rs. 1172</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" />Rs. 1172 And Above</p>
                                <p>(18)</p>
                            </div>
                          

                        <div className="container-fluid mt-4 mb-3" style={{border :"1px solid #DDDDDD"}}></div>
                        </div>
                    </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MensFilterPrice;