import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../dentpin/dentpin.css'
import CardFooter from '../../CardFtr';

function AdeaPass() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>

                <Card body outline color="warning">
                    <CardTitle> <h2>ADEA PASS</h2></CardTitle>
                    <CardText> <ul>
                        <li><p>(American Dental Education Association Postdoctoral Application Support Service)
                            Like ADEA CAAPID, PASS also simplifies the application process by allowing
                            candidates to submit a single application for the multiple Programs.</p></li>
                    </ul></CardText>
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default AdeaPass;