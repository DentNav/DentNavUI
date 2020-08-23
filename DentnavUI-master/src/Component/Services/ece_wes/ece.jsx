import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../ece_wes/ece.css'

function ECE() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    return (
        <div className="ece">
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>

                <Card body outline color="warning">
                    <CardTitle> <h2>ECE/WES</h2></CardTitle>
                    <CardText>
                        <div style={{ marginRight: "15px" }}> 
                        <ul>
                        <li><p>Educational credential evaluators are certifying the educational achievements of foreign
                        educated people. They review the foreign student’s academic record and grade them to
                        the U.S. System for the education, professional licensure, immigration and working in
                        the united states.</p></li>
                        <li><p>ECE is a paid service and most of the U.S. dental schools’ mandates Course by course
                        evaluation (fee: $160) report and for each additional copy ($25).</p></li>
                     </ul>
                        </div>

                        <div style={{ marginTop: "5px", marginRight: "15px" }}>
                        <ul>
                        <li><p>World Education Services are similar to the ECE. Some dental schools’ mandates to
                        have WES report instead of ECE report. WES is a paid service and for the course by
                        course evaluation WES ICAP (International Credential Advantage Package) is
                        recommended which is $205 and for the additional copy $30.</p></li>
                     </ul>
                        </div>
                        </CardText>
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default ECE;