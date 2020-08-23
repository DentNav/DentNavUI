import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../dentpin/dentpin.css'
import CardFooter from '../../CardFtr';

function Admission() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div>

                <Card body outline color="warning">
                    <CardTitle> <h2>ADMISSION</h2></CardTitle>
                    <CardText>
                    <ul>
                        <li><p>DENTPIN creation is free of charge.</p></li>
                        <li> <p>U.S dental education system and standardized tests
                            mandate dental students and professionals to have Dental Personnel Identification Number (DENTPIN).</p></li>
                        <li><p>DENTPIN is used while applying to the test, request score report and apply to the dental education programs.</p></li>
                        <li><p>To create DENTPIN one requires legal name, date of birth, valid address, and email. Most importantly the name and date of birth provided to the DENTPIN record should match to details on passport.</p></li>
                    </ul>
                    </CardText>
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Admission;