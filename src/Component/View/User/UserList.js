import React, { Component } from 'react';
import { Card, Table,Navbar,Nav,Button } from 'react-bootstrap';

import axios from 'axios';

class SearchName extends Component {

    render() {
        return (
            <div className='search'>
                <input type="text" className="form-control" onChange={(event) => this.props.searchinfo(event.target.value)} placeholder="Search for names.." ></input>
            </div>
        )
    }
}



class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            searchname: ''
        }
        this.searchItem = this.searchItem.bind(this)

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

    searchItem(text) {
        this.setState({
            searchname: text
        })
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
                <Nav.Link href="/blog">Blog</Nav.Link>
                
              </Nav>
             
               
                <Button variant="outline-success" href="/login">Logout</Button>
            
            </Navbar.Collapse>
          </Navbar>

                <div className='container'>


                    <div className='row d-flex justify-content-between my-2'>
                        <h1>userList</h1>
                        <SearchName searchinfo={this.searchItem} />
                    </div>

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.userList.filter(name => {
                                return name.name.toLowerCase().includes(this.state.searchname.toLowerCase()) ||
                                    name.username.toLowerCase().includes(this.state.searchname.toLowerCase());
                            }).map((item, index) =>
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
export default UserList;