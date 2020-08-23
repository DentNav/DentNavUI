import React, { Component } from 'react';
import '../public/css/style.css';
import '../Component/Header.css';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ModalVideo from 'react-modal-video'
import { withRouter } from 'react-router';
import detectmob from './helper/helper.jsx';
import ls from 'local-storage';
import logo from '../../src/public/img/logo-1.jpg';
import Axios from 'axios';
// ../../public/img/logo.jpg

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          services: false,
          programs: false,
          visa:false,
          mob:detectmob(),
      LoginSignup:false
        }
        this.openModal = this.openModal.bind(this)
      }

      componentDidMount(){
        // Axios.get("http://localhost:8080/dentnav/loginSingUpFlag").then((res)=>{
        //  this.setState({
        //   LoginSignup: res.data.loginSignup
        //  })
        // })
      }

    openModal () {
        this.setState({isOpen: true})
      }

    onRoute(routeComponent,onHoverComponent){
        this.setState({
            [onHoverComponent]: true
        })
        if (routeComponent) {
          if(routeComponent == "logout"){
            localStorage.setItem('userAuthenticated', 0);
            this.props.history.push({ pathname: '/' });
          }
          else{
            this.props.history.push({ pathname: '/' });
            this.props.history.push({ pathname: routeComponent });
          }
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
    render() {
        return (
            <div>
                 <nav id="header" className="navbar navbar-toggle navbar-dark navbar-expand-lg fixed-top header-scrolled divcenter">
                 <h1 class="logo"><a onClick={() => this.onRoute()}> { <img className="logStyle" src={logo} alt="DentNav"/> }</a></h1>
                        <a href="index.html" class="logo"><img src="../assets/img/logo.png" alt="" class="img-fluid"/></a>
                 {/* <a className="navbar-brand" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute("/")}><img src={logo} alt="Waffle Inc." /></a> */}
                 <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
               
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                       <a href="#home" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } className="nav-link" onClick={() => this.onRoute()}>Home</a>
                     </li>
                     <li className="nav-item">
                       <a href="#aboutus" className="nav-link" onClick={() => this.onRoute()}>About</a>
                     </li>
                     <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Services<ArrowDropDownIcon/>
                       </a>
                       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <ul className="ulli" style={{display: this.state.services ? "none": ""}}>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('services/dentpin','services')}>Dentpin</a>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null }  onClick={() => this.onRoute('services/ece-wes','services')}>ECE/WES</a>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('services/indbe','services')}>INDBE</a>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('services/adat','services')}>ADAT</a>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('services/adea_caapid','services')}>ADEA CAAPID</a>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('services/adea_pass','services')}>ADEA PASS</a>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('services/bench_test','services')}>BENCH TEST/INTERVIEW</a>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('services/admission','services')}>ADMISSION</a>
                         <a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('services/other_services','services')}>OTHER SERVICES</a>
                       </ul>
                       </div>
                     </li>
                     <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Programs<ArrowDropDownIcon/>
                       </a>
                       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <ul className="ulli" style={{display: this.state.programs ? "none": ""}}>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/idp_dds','programs')}>IDP DDS/DMD</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/dscd_mscd','programs')}>DScD/MScD</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/aegd','programs')}>AEGD</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/gpr','programs')}>GPR</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/certificate_programs','programs')}>CERTIFICATE PROGARMS</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/preceptorship','programs')}>PRECEPTORSHIP</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/observership','programs')}>OBSERVERSHIP</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/interview','programs')}>INTERVIEW</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('programs/extenship','programs')}>EXTERNSHIP</a></li>
                       </ul>
                       </div>
                     </li>
                     <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Visa<ArrowDropDownIcon/>
                       </a>
                       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <ul className="ulli" style={{display: this.state.visa ? "none": ""}}>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('visa/b1_b2','visa')}>B1/B2</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('visa/j1_f1','visa')}>J1/F1</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('visa/j2_f2','visa')}>J2/F2</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('visa/ead','visa')}>EAD</a></li>
                       <li><a className="dropdowna dropdown-item" data-toggle={this.state.mob ? "collapse" : null} data-target={this.state.mob ? ".navbar-collapse" : null } onClick={() => this.onRoute('visa/green_card','visa')}>GREEN CARD & CITIZEN's</a></li>
                       </ul>
                       </div>
                     </li>
                     <li className="nav-item">
                       <a href="#faq"  className="nav-link" onClick={() => this.onRoute()}>FAQ's</a>
                     </li>
                     <li className="nav-item">
                       <a href="#contact" className="nav-link" onClick={() => this.onRoute()}>Contact</a>
                     </li>
                   </ul>
                   {/* <form className="form-inline">
                   <ul className="navbar-nav mr-auto">
                   <li class="nav-item">
                     <a style={{color:"white"}} class="get-started-btn scrollto" onClick={()=>{this.onRoute('login')}}>Login</a>
                     </li>
                     <li class="nav-item">
                     <a style={{color:"white"}} class="get-started-btn scrollto" onClick={()=>{this.onRoute('login')}}>Login</a>
                     </li>
                 </ul>
                 </form> */}
                   {
                     this.state.LoginSignup ? 
                     <div > 
                   <ul class="navbar-nav mr-auto">
                   <li class="nav-item">
                   {ls.get('userAuthenticated') ?  "" :  <a style={{color:"white"}} class="get-started-btn scrollto" onClick={()=>{this.onRoute('sign-up')}}>Signup</a>}
                     </li>&nbsp;
                     <li class="nav-item">
                       {ls.get('userAuthenticated') ?  <a style={{color:"white"}} class="get-started-btn scrollto" onClick={()=>{localStorage.setItem('userAuthenticated', 0);this.onRoute('/')}}>logout</a> :  <a style={{color:"white"}} class="get-started-btn scrollto" onClick={()=>{this.onRoute('login')}}>login</a>}
                     </li>
                 </ul>
                   </div> 
                   : 
                   ""
                   }
                   </div>
                   </nav>
                 
                {/* <header id="header" class="fixed-top header-scrolled">
                    <div class="container-fluid d-flex align-items-center justify-content-between">

                        <h1 class="logo"><a onClick={() => this.onRoute()}>DentNav</a></h1>
                        <a href="index.html" class="logo"><img src="../assets/img/logo.png" alt="" class="img-fluid"/></a>

                        <nav class="nav-menu d-none d-lg-block">
                                <ul>
                                    <li class="active"><a onClick={() => this.onRoute()}>Home</a></li>
                                    <li><a onClick={() => this.onRoute()}>About</a></li>
                                    <li class="drop-down"><a>Services<ArrowDropDownIcon/></a>
                                        <ul style={{display: this.state.services ? "none": ""}}>
                                            <li><a onClick={() => this.onRoute('services/dentpin','services')}>Dentpin</a></li>
                                            <li><a onClick={() => this.onRoute('services/ece-wes','services')}>ECE/WES</a></li>
                                            <li><a onClick={() => this.onRoute('services/indbe','services')}>INDBE</a></li>
                                            <li><a onClick={() => this.onRoute('services/adat','services')}>ADAT</a></li>
                                            <li><a onClick={() => this.onRoute('services/adea_caapid','services')}>ADEA CAAPID</a></li>
                                            <li><a onClick={() => this.onRoute('services/adea_pass','services')}>ADEA PASS</a></li>
                                            <li><a onClick={() => this.onRoute('services/bench_test','services')}>BENCH TEST/INTERVIEW</a></li>
                                            <li><a onClick={() => this.onRoute('services/admission','services')}>ADMISSION</a></li>
                                            <li><a onClick={() => this.onRoute('services/other_services','services')}>OTHER SERVICES</a></li>
                                        </ul>
                                    </li>
                                    <li class="drop-down"><a onClick={() => this.onRoute()}>Programs<ArrowDropDownIcon/></a>
                                        <ul style={{display: this.state.programs ? "none": ""}}>
                                            <li><a onClick={() => this.onRoute('programs/idp_dds','programs')}>IDP DDS/DMD</a></li>
                                            <li><a onClick={() => this.onRoute('programs/dscd_mscd','programs')}>DScD/MScD</a></li>
                                            <li><a onClick={() => this.onRoute('programs/aegd','programs')}>AEGD</a></li>
                                            <li><a onClick={() => this.onRoute('programs/gpr','programs')}>GPR</a></li>
                                            <li><a onClick={() => this.onRoute('programs/certificate_programs','programs')}>CERTIFICATE PROGARMS</a></li>
                                            <li><a onClick={() => this.onRoute('programs/preceptorship','programs')}>PRECEPTORSHIP</a></li>
                                            <li><a onClick={() => this.onRoute('programs/observership','programs')}>OBSERVERSHIP</a></li>
                                            <li><a onClick={() => this.onRoute('programs/interview','programs')}>INTERVIEW</a></li>
                                            <li><a onClick={() => this.onRoute('programs/extenship','programs')}>EXTERNSHIP</a></li>
                                        </ul>
                                    </li>
                                    <li class="drop-down"><a href="">VISA's<ArrowDropDownIcon/></a>
                                        <ul style={{display: this.state.visa ? "none": ""}}>
                                            <li><a onClick={() => this.onRoute('visa/b1_b2','visa')}>B1/B2</a></li>
                                            <li><a onClick={() => this.onRoute('visa/j1_f1','visa')}>J1/F1</a></li>
                                            <li><a onClick={() => this.onRoute('visa/j2_f2','visa')}>J2/F2</a></li>
                                            <li><a onClick={() => this.onRoute('visa/ead','visa')}>EAD</a></li>
                                            <li><a onClick={() => this.onRoute('visa/green_card','visa')}>GREEN CARD & CITIZEN's</a></li>
                                            <li><a onClick={() => this.onRoute('visa/preceptorship','visa')}>PRECEPTORSHIP</a></li>
                                            <li><a onClick={() => this.onRoute('visa/observership','visa')}>OBSERVERSHIP</a></li>
                                            <li><a onClick={() => this.onRoute('visa/interview','visa')}>INTERVIEW</a></li>
                                            <li><a onClick={() => this.onRoute('visa/externship','visa')}>EXTERNSHIP</a></li>
                                        </ul>
                                    </li>
                                    <li class="drop-down"><a href="">FAQ's</a></li>
                                    <li><a href="#contact">Contact</a></li>

                                </ul>
                            </nav>

                            <div>
                            <a style={{color:"white"}} class="get-started-btn scrollto" onClick={()=>{this.onRoute('login')}}>Login</a>
                            <a style={{color:"white"}} class="get-started-btn scrollto marginRight10" onClick={()=>{this.onRoute('sign-up')}}>SignUp</a>
                            </div>
                            </div>
                            </header> */}
  {/* <section id="hero">
    <div class="hero-container" data-aos="fade-up" data-aos-delay="150">
      <h1>DentNav</h1>
      <h2>A Guiding Platform for the International Dentists to Abroad</h2>
      <div class="d-flex">
        <a class="venobox btn-watch-video" onClick={this.openModal} data-vbtype="video" data-autoplay="true"><PlayCircleFilledWhiteOutlinedIcon className="videobutton"/> Watch Video </a>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='0PX5UBuvk_w' onClose={() => this.setState({isOpen: false})} />
      </div>
    </div>
  </section> */}
            </div>
        )
    }
}

export default withRouter(Header);