import React, { Component } from 'react';
import Welcome from  '../src/welcome';
class home extends Component {
    state = { 
        name:"",
        redirect:false
     }

     changeName = (e) =>
     {
         const name=e.target.elements.username.value;
         console.log(name);
         
         this.setState({
             name:name,
             redirect:true
         })
     }
    render() { 
        return ( 
            
                <div>
                   {this.state.redirect ?
                   <Welcome name ={
                       this.state.name}/> :
                       <div>
                           <h1> Dollar Jar </h1>
                           <form  onSubmit={this.changeName}>
                            <input type="text" name="username" placeholder="name"/> <br/><br/>
                            <button type="submit">  Submit </button> </form>
                        </div>
                
                } 
                </div>
            
         );
    }
}
 
export default home;