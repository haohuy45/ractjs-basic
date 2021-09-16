import React, { Component } from 'react';


class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: Number(event.target.value)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.title || !this.state.salary){
            alert('Missing required params');
            return;
        }
        console.log(this.state)
        this.props.addNewJobs({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary

        })

        this.setState({
            title: '',
            salary:''
        })


    }
    render() { 
        return (
        <>
            <form>
                    <label>Job Title</label><br/>
                    <input value={this.state.value} type="text" onChange={(event) => this.handleChangeTitleJob(event)}></input><br/>
                    <label>Salary</label><br/>
                    <input value={this.state.value} type="text" onChange={(event)=> this.handleChangeSalary(event)}></input><br/>
                    <input type="submit" value="submit" onClick={(event) => this.handleSubmit(event)}></input>
                </form>
        </>)
    }
}
 
export default AddComponent;