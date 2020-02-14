import React, { Component } from 'react';

import {Link} from "react-router-dom";
class Home extends Component
 {
   state={
     name:""
   }
   changeName = (e) =>
   {
     this.setState(
       {
         name:e.target.value
       }
     )
   };
    render() { 
        return (
            <div>
                 <h1> Dollar Jar </h1>

                  <input type="text" onChange={(e)=> this.changeName(e)} placeholder="name"/> <br/><br/>
        
                  <Link to = {{ 
                      pathname:"/users",
                      name:this.state.name
                  }}> 
                  <button> submit</button>
                  </Link>
                
              </div>
         );
    }
  }
 
export default Home;