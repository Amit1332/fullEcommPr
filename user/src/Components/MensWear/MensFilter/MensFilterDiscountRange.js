import Accordion from 'react-bootstrap/Accordion';
function MensFilterDiscountRange() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Discount Range</Accordion.Header>
        <Accordion.Body>
        <div className="container-fluid p-0">
                        <div className="container-fluid" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h4>Discount Range</h4>
                            <i  class="las la-angle-up"></i>
                        </div>
                        <div className="container-fluid mt-2">
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> 10% and above</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> 20% and above</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" />30% and above</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" />40% and above</p>
                                <p>(18)</p>
                            </div>
                            
                        </div>
                    </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MensFilterDiscountRange;