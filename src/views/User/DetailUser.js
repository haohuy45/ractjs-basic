import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router'; //lấy các tham số 

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })

            console.log(res)
        }

    }
    handleBack = () =>{
        this.props.history.push(`/user/`)
    }

    render() { 
        let {user} = this.state;
        let isEmpty = Object.keys(user).length === 0
        return <>
            {isEmpty === false && 
                <>
                    <div>User's name: {user.first_name} - {user.last_name}</div>
                    <div>User's email: {user.email}</div>
                    <div>
                        <img src={user.avatar}/>
                    </div>
                    <button onClick={() => this.handleBack()}>Back</button>
                </>
            }
        </>
    }
}
 
export default withRouter(DetailUser);