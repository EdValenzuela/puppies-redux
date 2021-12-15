import React from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.css';

export const NavigationBar = ({ history, user }) => {
    console.log({user})
    return(
        <Navbar className="navigation__container" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => history.push('/')}>ReactPuppies</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => history.push('/login')}>{
                        user.authUser ? user.authUser.fullName : 'Login'
                    }</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = ({user}) => ({
    user
})


export default withRouter(connect(mapStateToProps, null)(NavigationBar));