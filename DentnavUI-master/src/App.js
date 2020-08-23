import React from 'react';
import './App.css';
import Login from './Component/Forms/Login';
import { Route, Switch } from 'react-router';
import Dentpin from './Component/Services/dentpin/Dentpin';
import ECE from './Component/Services/ece_wes/ece';
import INBDE from './Component/Services/inbde/INBDE';
import ADAT from './Component/Services/adat/Adat';
import AdeaCaapid from './Component/Services/adea_caapid/AdeaCaapid';
import AdeaPass from './Component/Services/adea_pass/AdeaPass';
import Admission from './Component/Services/admission/Admission';
import BenchTestInterview from './Component/Services/bench_test_interview/BenchTestInterview';
import OtherServices from './Component/Services/other_services/OtherServices';
import Aegd from './Component/Programs/Aegd/Aegd';
import Certif_Programs from './Component/Programs/Certif_Programs/Certif_Programs';
import Dscd_Mscd from './Component/Programs/Dscd_Mscd/Dscd_Mscd';
import Externship from './Component/Programs/Externship/Externship';
import Gpr from './Component/Programs/Gpr/Gpr';
import Idp_dmd from './Component/Programs/Idp_dmd/Idp_dmd';
import Interview from './Component/Programs/Interview/Interview';
import Observership from './Component/Programs/Observership/Observership';
import Precertorship from './Component/Programs/Precertorship/Precertorship';
import B1_B2 from './Component/Visas/B1_B2/B1_B2';
import EAD from './Component/Visas/EAD/EAD';
import Green_card from './Component/Visas/Green_card/Green_card';
import J1_F1 from './Component/Visas/J1_F1/J1_F1';
import J2_F2 from './Component/Visas/J2_F2/J2_F2';
import More_Faqs from './Component/FAQ/More_Faqs';


// import BootstrapCrousel from './components/bootstrapCarousel/BootstrapCrousel';
// import Header from './Component/Header';
// import AboutUs from './Component/aboutus/AboutUs';
// import AddAgent from './verizon/AddAgent';
// import Gallery from './Component/Gallery/Gallery';
// import Footer from './Component/Footer/Footer';
// import FAQ from './Component/FAQ/FAQ';
// import ContactUs from './Component/ContactUs/ContactUs';
import Home from './Component/home/home';
import SignUp from './Component/Forms/SignUp';
import GuardedRoute from './Component/Authentication/GuardedRoute';
import AlertDialogSlide from './Component/react-material-model/AlertDialogSlide';
import PremiumPlan from './Component/premiumplans/PremiumPlan';
// import ls from 'local-storage';
import PaymentExample from './Payment/PayPal';
import Axios from 'axios';
import HOC from './Component/hoc/HOC';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
       protectedComp:{
        //  Dentpin:true,
        //  Ece:false,
        //  indbe:false,
        //  adat:false,
        //  adea_caapid:false,
        //  adea_pass:false,
        //  bench_test:false,
        //  admission:false,
        //  other_services:false,
        //  idp_dds:false,
        //  dscd_mscd:false,
        //  aegd:false,
        //  gpr:false,
        //  certificate_programs:false,
        //  preceptorship:false,
        //  observership:false,
        //  interview:false,
        //  extenship:false,
        //  b1_b2:false,
        //  j1_f1:false,
        //  ead:false,
        //  green_card:false,
        //  faqs:false
       }
    }
  }

  componentDidMount(){
    // Axios.get("http://localhost:8080/dentnav/protectedStatusFlag").then((res)=>{
    //   console.log("res in app",res);
    //      this.setState({
    //       protectedComp: res.data
    //      })
    //     })
  }
  render(){
    return(
      <div className="App">
      {/* <Route path="/" exact component={AlertDialogSlide}></Route> */}
                <Route path="/login" component={Login}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/premium-access" component={AlertDialogSlide}/>
                <Route path="/premium-plans" component={PremiumPlan}></Route>
                <Route path="/payment-page" component={PaymentExample}></Route>
                <HOC>
              <Route path="/" exact component={Home}></Route>
              <Switch>
                <GuardedRoute path='/services/dentpin' protected={this.state?.protectedComp.dentpin}  component={Dentpin}  />
                <GuardedRoute path="/services/ece-wes" protected={this.state?.protectedComp.ece} component={ECE}/>
                <GuardedRoute path="/services/indbe" protected={this.state?.protectedComp.indbe} component={INBDE}/>
                <GuardedRoute path="/services/adat" protected={this.state?.protectedComp.adat} component={ADAT}/>
                <GuardedRoute path="/services/adea_caapid" protected={this.state?.protectedComp.adea_caapid} component={AdeaCaapid}/>
                <GuardedRoute path="/services/adea_pass" protected={this.state?.protectedComp.adea_pass} component={AdeaPass}/>
                <GuardedRoute path="/services/bench_test" protected={this.state?.protectedComp.bench_test} component={BenchTestInterview}/>
                <GuardedRoute path="/services/admission" protected={this.state?.protectedComp.admission} component={Admission}/>
                <GuardedRoute path="/services/other_services" protected={this.state?.protectedComp.other_services} component={OtherServices}/>
      
                <GuardedRoute path="/programs/idp_dds" protected={this.state?.protectedComp.idp_dds} component={Idp_dmd}/>
                <GuardedRoute path="/programs/dscd_mscd" protected={this.state?.protectedComp.dscd_mscd} component={Dscd_Mscd}/>
                <GuardedRoute path="/programs/aegd" protected={this.state?.protectedComp.aegd} component={Aegd}/>
                <GuardedRoute path="/programs/gpr" protected={this.state?.protectedComp.gpr} component={Gpr}/>
                <GuardedRoute path="/programs/certificate_programs" protected={this.state?.protectedComp.certificate_programs} component={Certif_Programs}/>
                <GuardedRoute path="/programs/preceptorship" protected={this.state?.protectedComp.preceptorship} component={Precertorship}/>
                <GuardedRoute path="/programs/observership" protected={this.state?.protectedComp.observership} component={Observership}/>
                <GuardedRoute path="/programs/interview" protected={this.state?.protectedComp.interview} component={Interview}/>
                <GuardedRoute path="/programs/extenship" protected={this.state?.protectedComp.extenship} component={Externship}/>
      
                <GuardedRoute path="/visa/b1_b2" protected={this.state?.protectedComp.b1_b2} component={B1_B2}/>
                <GuardedRoute path="/visa/j1_f1" protected={this.state?.protectedComp.j1_f1} component={J1_F1}/>
                <GuardedRoute path="/visa/j2_f2" protected={this.state?.protectedComp.j1_f1} component={J2_F2}/>
                <GuardedRoute path="/visa/ead" protected={this.state?.protectedComp.ead} component={EAD}/>
                <GuardedRoute path="/visa/green_card" protected={this.state?.protectedComp.green_card} component={Green_card}/>
                <GuardedRoute path="/more/faqs" protected={this.state?.protectedComp.faqs} component={More_Faqs}/>
              </Switch>
              </HOC>
              </div>
    )
  }
}

