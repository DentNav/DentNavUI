import React,{Component} from 'react';
import '../../public/css/style.css';
import '../aboutus/AboutUs.css';
import aboutBox_1 from '../../public/img/about-boxes-1.jpg'
import aboutBox_2 from '../../public/img/about-boxes-2.jpg'
import aboutBox_3 from '../../public/img/about-boxes-3.jpg';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import EventIcon from '@material-ui/icons/Event';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import VisibilityIcon from '@material-ui/icons/Visibility';


class AboutUs extends Component{
    render(){
        return(
            <div id="aboutus">
               <div className="section-header">
          <h2>ABOUT US</h2>
          <p>DENTAL NAVIGATION guides international dentists want to pursue dentistry abroad. Guidance will be given 	to apply various dental programs in the USA, guidance to steps in the application process, research opportunities, Visas, employment opportunity after the dental degree, licensing procedures in the states based on their requirements, etc.</p>
          
        </div>
                <section id="about-boxes" className="about-boxes">
                
      <div className="container"  data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <img src={aboutBox_1} className="card-img-top" alt="..."/>
              <div className="card-icon">
                {/* <i className="ri-brush-4-line"></i> */}
                <LaptopMacIcon style={{height:"64px",width:"64px",backgroundColor:"red",padding:"5px 0px 5px",color:"white",marginTop:"5px",border:"5px solid white",borderRadius:"4px"}}/>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a id="abouts_us">Our Mission</a></h5>
                <p className="card-text">To Guide international dentists willing to pursue and practice dentistry in the United States of America; allowing students hassle free search within a single platform </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <img src={aboutBox_2} className="card-img-top" alt="..."/>
              <div className="card-icon">
                {/* <i class="fas fa-paint-brush" style={{color:"black important"}}></i> */}
                <EventIcon style={{height:"64px",width:"64px",backgroundColor:"red",padding:"5px 0px 5px",color:"white",marginTop:"5px",border:"5px solid white",borderRadius:"4px"}} className="card-icon"/>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a id="abouts_us">Our Plan</a></h5>
                <p className="card-text">Dentnav will not be solely guidance platform; a blog will be incorporated to discuss advanced
              dental procedures advancing everyday which make dentist comfortable and ultimately the
              patient. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <img src={aboutBox_3}  className="card-img-top" alt="..."/>
              <div className="card-icon">
                {/* <i className="ri-movie-2-line"></i> */}
                <VisibilityIcon style={{height:"64px",width:"64px",backgroundColor:"red",padding:"5px 0px 5px",color:"white",marginTop:"5px",border:"5px solid white",borderRadius:"4px"}}/>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a id="abouts_us">Our Vision</a></h5>
                <p className="card-text">
                  Do not let any dentist stop dreaming about pursuing advanced dental studies in abroad.  </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
            </div>
        )
    }
}

export default AboutUs