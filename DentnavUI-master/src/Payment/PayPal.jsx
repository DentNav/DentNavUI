import React, { Component } from 'react';
import PayPayBtn from './PayPalBtn';

export default class PaymentExample extends Component {
  constructor(props){
    super(props);
    console.log("in payment page",props);
  }

  componentDidMount(){
   window.scroll(0,0);
   if((this.props.location?.planprice == "") || this.props.location?.planprice == null){
     this.props.history.push({pathname:"/"});
   }
  }

  paymentHandler = (details, data) => {
      /** Here you can call your backend API
        endpoint and update the database */
      console.log(details, data);
    }

  onError(err){
   console.log(err)
  }
    render() {
        return ( 
            <div style={{marginTop:"100px"}}>
                <div>Online Payment</div>
                <PayPayBtn
                    amount = {this.props.location.planprice}
                    currency = {'USD'}
                    onSuccess={this.paymentHandler}
                    onError={this.onError}/>
            </div>
        )
    }
}