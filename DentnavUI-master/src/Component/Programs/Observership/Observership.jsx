import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../Services/dentpin/dentpin.css'

function Observership() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div>

                <Card body outline color="info">
                    <CardTitle> <h4>OBSERVERSHIP</h4></CardTitle>
                    <CardText>    <ul>
                        <li><p>International dentists are allowed to observe the dental clinic upon the acceptance of
                        the head of the clinic. Some of the dental schools in the USA accepts the international
                        dentists to solely observe the clinic either with tuition fee or without tuition fee. Paid
                        Observership follows the curriculum of residents and international dentists are allowed
                        to participate in the course discussions, lectures and observe the clinic. The observers
                        are not allowed to talk to the patients.</p></li>
                        
                        
                       <li><p>The main difference between the resident and observer is that the resident works on
                        patient where the observers are not allowed to. Some free Observership programs are
                        only a weeklong and student are not involved in any academic activity. After the
                        Observership a certificate will be awarded. These lasts from a week to months.</p></li>
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Observership;