import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../Services/dentpin/dentpin.css'

function Certif_Programs() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    // return (
    //     <div className="dentpin">
    //         <div className="row marginTop50">
    //             <div className="col-sm-3">
    //                 <h4>CERTIFICATE PROGRAMS</h4>
    //             </div>
    //             <div className="col-sm-9">
    //                 <ul>
    //                     <li><p>Some programs in America are offered to dentists from other countries and not
    //                 permitted to practice. Unlike ADEA CAAPID and PASS, there would be direct
    //                 application to the dental school. Some students enroll in these programs while doing the
    //                 application for IDP or specialty programs so that they will gain knowledge for future
    //                 practice and improve resume.</p></li>
    //                 </ul>
    //             </div>
    //         </div>
    //         <Box mt={20}>
    //         </Box>
    //     </div>
    // )

    return (
        <div className="dentpin">
            <div>

                <Card body outline color="info">
                    <CardTitle> <h4>CERTIFICATE PROGRAMS</h4></CardTitle>
                    <CardText>    <ul>
                        <li><p>Some programs in America are offered to dentists from other countries and not
                    permitted to practice. Unlike ADEA CAAPID and PASS, there would be direct
                    application to the dental school. Some students enroll in these programs while doing the
                    application for IDP or specialty programs so that they will gain knowledge for future
                    practice and improve resume.</p></li>
                    </ul></CardText>
                    {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                    </Button> */}
                </Card>
            </div>
            <Box mt={10}></Box>
        </div>
    )
}

export default Certif_Programs;