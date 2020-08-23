import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import CardFooter from '../../CardFtr';
import '../dentpin/dentpin.css'

function OtherServices() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div>
                 <Card body outline color="warning">
                    <CardTitle> <h2>OTHER SERVICES</h2></CardTitle>
                    <CardText>
                    <ul>
                        <li><p>Writing SOP and preparing CV is always challenging. One should know what to be
                        written so that the dental schools could pick up the application. Moreover, getting
                        recommendation letters from professors is great deal too. DENTNAV is always with the
                        applicants to make everything effective.</p></li>
                        
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

export default OtherServices;