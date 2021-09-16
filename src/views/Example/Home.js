import React, { Component } from 'react';
import {withRouter} from 'react-router' // redirect : chuyen huong trang 
import Color from '../HOC/color';

class Home extends React.Component {
    componentDidMount(){
        // setTimeout(()=>{
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    render() { 
        return <div>Hello</div>;
    }
}
 
export default Color(Home);