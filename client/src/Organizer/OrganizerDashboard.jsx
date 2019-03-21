import React, { Component } from 'react';
import OrganizeElection from './OragnizeElection';

class OrganizerDashboard extends Component{

    constructor(props){
        super(props)
        this.state = {
            isCreate : false,
           // OrganizerData : this.props.OragnizerData
        }
    }

    logoutHandler = () => {
        this.props.loginUpdate(false)
    }

    createHandler = () => {
        this.setState({
            isCreate : !this.state.isCreate
        })
        console.log(this.state.isCreate)
    }

 

    render(){
        console.log("OrganizerDashboard")
        return (
            <div>
                <h1>Hi this is Organizer Dashboard</h1>
                <button onClick={this.logoutHandler}>Logout</button>
                <button onClick={this.createHandler}>Create Election</button>
                {this.state.isCreate 
                    && <OrganizeElection 
                            createHandler={this.createHandler} 
                            contract= {this.props.userObject.contract}
                            OrganizerData = {this.props.OrganizerData}
                        />
                }     
            </div>
        )
    }

    
}

export default OrganizerDashboard