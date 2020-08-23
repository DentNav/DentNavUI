import React,{Component} from 'react';
import '../Footer/Footer.css'
// import logo from '../../assets/img/dentNavLogo_1.jpeg';
import logo from '../../../src/public/img/logo-1.jpg'
import { withRouter } from 'react-router';

class Footer extends Component{
  onRoute(routeComponent,onHoverComponent){
    this.setState({
        [onHoverComponent]: true
    })
    if (routeComponent) {
        this.props.history.push({ pathname: '/' });
        this.props.history.push({ pathname: routeComponent });
    }
    else {
        this.props.history.push("/");
    }
    setTimeout(()=>{
        this.setState({
            [onHoverComponent]: false
        })
    },1000)
}

    render(){
        return(
            <div>
                <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div style={{marginTop:"60px"}} className="col-lg-3 col-md-6 footer-info">
            { <img src={logo} alt="DentNav"/> }
            {/* <p>DENTAL NAVIGATION guides international dentists want to pursue dentistry abroad. Guidance will be given 	to apply various dental programs in the USA, guidance to steps in the application process, research opportunities, Visas, employment opportunity after the dental degree, licensing procedures in the states based on their requirements, etc.</p> */}
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Services</h4>
            <ul>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/services/adea_caapid','services')} >ADEA CAAPID</a></li>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/services/adea_pass','services')} >ADEA PASS</a></li>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/services/bench_test','services')} >BENCH TEST/INTERVIEW</a></li>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/services/admission','services')} >ADMISSION</a></li>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/services/other_services','services')} >OTHER SERVICES</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Programs</h4>
            <ul>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/programs/certificate_programs','programs')} >CERTIFICATE PROGARMS</a></li>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/programs/preceptorship','programs')} >PRECEPTORSHIP</a></li>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/programs/observership','programs')} >OBSERVERSHIP</a></li>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/programs/interview','programs')} >INTERVIEW</a></li>
              <li><i className="fa fa-angle-right"></i> <a style={{cursor: "pointer"}} onClick={() => this.onRoute('/programs/extenship','programs')} >EXTERNSHIP</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>

            <div className="social-links">
              <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
              <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
              <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>DentNav</strong>. All Rights Reserved
      </div>
      <div className="credits">
        
        {/* All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent */}

        Designed by <a >DentNav</a>
      </div>
    </div>
  </footer>
  </div>
        )
    }
}

export default withRouter(Footer)