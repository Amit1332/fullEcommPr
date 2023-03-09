import Accordion from 'react-bootstrap/Accordion';

function MensFilterCategory() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body>
        <div className="container-fluid p-0">
                        
                        <div className="container-fluid mt-2">
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Accupressure Rollers</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Accupressure Rollers</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Accupressure Rollers</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Accupressure Rollers</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Accupressure Rollers</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <p className='d-flex gap-2'><input type="checkbox" /> Accupressure Rollers</p>
                                <p>(18)</p>
                            </div>
                            <div className="container-fluid p-0" style={{color:"tomato"}}>
                                <p className='d-flex gap-2'>Show More</p>
                            </div>

                        <div className="container-fluid mt-4 mb-3" style={{border :"1px solid #DDDDDD"}}></div>
                        </div>
                    </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MensFilterCategory;