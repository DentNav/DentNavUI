import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../Services/dentpin/dentpin.css'

function Precertorship() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="dentpin">
            <div>

                <Card body outline color="info">
                    <CardTitle> <h4>PRECERTORSHIP</h4></CardTitle>
                    <CardText>   <ul>
                        <li><p>Preceptorships are similar to the paid Observership at the dental schools where
                        international dentists will have special curriculum throughout the length of the program,
                        and it is paid program. In some dental schools’ candidates are allowed to assist
                        residents while treatment procedures, involved in the treatment planning discussions,
                        allowed to attend lectures and will be given a certificate at the end of the program.</p></li>
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Precertorship;