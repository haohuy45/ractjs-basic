import React, { Component } from 'react';

class ChildComponent extends Component {
    state = {
        isShow: false
    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    handleDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { isShow } = this.state;
        return (

            <>
                { isShow === true ?
                <div className="jobs-list" >
                    {
                        arrJobs.map((job) =>
                        (
                            <div key={job.id}>
                                {job.title} - {job.salary} <></> <span onClick={() => this.handleDelete(job)}>x</span>
                            </div>
                        )
                        )
                    }
                    <button onClick={()=>this.handleShowHide()}>Hide</button>

                </div>
                :
                <div>
                    <button onClick={()=>this.handleShowHide()}>Show</button>


                </div>
                }
            </>

        )
    }
}

export default ChildComponent;