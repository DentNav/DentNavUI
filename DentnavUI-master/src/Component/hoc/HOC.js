import React from 'react';
import Header from '../Header';
import Footer from '../Footer/Footer';

function HOC(props){
    // const [showHeader,setShowHeader] = useState(true);
    // const changeHState = () =>{
    //     setShowHeader(false);
    // }
    return(
      <div>
          {/* {showHeader ? <SudoHeader click={changeHState}/> : null} style={{height:"500px",overflowY:"scroll"}}*/}
         <Header/>
          <div>{props.children}</div>
          <Footer/>
      </div>
    )
}

export default HOC;
