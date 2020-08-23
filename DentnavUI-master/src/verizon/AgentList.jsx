import React, { Component } from 'react';
import './AddAgent.css';

class AgentList extends Component {
    constructor(props) {
        super();
        this.state = {
            list: props.agentList
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({list: newProps.agentList});
    }

    modelOnclicked(agent) {
        console.log("agent", agent.Name);
    }

    searchEvent = (event) => {
        if(event.target.value){
            const newArray = [];
            var searchValue = event.target.value;
            this.state.list.filter(agent =>{
               if(agent.Name.toLowerCase().includes(searchValue.toLowerCase())){
                 newArray.push(agent);
               }
            })
            this.setState({
               list: newArray
            })
        }
        else{
            this.setState({
                list: this.props.agentList
            })
        }
    }


    render() {
        return (
            <div>
                <div style={{marginTop:"10px",textAlign:"left"}}>
            <p>Total WhiteListed Agents : {this.props.agentList.length}</p> 
        </div>
        <div class="col-sm-4">
            <input  type="text" class="form-control" placeholder="Enter the text to Search" onChange={(event)=>{this.searchEvent(event)}}/>
        </div>
    <div style={{ marginTop: "20px",height:"40vh",overflow:"scroll" }} className="container">
        {
            this.state.list.length ?
                <div>
                    {
                        this.state.list.map(agent => {
                            return <div onClick={() => { this.modelOnclicked(agent) }}>
                                <div class="modalcontent">
                                    <div class="modal-dialog modal-sm" role="document">
                                        <div className="row">
                                                <p>ID: {agent.Name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                :
                <h1>There is no Agent Available</h1>
        }
    </div></div>
        )
    }
}

export default AgentList