import React from 'react';
import './premiumplan.css';
import { withRouter } from 'react-router';
// import './materialdesign.css';

class PremiumPlan extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scroll(0,0);
    }

    onSelectPlan(planPrice){
        if(planPrice == "free"){
            this.props.history.push({pathname:"/"});
        }
        else{
            this.props.history.push({pathname:"/payment-page" ,planprice:planPrice});
        }
    }

    render(){
        return(
            <div className="container">
      <h5 className="text-center pricing-table-subtitle">PRICING PLAN</h5>
      <h1 className="text-center pricing-table-title">Pricing Table</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card pricing-card pricing-plan-basic">
            <div className="card-body">
              <i className="mdi mdi-cube-outline pricing-plan-icon"></i>
              <p className="pricing-plan-title">Basic</p>
              <h3 className="pricing-plan-cost ml-auto">FREE</h3>
              <ul className="pricing-plan-features">
                <li>Unlimited conferences</li>
                <li>100 participants max</li>
                <li>Custom Hold Music</li>
                <li>10 participants max</li>
              </ul>
              <a onClick={()=>{this.onSelectPlan("free")}} className="btn pricing-plan-purchase-btn">Free</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card pricing-card pricing-card-highlighted  pricing-plan-pro">
            <div className="card-body">
                <i className="mdi mdi-trophy pricing-plan-icon"></i>
              <p className="pricing-plan-title">Pro</p>
              <h3 className="pricing-plan-cost ml-auto">$49</h3>
              <ul className="pricing-plan-features">
                <li>Unlimited conferences</li>
                <li>100 participants max</li>
                <li>Custom Hold Music</li>
                <li>10 participants max</li>
              </ul>
              <a onClick={()=>{this.onSelectPlan("1")}} className="btn pricing-plan-purchase-btn">Purchase</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card pricing-card pricing-plan-enterprise">
            <div className="card-body">
              <i className="mdi mdi-wallet-giftcard pricing-plan-icon"></i>
              <p className="pricing-plan-title">Enterprise</p>
              <h3 className="pricing-plan-cost ml-auto">$69</h3>
              <ul className="pricing-plan-features">
                <li>Unlimited conferences</li>
                <li>100 participants max</li>
                <li>Custom Hold Music</li>
                <li>10 participants max</li>
              </ul>
              <a onClick={()=>{this.onSelectPlan("69")}} className="btn pricing-plan-purchase-btn">Purchase</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
}

export default withRouter(PremiumPlan);