import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component{
    state = {
        
        arrJobs: [
            {id: 'abc123', title: 'Developer', salary: '12$'},
            {id: 'abc124', title: 'PM', salary: '15$'},
            {id: 'abc125', title: 'Teacher', salary: '10$'}
        ],
        
    }

    addNewJobs = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs].filter((item)=> job.id !== item.id)
        })
    }
    
    render(){
        return(
            <>
                <AddComponent addNewJobs = {this.addNewJobs}/>

                <ChildComponent arrJobs = {this.state.arrJobs} deleteAJob={this.deleteAJob}/>
            </>
            
        )
            
    }
}

export default MyComponent;