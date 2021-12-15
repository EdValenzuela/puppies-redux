import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import userActions from '../../actions/user'
import { Form, Button, Alert } from 'react-bootstrap';
import './login.css';
import { withRouter } from 'react-router-dom'

const Login = ({user, login, history}) => {
    useEffect(() => {
        if(user.authUser){
            history.push('/')
        }
    }, [user])

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="login__container">
            <div className="col-sm-12 col-md-6 login__card-form">
                    <h3>Bienvenido a ReduxPuppies!</h3>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                onChange={ (e)=> setUsername(e.target.value) }
                                value={userName} 
                                type="text" 
                                placeholder="Username" 
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                onChange={ (e)=> setPassword(e.target.value) }
                                value={password} 
                                type="password" 
                                placeholder="Password" 
                            />
                        </Form.Group>
                        <Button onClick={() => login(userName, password)} variant="primary">
                            Submit
                        </Button>
                        {
                            user.error && (
                                <Alert variant='danger' className='mt-4'>
                                    {user.error}
                                </Alert>
                            )
                        }

                    </Form>
            </div>
        </div>
    )
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = () => ({
    ...userActions
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Login));