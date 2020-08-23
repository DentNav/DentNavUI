import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../dentpin/dentpin.css'

function BenchTestInterview() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div>
                <Card body outline color="warning">
                    <CardTitle> <h2>BENCH TEST/INTERVIEW</h2></CardTitle>
                    <CardText> <ul>
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

export default BenchTestInterview;