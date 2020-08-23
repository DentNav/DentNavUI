import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../Services/dentpin/dentpin.css'

function Idp_dmd() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div>

                <Card body outline color="info">
                    <CardTitle> <h4>IDP DDS/DDM</h4></CardTitle>
                    <CardText>     <ul>
                        <li><p>Various countries across the world offer bachelor’s degree in dentistry as BDS, DMD,
                        DDS. However, USA dental schools award either DDS or DMD based on school norms.
                        Both the degrees are equivalent and dentists with these degrees considered as general
                        dentists. Moreover, US domestic students pursue 4 years (D1, D2, D3, D4) of education
                        and international students pursue at least 2 years (D3, D4) to attain DMD/DDS degree.</p></li>
                        <li> <p>International dental program (IDP) mandates students to join in a minimum of 2 years
                        (D3, D4) to get the DMD/DDS degree even though students pursued for 4-6 years back
                       at their home countries. Students who get DDS/ DMD from the dental school in the USA
                       are eligible to practice in all 50 states &amp; Washington D.C. of the America. International
                       dentists should pursue the program from school which is accredited by the Commission
                       on Dental Accreditation (CODA) to get license to practice in the USA. </p></li>
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Idp_dmd;