import React, { Component } from 'react';

class welcome extends Component {
    
    render() { 
        return ( 
        <h1> hey ! { this.props.name}</h1>
         );
    }
}
 
export default welcome;