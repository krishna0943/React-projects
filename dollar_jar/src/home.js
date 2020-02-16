import React, { Component } from 'react';
import {Link} from "react-router-dom";
const initialState={
  name:"",
  error:"",
}
class Home extends Component
 {
   state=initialState;
   changeName = (e) =>
   {
     this.setState({name:e.target.value})
   };

   validate()
       {
           let error ="";
           if(!this.state.name)
           {
               error="username must required";
           }
           if(error)
           {
               this.setState({error});
               return false;
           }
        
           return true;
       }
       onSubmit(e){
        const isValid = this.validate();
        if(isValid)
        {
            this.setState(initialState);
          
        }
      }
    render() { 
      return (
        <div>
          <h1> Dollar Jar </h1>
          <input type="text" onChange={this.changeName} placeholder="name" value={this.state.name}/> <br/><br/>
            <div> {this.state.error}</div>
          <Link to = {{ 
              pathname:"/user",
              name:this.state.name}}> 
          <button onClick={e=>this.onSubmit(e)}> submit</button>
          </Link> 
        </div>);
    }
  }
 
export default Home;