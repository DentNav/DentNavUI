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
                    <CardTitle> <h2>Green CARD & Citizens</h2></CardTitle>
                    <CardText>
                    <ul>
                        <li><p>Green card holders are residents and they will be having more opportunities as some
                            schools accept only residents who pursued dental education abroad. Student loan
                            process is piece of cake for them. US citizens who studied dentistry abroad have more
                            open applications from various dental schools than foreign students.</p></li>
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