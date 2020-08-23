import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../Services/dentpin/dentpin.css'

function Gpr() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div>

                <Card body outline color="info">
                    <CardTitle> <h4>GPR</h4></CardTitle>
                    <CardText>   <ul>
                        <li><p>These are called certificate programs which offered at least a year to 2 years. After 1
                    year of AEGD/GPR dentists get license in Virginia only; Two years of this program give
                    license around 13 states in America. This rule applies only for 5 years after that dentist
                    can take the license exam to practice in more states.</p></li>
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Gpr;