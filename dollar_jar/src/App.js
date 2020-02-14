import React ,{Component} from 'react';
import './App.css';
import Users from '../src/users'; 
class App extends Component
{
  state = {
    newUser:
    {
      Uname:'',
      charge:0,
      id:0
    },

    users:[],
    total:0,
    extraCharge:10

  }
  
  addUser=(e)=>
  {
    this.setState({
      newUser:{
        Uname:e.target.value,
        charge:0
      }
    })
  }

  onSubmit=()=>{
    this.state.users.push(this.state.newUser);
    let userlog = this.state.users;
    this.setState({
      users:userlog
    })
  }

  handleIncrement(userIndex)
  {
 
    const temp = {...this.state.users[userIndex]};
    temp.charge+=this.state.extraCharge;
    this.increment(this.state.extraCharge);
    const users=[...this.state.users];
    users[userIndex]= temp;
    this.setState({users})
  }

  increment(c)
  {
    let x = this.state.total+c;
    this.setState({
      total:x
    })
  }

  handleDecrement(userIndex)
  {
  
    const temp = {...this.state.users[userIndex]};
    temp.charge-=this.state.extraCharge;
    this.decrement(this.state.extraCharge);
    
    const users=[...this.state.users];
    users[userIndex]= temp;
    this.setState({users})
  }
  decrement(c)
  {
    let x = this.state.total-c;
    this.setState({
      total:x
    })
  }
  
  render() 
  {
    const {name} = this.props.location;
    return (
      <div>
            <h1> hey {name}</h1>
            
          <h2> { this.state.total  }</h2>
            <form>
           <input type="text"  onChange={e => this.addUser(e)}/>
            <input type="reset" value="Add user" onClick={this.onSubmit}/>
        </form>
      
        {this.state.users.map((user,index) => {
         
          return <Users name={user.Uname} charge = {user.charge} add={()=>this.handleIncrement(index)} sub ={ ()=>this.handleDecrement(index)}/>
        })}
        </div>
    );
  }
}


export default App;
