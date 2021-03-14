import React from 'react';
import { Dropdown } from 'react-bootstrap';


class Home extends React.Component {
    render() {
        return (
            <div className='d-flex flex-direction-column align-item-center justify-content-center mt-4'>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/userlist">User</Dropdown.Item>
                        <Dropdown.Item href="/blog">Blog</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default Home;