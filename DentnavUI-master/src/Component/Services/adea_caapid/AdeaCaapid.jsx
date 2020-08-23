import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../adea_caapid/adea.css'

function AdeaCaapid() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="adea">
            <div>

                <Card body outline color="warning">
                    <CardTitle> <h2>ADEA CAAPID</h2></CardTitle>
                    <CardText>  <ul>
                        <li><p>ADEA CAAPID applicants are internationally trained dentists wish to pursue and
                            practice dentistry in the USA or Canada. It simplifies the application process by
                            submitting a single application rather individual applications to each program; the
                            advanced standing programs benefit by accepting uniform information from all the
                            applicants.</p></li>
                        <li> <p> Candidates can apply to International Dental Programs (IDP) to various universities</p></li>
                        
                    </ul></CardText>
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default AdeaCaapid;