import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../adat/adat.css'
import CardFooter from '../../CardFtr';

function Adat() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    // return (
    //     <div style={{marginTop:"100px",marginRight:"100px"}}>
    //         <div className="row" >
    //             <div className="col-sm-3" >
    //                 <h4 style={{marginTop:"150px"}}>ADAT</h4>
    //             </div>
    //             <div className="col-sm-9">
    //                 <ul>
    //                     <li><p>The advanced dental admission test is designed to measure the potential of a candidate
    //                         who is applying for Advanced Dental Education Programs mostly the post-doctoral
    //                         programs/ specialty programs.</p></li>
    //                     <li> <p>The test consists of Biomedical Sciences (80questions/ 95 minutes); Clinical Sciences
    //                         (80 questions/ 90 minutes); Data Research Interpretation, and Evidence-Based
    //                         Dentistry (40 questions/ 45 minutes).</p></li>
    //                     <li><p>Once you submit the application, eligibility of ADAT is confirmed and one could book a
    //                             slot to write the exam.</p></li>
    //                     <li><p>Scores in the test are ranges from 200 to 800 with mean of 500. There is no PASS/
    //                             FAIL like in NBDE.</p></li>
    //                     <li><p>There should be program list in the ADA website, which shows the list of colleges
    //                         accept ADAT. One should. Update the score to ADEA PASS which will be updated to
    //                         the school with in 24-72 working hours.</p></li>
    //                     <li><p>The retesting policy is 45 days between two consecutive tests per one academic year.
    //                             The ADAT fee for international candidate is $585, with additional report fee of $45.</p></li>
    //                 </ul>
    //             </div>
    //         </div>
    //         <Box mt={10}>
    //         </Box>
    //     </div>
    // )

    return (
        <div className="adat">
            <div>

                <Card body outline color="warning">
                    <CardTitle> <h2>ADAT</h2></CardTitle>
                    <CardText>   <ul>
                        <li><p>The advanced dental admission test is designed to measure the potential of a candidate
                            who is applying for Advanced Dental Education Programs mostly the post-doctoral
                            programs/ specialty programs.</p></li>
                        <li> <p>The test consists of Biomedical Sciences (80questions/ 95 minutes); Clinical Sciences
                            (80 questions/ 90 minutes); Data Research Interpretation, and Evidence-Based
                            Dentistry (40 questions/ 45 minutes).</p></li>
                        <li><p>Once you submit the application, eligibility of ADAT is confirmed and one could book a
                                slot to write the exam.</p></li>
                        <li><p>Scores in the test are ranges from 200 to 800 with mean of 500. There is no PASS/
                                FAIL like in NBDE.</p></li>
                        <li><p>There should be program list in the ADA website, which shows the list of colleges
                            accept ADAT. One should. Update the score to ADEA PASS which will be updated to
                            the school with in 24-72 working hours.</p></li>
                        <li><p>The retesting policy is 45 days between two consecutive tests per one academic year.
                                The ADAT fee for international candidate is $585, with additional report fee of $45.</p></li>
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                    {/* <CardFooter/> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Adat;