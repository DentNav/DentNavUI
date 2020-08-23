import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../Services/dentpin/dentpin.css'

function Externship() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className="dentpin">
            <div>

                <Card body outline color="info">
                    <CardTitle> <h4>EXTERNSHIP</h4></CardTitle>
                    <CardText>    <ul>
                        <li><p>Some dental schools in the US offer pre and postdoctoral externships for international
                        trained dentists. Postdoctoral externships offered at dental schools in specialties such
                        as endodontics, orthodontics, periodontics, pedodontics, and prosthodontics. This
                        program duration is mostly 3 months, 6 months, and 1 year.
                        Foreign trained dentists will have special didactic schedule, offered guided study, and
                        attendance to lectures, seminars.</p></li>         
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Externship;