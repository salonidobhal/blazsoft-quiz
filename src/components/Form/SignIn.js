import React, { Component } from 'react'
import { Control, LocalForm, Errors } from 'react-redux-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Label, Col, Row } from 'reactstrap';


export default class SignIn extends Component {
    render() {
        return (
            <div className="App">
            <div className="form-container">
                <h2 className="mb-4 text-center">Login user</h2>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                        <Label htmlFor="username" xm={12} md={2}>Username</Label>
                        <Col xm={12} md={9}>
                            <Control.text model=".username" id="username" name="username"
                                placeholder="Enter Username"
                                className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="password" xm={12} md={2}>Password</Label>
                        <Col xm={12} md={9}>
                            <Control.text model=".password" id="password" name="password"
                                placeholder="Enter Password"
                                type="password"
                                className="form-control"
                            />
                            
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Col xm={{ offset: 4, size: 12 }} md={{ offset: 4 }}>
                            <ButtonWrap type="submit">
                                Login
                                    </ButtonWrap>
                        </Col>
                    </Row>
                    <div className="link">
                        <Link to="/signIn" > Do not have an account? Register Here.</Link>
                    </div>
                </LocalForm>
            </div>
            </div>
        )
    }
}

const ButtonWrap = styled.button`
background-color: #37bade;
border: none;
border-radius : 30px;
padding: 1rem;
font-size : 1.2rem;
font-weight: 700;
color: white;
width: 25vw;
text-transform : uppercase;
align-self: center;
margin: 1rem auto 1rem auto;
transition: all .5s ease-in-out;
&:hover{
    transform:scale(1.03);
}
`;
