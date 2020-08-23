import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../B1_B2/b1b2.css';

function Adat() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="b1b2">
            <div>

                <Card body outline color="danger">
                    <CardTitle> <h2>J1/F1</h2></CardTitle>
                    <CardText>
                    <ul>
                        <li><p>For visa (Student visa), J1 Visa (Exchange visitor/student visa)
                        </p></li>
                        <li><p>
                        Some students often do masters/certificate programs at the universities and improve the
                        resume and before applying to the dental schools with better qualifications.</p></li>
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