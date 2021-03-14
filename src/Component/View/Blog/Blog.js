import React, { Component } from 'react'
import axios from 'axios'
import { Card, Table,Navbar,Nav,Button } from 'react-bootstrap';


class SearchName extends Component {

    render() {
        return (
            <div className='search mr-2'>
                <input type="text" className="form-control mr-2" onChange={(event) => this.props.searchinfo(event.target.value)} placeholder="Search for names.." ></input>
            </div>
        )
    }
}
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            searchname: ''
        }
    }

    searchItem=(text)=> {
        this.setState({
            searchname: text
        })
    }
    reciveddata = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
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
             
              <SearchName searchinfo={this.searchItem} />
                <Button variant="outline-success" href="/login">Logout</Button>
            
            </Navbar.Collapse>
          </Navbar>

                <div className='container'>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Sl No.</th>
                                <th>Title</th>
                                <th>Description</th>

                            </tr>
                        </thead>
                        <tbody>

                            {this.state.post.filter(name => {
                                return name.title.toLowerCase().includes(this.state.searchname.toLowerCase()) ||
                                    name.body.toLowerCase().includes(this.state.searchname.toLowerCase());
                            }).map((item, index) =>
                                <tr key={index} className='cursor-pointer' onClick={() => this.props.history.push('/blog/' + item.id)}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
export default Post;