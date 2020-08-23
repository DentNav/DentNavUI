import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../Services/dentpin/dentpin.css'

function Interview() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div>

                <Card body outline color="info">
                    <CardTitle> <h4>INTERVIEW</h4></CardTitle>
                    <CardText>     <ul>
                        <li><p>Bench test analyzes the international dentist skills by assigning some treatment
                        procedures in operative dentistry (Class II amalgam/ composite), endodontics (access
                        opening on anterior tooth), fixed prosthodontics (crown preps), and removable
                        prosthodontics (fabricating removable prosthesis).</p></li>
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Interview;