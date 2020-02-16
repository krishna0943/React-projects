import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Home extends Component
 {
   state={
    name:"",
    error:"",
   }
   changeName = (e) =>
   {
     this.setState({name:e.target.value})
   };

    render() { 
      return (
        <div>
          <h1> Dollar Jar </h1>
          <input type="text" onChange={this.changeName} placeholder="name" value={this.state.name}/> <br/><br/>
            <div> {this.state.error}</div>
          <Link to = {{ 
              pathname:"/user",
              name:this.state.name}}> 
          <button disabled={!this.state.name.trim()}> submit</button>
          </Link> 
        </div>);
    }
  }
 
export default Home;