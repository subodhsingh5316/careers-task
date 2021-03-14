import React from 'react';
import axios from 'axios';
import { Card, Table,Navbar,Nav,Button } from 'react-bootstrap';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            searchname: ''
        }
    }
    reciveddata = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.location.pathname.slice(6))
            .then((res) => {
                console.log(res)
                this.setState({
                    post: res.data
                })
            })
    }
    componentDidMount() {
        this.reciveddata()
    }
    render() {
        return (
            <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Subodh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/userlist">user</Nav.Link>
                
              </Nav>
             
               
                <Button variant="outline-success" href="/login">Logout</Button>
            
            </Navbar.Collapse>
          </Navbar>
                <div className='container'>
                    <Button className='text-end mt-4' onClick={() => this.props.history.goBack()}>Back</Button>
                    <div className='card mt-4'>

                        <div>
                            <h3 className='my-4 mx-8 text-center'>{this.state.post.title}</h3>
                            <p className='p-4 text-left'>{this.state.post.body}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default SinglePost;