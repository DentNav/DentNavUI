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
                    <CardTitle> <h2>J2/F2</h2></CardTitle>
                    <CardText>
                    <ul>
                        <li><p>F2 visa (dependent student visa), J2 visa (dependent student/exchange visitor visa)
                        Dependents of F1/J1 visa holders can be on F2/J2 visa.</p></li>
                        <li><p>They are lot of visa regulations
                        and one can visit US immigration website for more information.</p></li>
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