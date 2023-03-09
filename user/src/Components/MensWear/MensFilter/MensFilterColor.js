import Accordion from 'react-bootstrap/Accordion';
function MensFilterColor() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body>
        <div className="container-fluid p-0">
                     
                        <div className="container-fluid mt-2">
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /><i id='multi' class="ri-checkbox-blank-circle-fill"></i> Multi</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /><i style={{color:"#0074D9"}} class="ri-checkbox-blank-circle-fill"></i> Blue</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /><i style={{color:"#D34B56"}} class="ri-checkbox-blank-circle-fill"></i> Red</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /><i style={{color:"#EADC32"}} class="ri-checkbox-blank-circle-fill"></i> Yellow</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /><i style={{color:"#36454F"}} class="ri-checkbox-blank-circle-fill"></i> Black</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /><i style={{color:"#12B76A"}} class="ri-checkbox-blank-circle-fill"></i> Green</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /><i style={{color:"#F1A9C4"}} class="ri-checkbox-blank-circle-fill"></i> Pink</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{color:"tomato"}}>
                                <p className='d-flex gap-2'>+31 More</p>
                            </div>

                        <div className="container-fluid mt-4 mb-3" style={{border :"1px solid #DDDDDD"}}></div>
                        </div>
                    </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MensFilterColor;