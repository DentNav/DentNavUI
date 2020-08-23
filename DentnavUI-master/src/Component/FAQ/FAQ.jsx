import React,{Component} from 'react';
import '../FAQ/FAQ.css';
import { withRouter } from 'react-router';

 class FAQ extends Component{

  constructor(props){
   super();
   this.state = {
     faq:[
       {
       "title":"I am a dentist from India, what are the chances to go and work as dentist in America?",
       "answer":"Dentists other than America and Canada are considered International trained dentists and everyone can go to America as a dentist but degrees from other countries are not valid. So, one has to pursue further studies in dentistry such as international dental program (IDP) or masters and then write the license exam to work as a dentist. With IDP one could earn DDS or DMD based on the university and the master’s programs are MScD (MSD)/ DScD (DSD)."
      },
      {
        "title":"What are the degrees I can earn in America after pursuing dentistry career in America?",
        "answer":"Various countries across the world offer bachelor’s degree in dentistry as BDS, DMD, DDS.However, USA dental schools award either DDS or DMD based on school norms.Both the degrees are equivalent and dentists with these degrees considered as general dentists. Moreover,US domestic students pursue 4 years (D1, D2, D3, D4) of education and international students pursue at least 2 years (D3, D4) to attain DMD/DDS degree. Dental schools/institutes in the USA offers 10 specialty programs for International students and award dental degrees, MScD (MSD)/ DScD (DSD). These specialties are considered 2-3 years of post-doctoral programs and provide license to practice in limited states."
       },
       {
        "title":"My ultimate goal is to become a general dentist or a specialist in America?",
        "answer":"Becoming a general dentist or a specialist depends upon the course admitted into. If one gets into IDP and earns DDS/DMD degree one could practice as a general dentist; master’s program earns degree MScD or DScD Depending upon the program one admitted in. The application process is almost same to apply for both the IDP and masters expect an additional exam which called ADAT, for master’s program"
       },
       {
        "title":"How many years does it take for any candidate to get into American dental schools?",
        "answer":"All applications for the dental schools in America start usually more than a year before (ADEA CAAPID- March 1st, ADEA PASS- May 15th). If any candidate is proactive and passes INBDE, gets good TOEFL score, and do the application process within the time he/she gets interview from schools; if selected they start school in the next academic year. For example, if one has INBDE, TOEFL scores ready by 2019 March, and apply to dental schools through CAAPID during March-May and get interview August- November; if admitted he/she will start school from next academic year by June/July of 2020."
       },
    ]
   }
  }

  onRoute(routeComponent){
    if (routeComponent) {
        // console.log("login button is clicked",routeComponent);
        this.props.history.push({ pathname: '/' });
        this.props.history.push({ pathname: routeComponent });
    }
}

  onShowChild(id){
    console.log("clicked",document.getElementById(id));
    console.log("aria-expanded",document.getElementById(id).href);
    document.getElementById(id).classList.contains("collapsed") ? document.getElementById(id+"_i").classList.replace('fa-minus-circle','fa-plus-circle') :document.getElementById(id+"_i").classList.replace('fa-plus-circle','fa-minus-circle');
    // if(document.getElementById(id+"_i").classList.contains("fa-minus-circle")){
    //   document.getElementById(id).classList.remove('collapsed');
    //   document.getElementById(id).classList.add('collapse');
    // }
    // else{
    //   document.getElementById(id).classList.remove('collapse');
    //   document.getElementById(id).classList.add('collapsed');
    // }
    //:document.getElementById(id).classList.replace('collapse','collapse');
    // if(document.getElementById(id).classList.contains("collapsed")){
    //    document.getElementById(id).classList.replace('collapsed','collapse');
    //    setTimeout(() => {
    //     document.getElementById(id).classList.contains("collapsed") ? document.getElementById(id+"_i").classList.replace('fa-minus-circle','fa-plus-circle') :document.getElementById(id+"_i").classList.replace('fa-plus-circle','fa-minus-circle');
    //    }, 1000);
    // }
  //  if((document.getElementById(id+"_div").classList.contains('collapse')) && !(document.getElementById(id+"_div").classList.contains('show'))){
  //   document.getElementById(id+"_a").classList.replace('collapsed','collapse');
  //   document.getElementById(id+"_i").classList.replace('fa-plus-circle','fa-minus-circle');
  //  document.getElementById(id+"_div").classList.remove('collapse');
  //  setTimeout(() => {
  //   document.getElementById(id+"_div").classList.add('collapsing');
  //   // document.getElementById(id+"_div").classList.add('div-height');
  //   document.getElementById(id+"_div").classList.remove('collapsing');
  //   document.getElementById(id+"_div").classList.add('collapse','show');
  //  }, 500);
  //  }
  //  if(document.getElementById(id+"_div").classList.contains('show','collapse')){
  //   document.getElementById(id+"_a").classList.replace('collapse','collapsed');
  //   document.getElementById(id+"_i").classList.replace('fa-minus-circle','fa-plus-circle');
  //   document.getElementById(id+"_div").classList.remove("collapse","show");
  //   document.getElementById(id+"_div").classList.add('collapse');
  //  }
  }

    render(){
        return(
          <div id="faq">
              <section className="wow fadeInUp">

              <div className="container">
              
                <div className="section-header">
                  <h2>F.A.Q </h2>
                </div>
              
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <ul id="faq-list">

                      {
                        this.state.faq.map((f,index)=>{
                          return (
                          <li key={index}  >
                            <a data-toggle="collapse" id={index} onClick={()=>{this.onShowChild(index)}} className="collapsed acolur" href={"#faq"+index+1}>{f.title}   <i id={index+"_i"} className="fa fa-plus-circle"></i> </a>
                            <div id={"faq"+index+1} className="collapse" data-parent="#faq-list">
                              <p>
                               {f.answer}
                              </p>
                            </div>
                          </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success" onClick={() => this.onRoute('more/faqs','faqs')}>Show More</button>
                </div>
              </section> </div>
        )
    }
}

export default withRouter(FAQ);