export default App;


// function App() {

//   const[isAutheticated, setisAutheticated] = useState([true,false]);

//   useEffect(() => {
//       // let auth  = ls.get('userAuthenticated');
//       console.log("auth 1",isAutheticated[0]);
//       console.log("auth 2",isAutheticated[1]);
//       // setisAutheticated(auth);
//   },isAutheticated);

//   return (
    
//     <div className="App">
//           <Aux>
//         <Route path="/" exact component={Home}></Route>
//         <Switch>
//           <Route path="/login" component={Login}/>
//           <Route path="/sign-up" component={SignUp}/>
//           <GuardedRoute path='/services/dentpin' protected={isAutheticated[0]}  component={Dentpin}  />
//           {/* <Route path="/services/dentpin" component={Dentpin}/> */}
//           <GuardedRoute path="/services/ece-wes" protected={isAutheticated[1]} component={ECE} compName="ECE" />
//           <GuardedRoute path="/services/ece-wes" protected={false} component={ECE}/>
//           <GuardedRoute path="/services/indbe" protected={false} component={INBDE}/>
//           <GuardedRoute path="/services/adat" protected={false} component={ADAT}/>
//           <GuardedRoute path="/services/adea_caapid" protected={false} component={AdeaCaapid}/>
//           <GuardedRoute path="/services/adea_pass" protected={false} component={AdeaPass}/>
//           <GuardedRoute path="/services/bench_test" protected={false} component={BenchTestInterview}/>
//           <GuardedRoute path="/services/admission" protected={false} component={Admission}/>
//           <GuardedRoute path="/services/other_services" protected={false} component={OtherServices}/>

//           <GuardedRoute path="/programs/idp_dds" protected={false} component={Idp_dmd}/>
//           <GuardedRoute path="/programs/dscd_mscd" protected={false} component={Dscd_Mscd}/>
//           <GuardedRoute path="/programs/aegd" protected={false} component={Aegd}/>
//           <GuardedRoute path="/programs/gpr" protected={false} component={Gpr}/>
//           <GuardedRoute path="/programs/certificate_programs" protected={false} component={Certif_Programs}/>
//           <GuardedRoute path="/programs/preceptorship" protected={false} component={Precertorship}/>
//           <GuardedRoute path="/programs/observership" protected={false} component={Observership}/>
//           <GuardedRoute path="/programs/interview" protected={false} component={Interview}/>
//           <GuardedRoute path="/programs/extenship" protected={false} component={Externship}/>

//           <GuardedRoute path="/visa/b1_b2" protected={false} component={B1_B2}/>
//           <GuardedRoute path="/visa/j1_f1" protected={false} component={J1_F1}/>
//           <GuardedRoute path="/visa/j2_f2" protected={false} component={J2_F2}/>
//           <GuardedRoute path="/visa/ead" protected={false} component={EAD}/>
//           <GuardedRoute path="/visa/green_card" protected={false} component={Green_card}/>
//           <GuardedRoute path="/more/faqs" protected={false} component={More_Faqs}/>
//         </Switch>
//         </Aux>
//         </div>
//   );
// }
