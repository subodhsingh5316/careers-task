import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Card } from 'react-bootstrap';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        userList: []
    }
  }

  recivedata = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res)
            this.setState({
                userList: res.data
            })
        })
  }
  componentDidMount() {
  
    this.recivedata();
  }

handleSubmit=(e)=>{
      e.preventDefault();
    if(!e.target.email.value){
      alert('Enter email id!')
    }
    if(!e.target.password.value){
      alert('Enter password id!')
    }
    const data = this.state.userList.filter(item=> item.email === e.target.email.value && item.username === e.target.password.value)
    if(data.length!==0)
    {
      this.props.history.push('/home')
    }
  else{
    alert('Please enter valid email or password!')
  }
}

  render(){
  return (
    <div style={{marginTop:100}}>
      <Card style={{ width: '22rem', height: '22rem', margin: 'auto' }}>
        <Card.Body className='card-body'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control  name='email' type="email" placeholder="Enter email" 
              />
              <Form.Text className="text-muted">
             
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control name='password' type="password" placeholder="Enter username"
               />
              
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Submit
         </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
  }
}

export default Login;