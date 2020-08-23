import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../B1_B2/b1b2.css';

function Adat() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    // return (
    //     <div className="dentpin">
    //         <div className="row marginTop50">
    //             <div className="col-sm-3 marginTop50">
    //                 <h4>B1/B2</h4>
    //             </div>
    //             <div className="col-sm-9">
    //                 <ul>
    //                     <li><p>Visitor Visa B1/B2 and Dependent Visa L2/H4/F2.</p></li>
    //                     <li> <p>Write the NBDE exams.</p></li>
    //                     <li><p>Attend bench test preparations.</p></li>
    //                     <li><p>Can do any Externship/ Observership at a dental school.</p></li>
    //                     <li><p>Attend international dental conference.</p></li>
    //                     <li><p>Attend hands on dentistry procedures</p></li>
    //                 </ul>
    //             </div>
    //         </div>
    //         <Box mt={20}>
    //         </Box>
    //     </div>
    // )

    return (
        <div className="b1b2">
            <div>

                <Card body outline color="danger">
                    <CardTitle> <h2>B1/B2</h2></CardTitle>
                    <CardText>
                    <ul>
                        <li><p>Visitor Visa B1/B2 and Dependent Visa L2/H4/F2.</p></li>
                        <li> <p>Write the NBDE exams.</p></li>
                        <li><p>Attend bench test preparations.</p></li>
                        <li><p>Can do any Externship/ Observership at a dental school.</p></li>
                        <li><p>Attend international dental conference.</p></li>
                        <li><p>Attend hands on dentistry procedures</p></li>
                    </ul>
                        </CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Adat;