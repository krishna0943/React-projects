import React, { Component } from 'react';

class Users extends Component {


    render()
     { 
        return ( 
            <div>
            <h1> {this.props.name}</h1> 
            <button onClick={this.props.add}> + </button>  
            <p> charge:{this.props.charge}</p>
             <button onClick={this.props.sub}> - </button> 
            </div>
         );
    }
}
 
export default Users;