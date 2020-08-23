import React,{Component} from 'react';
import AgentList from './AgentList';


class AddAgent extends Component{
    constructor(props){
        super();
        this.state={
            Name:"",
            agents: [{
                Name:"Aravindh"
            },{
                Name:"Venkatesh"
            },{
                Name:"Aswin"
            },{
                Name:"Cherma"
            },{
                Name:"Karthik"
            },{
                Name:"Balaji"
            }
        ]
        }
    }

    onInputChange(event){
        this.setState({
            Name:event.target.value
        })
       // console.log("value",this.state.Name)
    }

    onAddAgent(event){
      event.preventDefault();
      var value = this.state.Name;
      var joined = this.state.agents.concat({Name:value});
      this.setState({
          agents:joined,
          Name:""
      })
      console.log("state",this.state)
    }
    render(){
        return(
            <div style={{marginTop:"20px"}} className="container">
                <form style={{width: "50%",
        marginLeft : "25%"}}>
                    <div className="row">
                        <div className="col-sm-8">
                            <input type="text" align="center" className="form-control" name="Agent_Id" value={this.state.Name} onChange={(event)=>{this.onInputChange(event)}} placeholder="Enter the Agent Id"/>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-primary" onClick={(event)=>this.onAddAgent(event)}>Add Agent</button>
                        </div>
                    </div>
                </form>
                <div class="newDiv" style={{backgroundColor:"lightgrey"}}>
                    <AgentList agentList={this.state.agents}/>
                </div>
            </div>
        )
    }
}

export default AddAgent