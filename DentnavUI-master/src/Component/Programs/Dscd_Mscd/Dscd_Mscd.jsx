import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import '../../Services/dentpin/dentpin.css'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function Dscd_Mscd() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="dentpin">
            <div>

                <Card body outline color="info">
                    <CardTitle> <h4>DScD/MScD</h4></CardTitle>
                    <CardText>    <ul>
                        <li><p>Dental schools/institutes in the USA offers 10 specialty programs for International
                        students and award dental degrees MScD (MSD)/ DScD (DSD). These specialties are
                        considered 2-3 years of post-doctoral programs and provide license to practice in
                        limited states.</p></li>
                        <li> <p>Some specialties accept international students into the PG program directly, even
                        though they have bachelors from their home countries such as Oral medicine, Perio,
                        prosthodontics, pedodontics,</p></li>
                        <li><p>Some other specialties mandate international dentists to have DMD/ DDS from USA
                        dental school to apply such as Surgery. ENDO and Ortho specialties may or may not
                        accept students without DDS/DMD from USA dental schools.</p></li>
                        <li><p>Specialty program such as DPH need a student to have master’s in public health (MPH)
                        to enroll and get the license.
                        Apart from the bachelor and master’s degree in dentistry there are advanced clinical
                        degrees (1-2 years) in various specialties such as general dentistry, Pedo,
                        prosthodontics, ENDO, Ortho, Perio... these programs offer limited license in some
                        states of the USA.</p></li>
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Dscd_Mscd;