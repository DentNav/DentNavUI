import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../FAQ/FAQ.css';
import CardFooter from '../CardFtr';

 class More_Faqs extends Component{


  constructor(props){
   super();
   this.state = {
     faq:[
       {
       "title":"I am a dentist from India, what are the chances to go and work as dentist in America?",
       "answer":"Dentists other than America and Canada are considered International trained dentists and everyone can go to"+
       "America as a dentist but degrees from other countries are not valid. So, one has to pursue further studies"+
       "in dentistry such as international dental program (IDP) or masters and then write the license exam to work as a"+
       "dentist. With IDP one could earn DDS or DMD based on the university and the master’s programs are MScD"+
       "(MSD)/ DScD (DSD)."
      },
      {
        "title":"My ultimate goal is to become a general dentist or a specialist in America??",
        "answer":"Becoming a general dentist or a specialist depends upon the course admitted into. If one gets into IDP and earns"+
        "DDS/DMD degree one could practice as a general dentist; master’s program earns degree MScD or DScD"+
        "Depending upon the program one admitted in. The application process is almost same to apply for both the IDP and"+
        "masters expect an additional exam which called ADAT, for master’s program."
       },
       {
        "title":"Does every dentist get job in America?",
        "answer":"This is one of the best questions to ask!! Every foreign dentist ultimate goal is to work in USA after"+
        "pursuing their higher studies. Truth is, there are 99.9% chances every dentist getting a job. However, it depends"+
        "on one’s skill and capability in procuring a job."
       },
       {
        "title":"What are other jobs a dentist from other country can do in America?",
        "answer":"As mentioned earlier, one cannot work with a B1/B2 visa. People who hold other visas can work such as F1, OPT,"+
        "work visas, and other EAD holders can work. In the field of dentistry then can work as a dental assistant, dental"+
        "hygienist; there are tons of jobs available in health care and IT."
       },
       {
        "title":"Do master’s degrees fetch any advantage while applying to American dental schools?",
        "answer":"Of course, Yes. With master’s degree one is given more priority when it is compared to a bachelor’s degree."+
        "Truth is most of the people got admissions into a dental school held bachelor’s degree before they got admit into"+
        "American dental school."
       },


       {
        "title":"I have bachelors in dentistry and masters from another major, what are the procedures to become dentist in America?",
        "answer":"Any degree does not make difference as candidates are still considered an International dentist. The procedure for application process would still remain the same."
       },
       {
        "title":"Do master’s degrees fetch any advantage while applying to American dental schools?",
        "answer":"Of course, Yes. With master’s degree one is given more priority when it is compared to a bachelor’s degree."+
        "Truth is most of the people got admissions into a dental school held bachelor’s degree before they got admit into"+
        "American dental school."
       },
       {
        "title":"Who pay the loans for dental studies in America?",
        "answer":"If anyone knows a person in America with a green card/ citizen ship and he/she could sponsor for them, American banks provide loans and the dentist repay the loans after the graduation and starts working."
       },
       {
        "title":"What’s the average salary for a dentist in America?",
        "answer":"It depends upon the place and position he/ she works for example an associate dentist earns more than a dentist in a dental office. However, the national average salary is around 150k USD."
       },
       {
        "title":"How many years does it take for a dentist to pay back bank loans?",
        "answer":"Usually dentist takes 3-5 years to pay back loans with an average salary."
       },
       {
        "title":"How easy to get admission in American dental schools?",
        "answer":`For any candidate with a good profile it is not very difficult to get an admission in US dental school, provided
        that person meets all requirements for a particular program. Good profile includes good GPA, more than 100 TOEFL, good LORs, 
       decent experiences, and additional qualifications. For more information on this please visit the website.`
       },
       {
        "title":"What is ECE and do one need to send the documents directly from the university?",
        "answer":`ECE is Education Credential Evaluators, a third-party organization which converts marks cards into the US grades
        GPA. This is the first step that one needs to do before applying for an INBDE exam to get eligibility.
        `
       },
       {
        "title":"How many exams should I take before applying to American dental schools?",
        "answer":`Earlier it used to be 2exams NBDE part 1 and part 2 and an English exam called TOEFL. But from the October 2020, there will be only one exam called INBDE and of course TOEFL. 
        If one is applying for the master’s program ADAT is mandatory.`
       },
       {
        "title":"How much does it will cost to take INBDE?",
        "answer":`For taking INBDE it costs around 600$.`
       },
       {
        "title":"What is the INBDE and how difficult is it?",
        "answer":`This is the mandatory dental exam foreign dentist to be recognized as dentist and get eligibility to take license exam.
        To be honest no one knows the level of difficulty of exam as it is not yet conducted. 
        Moreover, whoever had prepared well for their PG entrance test might feel easier.
        There are specific guidelines provided by Joint commission on National Dental Examination (JCNDE) about the INBDE. 
        Regarding the syllabus and the type of questions that are going to arrive in the INBDE exam ae mentioned in website.`
       },
       {
        "title":"What is the exam pattern for INBDE and do any organization has mock test prep?",
        "answer":`INBDE exam includes a total of 500 questions that is being conducted in one and half day. 
        NBDE included 400 questions each in part 1 and part 2. There are few organizations like Kaplan for conducting mock exams.`
       },
       {
        "title":"What is the best prep material for INBDE?",
        "answer":`There are various books for INBDE preparation, and the recommendations of each individual may vary. Usually most of the 
        1. Students study these:
        2. DENTAL DECKS
        3. FIRST AID
        4. ASDA PREVIOUS QUESTIONS
        5. KAPLANS
        6. MOSBY’S`        
       },
       {
        "title":"Do any organization have mentors to train for INBDE exams?",
        "answer":`Yes of course. Our website provides the details regarding the training programs. Also, you can find many videos online. You
        Can follow according to your level of preparation.`
       },
       {
        "title":"After INBDE in how many days the results will be out?",
        "answer":`Yes of course. Our website provides the details regarding the training programs. Also, you can find many videos online. You
        Can follow according to your level of preparation.`
       },
       {
        "title":"After INBDE in how many days the results will be out?",
        "answer":`Mostly 10-14 days one will get mail.`
       },
       {
        "title":"How to find out the wrongly answered questions during the exam?",
        "answer":`Unfortunately, no one can able to find out wrongly answered questions, as JCNDE never give a hard copy of the question paper.`
       },
       {
        "title":"Does the tourist visa (B1/B2) is okay to take INBDE?",
        "answer":`You are absolutely fine to take INBDE exam with B1/B2 visa.`
       },
       {
        "title":"If a dentist is on tourist visa (B1/B2), and how many times he/she could visit America while trying to get in the USA dental schools?",
        "answer":`If one wants to visit USA on B1/B2 for the purpose of getting an admission to a dental school, he/she should visit twice before getting admission.
        First time to write INBDE exam
        Secondly to attend the interview process 
        Because one is allowed to stay in America, only for 6 months- After giving exams one has to return to his/her home country and finish the application process and paperwork (supplemental application); If one gets an interview call, he/she has to visit America for the second time. 
        After getting admission into any dental school one will be given I-20, with which he/she applies for F1 Visa TOEFL exam can be given US or in your home country.`
       },
       {
        "title":"What is ADEA CAPPID/PASS application and how to fill?",
        "answer":`As there are number of colleges in USA, it is a hectic job to apply for each and every school separately. So, there is a single platform called ADEA CAAPID to applying to IDP and ADEA PASS to apply for master’s programs. 
        In the application process, candidate chooses all the dental schools he/she wants to apply. This greatly saves the time and money.`
       },
       {
        "title":"Are there any other dental programs other than DDS and masters?",
        "answer":`Yes. There are few other programs called advanced education in general dentistry (AEGD) and general practice residency GPR). The two courses are offered for at least for 1 and 2 years.`
       },
       {
        "title":"How much time it will take for the whole process of getting into American dental schools?",
        "answer":`If one clears all the exams in a single attempt and apply for the consecutive cycle of CAAPID or PASS it takes a
        minimum of 1 year. If not, one needs to reapply.`
       },
       {
        "title":"To how many schools one can apply during each cycle?",
        "answer":`There is no limitation while applying to American dental schools. 
        One could apply to as many as they could if he/she has no concern about the program, state or some other.`
       },
       {
        "title":"How about the accommodation in America while taking the INBDE exam and interview process?",
        "answer":`People holding B1/B2 visa could stay up to 6 months for every visit, and it is always
        better to stay with friends or at relatives’ houses. Some people just stay for a week at hotels or Airbnb till they take exam.`
       },
       {
        "title":"What is the minimum bachelor’s degree percentage required for the dental school admission?",
        "answer":`The minimum of 3.0 GPA is required by all the dental schools without any exceptions.`
       },
       {
        "title":"How hard is the TOEFL exam and what is the minimum, best score required to apply to the dental school?",
        "answer":`TOEFL is not a hard exam if one prepares qualitatively. Most of the dental schools mandates a candidate should have a minimum score of 100. Though some schools, they would give the preference of scores above 100 in the process of selecting a candidate for an interview.`
       },
       {
        "title":"How any candidate knows which dental schools are good in America?",
        "answer":`One can always google for the information about any dental colleges. The more you do your own research the more information one will know. Additionally, DENTNAV website provides ample amount of information on the colleges and one can reach us always by email or phone.`
       },
       {
        "title":"After applying to the dental schools when will a candidate know whether he/she is called for an interview?",
        "answer":`If a person is selected for an interview, he/she will be contacted by the concerned authorities mostly by an email or sometimes by phone if he/she provides the local mobile number (America).
        It entirely depends on the schools as each and every school has its own regulations; However, a minimum of 
        2 months can be expected after the school’s application deadline`
       },
       {
        "title":"Is there any institution who prepares candidates for the dental school interview and how much does it cost?",
        "answer":`There are some institutions who prepare the students for the dental school interviews. Couple of them are mentioned below.
        DUGGAN’S INSTITUTE
        STEVENSON’S INSTITUTE
        These 2 are located in California. The cost would approximately range from 4000$ to 10,000$.`
       },
       {
        "title":"After the interview, what is the time frame to hear the acceptance/rejection from American dental school?",
        "answer":`That depends on the individual school. After you give a BENCH TEST, dental school may take a minimum of 7-10 business days to send the letter of acceptance or regrets email.`
       },
       {
        "title":"What if any candidate is not selected into American dental school; Do the candidate needs to reapply during the next academic year by following the same process?",
        "answer":`Reapplication can be done for the next academic year, including how a candidate improved their resume since the last application and need not to write exams for five cycles again (this info is to tell the Truth, not to discourage).
        INBDE scores are valid for a period of 5 years. TOEFL scores are valid for 2 years.`
       },
       {
        "title":"Is there any chance a candidate can work while doing the application process to get into American dental schools?",
        "answer":`A person on tourist visa {B1, B2} cannot work under any circumstances and it is not illegal. 
        Other than B1, B2 people on F1 OPT or Dependent EAD visas can happily work and make money. Moreover, some candidates do Volunteering (community work/ Observership/ volunteer at old age homes), which would be add to candidate’s profile and thus, improve their resume.`
       },
       {
        "title":"What are the steps if a dentist wants to study dentistry in America?",
        "answer":`Before jumping into steps, one has to get their marks evaluated from the Educational Credential Evaluators (ECE) and should have minimum Grade Percent Average (GPA) 3.0 which is mandatory to take INBDE exam. The organizations in USA who does this evaluation- the complete information is provided in the website.`
       },
       {
        "title":"What are the other courses a dentist with BDS degree can apply in America?",
        "answer":`One can apply for IDP to get DDS/DMD or master’s program called MScD (MSD)/ DScD (DSD) related to 
        Dentistry. If one wants to pursue a career other than dentistry there are many courses like master’s in health care (MHA), Business Administration (MBA), Public Health (MPH), Immunology, oral biology, etc.`
       },
       {
        "title":"If I have MDS from India or masters from any other country, is there any difference in the application process to American dental schools for study or work?",
        "answer":`First and foremost, application process to American dental schools is same for everyone irrespective of having any degree (either master’s or PhD or something else).
        Another thing is any dentist from other country cannot directly work in America with any dental degree even the masters that is earned outside USA.`
       },
       {
        "title":"What is the procedure to apply for the bank loans while pursuing dentistry in America?",
        "answer":`If a person gets an admission into any particular dental school, the financial office (Bursar’s office) of that particular dental school will take care of the loan process, provided having a sponsor.`
       },
       {
        "title":"How many times one can take INBDE in a year? When could one retake exam after he/she fails during 1st or 2nd attempt?",
        "answer":`One can give maximum of 3 attempts in a year. If one fails for the first time, he/she can retake only after 90 days to the previous 
        Attempt.`
       },
       {
        "title":"Pros and Cons of programs (DDS) over AEGD/GPR?",
        "answer":`As every program has its own pros and cons; IDP (DDS/DMD) and AEGD/GPR has its own; 
        For IDP (DDS/DMD) tuition fee is 80-120k USD per annum, total cost would be more than 250k USD. In contrast, For AEGD/GPR total cost would be not more than 150k dollars.
        Licensing wise DDS/DMD degree holders can practice almost all the 50 states of USA whereas remaining courses including masters and other programs permit to practice in limited states.
        However, this limited license is only for 5 years after that one will get eligibility to practice almost all the states.`
       },
       {
        "title":"When does a dentist could start the application process (preparation, exams, application) during the year?",
        "answer":`The ADEA CAAPID application opens in the month of March and ADEA PASS in the month of May.
        So, one needs to be ready by then to fill the application. Hence one has to start writing exams and get ready at least 
       6 months before the CAAPID and PASS open.`
       },
       {
        "title":"Which programs I can apply based on GPA and the total cost of tuition fee?",
        "answer":`A minimum GPA of 3.0 is required to apply for any program and the total cost of tuition fee relies on the program one chooses whether it is IDP or specialty or other programs such as AEGD and GPR.`
       },
       {
        "title":"I am on spouse visa with EAD and do I have any advantage while applying to any dental programs?",
        "answer":`Yes, there are some AEGD and GPR programs which can’t issue student visa and ask students to maintain
        Visa status. However, for the IDP and specialty programs one still has to follow all the steps without any exceptions.`
       },
       {
        "title":"Is there any firm which helps for the whole process of application to American dental school?",
        "answer":`With the information provided in the DENTNAV website, and with the help of friends everyone can apply to dental schools on their own. We made sure to give each and every finest detail within the website. 
        If anyone find difficulty while doing any of the step in the application process, feel free to contact us through email or ask us a question to and we would be glad to answer all of your questions. The basic idea to launch the DENTNAV website is, to help students across whole process of application as there is no single platform which does all as us.`
       },
       {
        "title":"Does a dentist from any other country get admission if she/he applies to American dental school directly from their home country?",
        "answer":`One cannot apply to any school directly as one need to apply for their education evaluation, take INBDE exam, and there are more to know. Reach DENTNAV website services for more information.`
       },
       {
        "title":"Are there any programs for foreign trained dentists in America which has no tuition fee, or Which give Stipend?",
        "answer":`Yes, there are!!! The information will be available in the website.`
       },
       {
        "title":"What is the “bench test” and its process in detail?",
        "answer":`Once the applicant is called for an interview, the program tests clinical skills of a candidate by conducting a BENCH TEST, which include series of Clinical tests such as crown cutting on molars, class 2 preparations, temporary crown prep and an interview. All the candidates will be given clear guidelines of clinical exercises to be performed on the day of interview.`
       },
       {
        "title":"Is the bench test mandatory to get into American dental school?",
        "answer":`DDS/DMD program mandates bench test by all schools; but for the specialty program it is not mandatory, but there are few schools who mandates for the bench test!`
       },
       {
        "title":"In how many American states I can practice after completion of dental degree?",
        "answer":`After IDP program (DDS/DMD), AEGD, GPR dentist should take license exams conducted by
        American Board of Dental Examiners (ADEX), such as CDCA, WREB, SRTA, CITA, CRDTS based on the state’s requirement, degree eligibility among 50 states.`
       },
       {
        "title":"Does a dentist from other country can work as dental assistant or dental hygienist in America?",
        "answer":`To become dental assistant in America one has to write Certified Dental Assistant (CDA) exam to become Dental assistant, National Board Dental Hygiene Examination (NBDHE) to become dental hygienist. However, one has to be on work permit to continue with their work either as dental assistant or dental hygienist.`
       }
    ]
   }
  }

  
  onRoute(routeComponent,onHoverComponent){
    this.setState({
        [onHoverComponent]: true
    })
    if (routeComponent) {
        console.log("login button is clicked",routeComponent);
        this.props.history.push({ pathname: '/' });
        this.props.history.push({ pathname: routeComponent });
    }
    else {
        console.log("login button is clicked else",routeComponent);
        this.props.history.push("/");
    }
    setTimeout(()=>{
        this.setState({
            [onHoverComponent]: false
        })
        console.log("timeout",this.state.clickedComponent)
    },1000)
}

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  onShowChild(id){
    console.log("clicked",document.getElementById(id));
    console.log("aria-expanded",document.getElementById(id).href);
    document.getElementById(id).classList.contains("collapsed") ? document.getElementById(id+"_i").classList.replace('fa-minus-circle','fa-plus-circle') :document.getElementById(id+"_i").classList.replace('fa-plus-circle','fa-minus-circle');
   
  }

    render(){
//         return(
//           <div>
//               <section id="faq" class="wow fadeInUp">

//               <div class="container">
// {/*               
//                 <div class="section-header">
//                   <h2>More F.A.Q </h2>
//                 </div> */}
              
//                 <div class="row justify-content-center">
//                   <div class="col-lg-9">
//                     <ul id="faq-list">

//                       {
//                         this.state.faq.map((f,index)=>{
//                           return (
//                           <li key={index}  >
//                             <a data-toggle="collapse" id={index} onClick={()=>{this.onShowChild(index)}} class="collapsed acolur" href={"#faq"+index+1}>{f.title}   <i id={index+"_i"} class="fa fa-plus-circle"></i> </a>
//                             <div id={"faq"+index+1} class="collapse" data-parent="#faq-list">
//                               <p>
//                                {f.answer}
//                               </p>
//                             </div>
//                           </li>
//                           )
//                         })
//                       }
//                     </ul>
//                   </div>
//                 </div>
              
//               </div>
//               </section>
//                </div>
//         )

        return (
          <div className="dentpin">
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
  
                  <Card body outline color="info">
                      <CardTitle> <div className="section-header">
                  <h2>F.A.Q </h2>
                </div></CardTitle>
                      <CardText> 
                      <div>
              <section id="faq" class="wow fadeInUp">

              <div class="container">
             
                <div class="row justify-content-center">
                  <div class="col-lg-9">
                    <ul id="faq-list">

                      {
                        this.state.faq.map((f,index)=>{
                          return (
                          <li key={index}  >
                            <a data-toggle="collapse" id={index} onClick={()=>{this.onShowChild(index)}} class="collapsed acolur" href={"#faq"+index+1}>{f.title}   <i id={index+"_i"} class="fa fa-plus-circle"></i> </a>
                            <div id={"faq"+index+1} class="collapse" data-parent="#faq-list">
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
              </section>
               </div>
                      </CardText>
                      {/* <Button color="secondary"><a href="https://www.ece.org" style={{ color: "white" }} target="_blank">Click here for More information</a>
                      </Button> */}
                      <CardFooter/>
                  </Card>
              </div>
              <Box mt={10}></Box>
          </div>
      )
    }
}

export default More_Faqs;