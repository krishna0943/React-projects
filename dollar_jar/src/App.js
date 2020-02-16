import React, { Component } from 'react';
import './App.css';
import User from '../src/user';
class App extends Component {
  state = {
    newUser:
    {
      Uname: '',
      id: 0
    },

    users: [],
    total: 0,
    nameError: '',
    extraCharge: 10
  }

  addUser(e) {
    this.setState({
      newUser: {
        Uname: e.target.value,
        charge: 0
      }
    })
  }


  changeCharge(e) {
    this.setState({
      extraCharge: e.target.value,
    })
  }

  validate() {
    let nameError = "";
    if (!this.state.newUser.Uname) {
      nameError = "username is empty";
    }
    if (nameError) {
      this.setState({
        nameError
      });
      return false;
    }
    return true;
  }

  onSubmit(e) {
    const isValid = this.validate();
    if (isValid) {
      this.state.users.push(this.state.newUser);
      let userlog = this.state.users;
      this.setState({
        users: userlog
      })
    }
  }

  handleIncrement(userIndex) {

    const temp = { ...this.state.users[userIndex] };
    temp.charge += parseInt(this.state.extraCharge);
    this.increment(parseInt(this.state.extraCharge));
    const users = [...this.state.users];
    users[userIndex] = temp;
    this.setState({ users })
  }

  increment(c) {
    let x = this.state.total + c;
    this.setState({
      total: x
    })
  }

  handleDecrement(userIndex) {

    const temp = { ...this.state.users[userIndex] };
    temp.charge -= parseInt(this.state.extraCharge);
    this.decrement(parseInt(this.state.extraCharge));
    const users = [...this.state.users];
    users[userIndex] = temp;
    this.setState({ users })
  }

  decrement(c) {
    let x = this.state.total - c;
    this.setState({
      total: x
    })
  }

  render() {
    const {name} = this.props.location;
    return (
      <div>
        <h1> hey {name} </h1>

        <h2> Total: {this.state.total}</h2>

        <input type="text" onChange={e => this.changeCharge(e)} /> <br /> <br />

        <input type="text" onChange={e => this.addUser(e)} value={this.state.Uname} />
    <div> { this.state.nameError}</div>
        <input type="reset" value="Add user" onClick={e => this.onSubmit(e)} />


        {this.state.users.map((user, index) => {

          return <User name={user.Uname} charge={user.charge} add={() => this.handleIncrement(index)} sub={() => this.handleDecrement(index)} />
        })}
      </div>
    );
  }
}


export default App;



