import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import CardFooter from '../../CardFtr';
import '../inbde/inbde.css'

function INBDE() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="inbde">
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>

                <Card body outline color="warning">
                    <CardTitle> <h2>INBDE</h2></CardTitle>
                    <CardText>
                    <ul>
                        <li><p>According to Joint Commission on National Dental Examinations (JCNDE), The NBDE
                        Part I will be discontinued as of July 31, 2020. The NBDE Part II will be discontinued on
                        August 1, 2022. No further administrations of the NBDE will be provided after the
                        aforementioned dates.</p></li>
                        <li> <p>Beginning from Aug 1 st , 2020, candidates must take Integrated National Board Dental
                        Examinations (INBDE).</p></li>
                        <li><p>The non-accredited candidates who has successfully completed the NBDE Part I by
                        May 31, 2020, will still be eligible to take the NBDE Part II until July 31, 2022.</p></li>  
                        <li><p>The total questions in INBDE will be 500, compared with a total of 900 questions on the
                        NBDE Part I &amp; II.
                        The INBDE is expected to take one and a half days to complete.</p> </li>
                        <li><p>Candidates must wait a minimum of 90 days between unsuccessful test attempts.
                        Candidates must wait one year before they can retest on the INBDE after their third
                        failed attempt. Students who have had five unsuccessful attempts on the NBDE Part II
                        will still be permitted five attempts on the INBDE.</p></li>
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

export default INBDE;