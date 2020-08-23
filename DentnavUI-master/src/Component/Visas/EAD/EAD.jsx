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
                    <CardTitle> <h2>EAD</h2></CardTitle>
                    <CardText>
                    <ul>
                        <li><p>For non-immigrants America issues employment for dependents such as H4 EAD/ L2
                            EAD. People with these visas can apply to programs where the schools need not to
                            issue visa. This will be advantageous for these visas than F1 students as schools must
                            sponsor visas otherwise F1 students cannot maintain their visa validity..</p></li>
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