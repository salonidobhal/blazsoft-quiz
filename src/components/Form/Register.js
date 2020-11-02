import React, { Component } from 'react'
import { Control, LocalForm, Errors } from 'react-redux-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Label, Col, Row } from 'reactstrap';
import './form.css';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const equalLength = (len) => (val) => val && (val.length === len)
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = (val) => /^[A-Za-z]\w{7,15}$/i.test(val);

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        axios.post('http://localhost:8080/login-service/create')
                .then(res => {
                        console.log("SignUp Successful");
                        console.log(values);
                        
                })
                .catch(err => {
                    console.log(err);
                });
    }

    render() {
        return (
            <div className="App">
            <div className="form-container">
                <h2 className="mb-4 text-center">Register user</h2>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <h6><b>Personal Details</b> </h6> <hr/>
                Student Name <br /><br />
                    <Row className="form-group">
                        <Col className="ml-2" md={{ size: 1.5 }}>
                            <Control.select model=".suffix" name="suffix"
                                className="form-control">
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Ms</option>
                            </Control.select>
                        </Col>
                        <Col xm={12} md={{ size: 3 }}>

                            <Control.text model=".firstname" id="firstname" name="firstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />

                        </Col>

                        <Col xm={12} md={{ size: 3 }}>

                            <Control.text model=".middlename" id="middlename" name="middlename"
                                placeholder="Middle Name (optional)"
                                className="form-control"
                            />

                        </Col>
                        <Col xm={12} md={{ size: 3 }}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />

                        </Col>
                    </Row>

                    <Row className="form-group" >
                        <Label for="gender" xm={12} md={2}>Gender</Label>
                        <Col xm={12} md={3}>
                            <div className="mx-auto">
                                <Label>
                                    <Control.radio
                                        name="gender"
                                        model=".gender"
                                        value="Male"
                                    />
                                        Male
                                    </Label>
                            </div>
                        </Col>
                        <Col xm={12} md={3}>
                            <div className="mx-auto">
                                <Label>
                                    <Control.radio
                                        name="gender"
                                        model=".gender"
                                        value="Female"
                                    />
                                        Female
                                    </Label>
                            </div>
                        </Col>

                        <Col xm={12} md={3}>
                            <div className="mx-auto">
                                <Label>
                                    <Control.radio
                                        name="gender"
                                        model=".gender"
                                        value="Other"
                                    />
                                        Other
                                    </Label>
                            </div>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="dob" xm={12} md={2}>Date of Birth</Label>
                        <Col xm={12} md={10}>
                            <Control.text
                                type="date"
                                model=".dob"
                                id="dob"
                                name="dob"
                                min="1990-01-01"
                                max="2018-01-01" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="mobile" xm={12} md={2}>Mobile Number</Label>
                        <Col xm={12} md={4}>
                            <Control.text model=".mobile" id="mobile" name="mobile"
                                placeholder="Enter your 10 digit mobile number"
                                className="form-control"
                                validators={{
                                    required, equalLength: equalLength(10), isNumber
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".mobile"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    equalLength: 'Must be a 10 digit number',
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </Col>
                        <Label htmlFor="emergency-mobile" xm={12} md={3}>Emergency Contact</Label>
                        <Col xm={12} md={3}>
                            <Control.text model=".emergency-mobile" id="emergency-mobile" name="emergency-mobile"
                                placeholder="Another mobile number"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(10), maxLength: maxLength(10), isNumber
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".emergency-mobile"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    minLength: 'Must be greater than 10 numbers',
                                    maxLength: 'Must be 10 digits',
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" xm={12} md={2}>Email</Label>
                        <Col xm={12} md={10}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    validEmail: 'Invalid Email Address'
                                }}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group ">
                        <Label htmlFor="father-firstname" xm={12} md={2}>Father's Name</Label>

                        <Col xm={12} md={3}>
                            <Control.text model=".father-firstname" id="father-firstname" name="father-firstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".father-firstname"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                        <Col xm={12} md={3}>
                            <Control.text model=".father-middlename" id="father-middlename" name="father-middlename"
                                placeholder="Middle Name"
                                className="form-control"
                            />
                        </Col>
                        <Col xm={12} md={3}>
                            <Control.text model=".father-lastname" id="father-lastname" name="father-lastname"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".father-lastname"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="mfirstname" xm={12} md={2}>Mother's Name</Label>
                        <Col xm={12} md={5}>
                            <Control.text model=".mfirstname" id="mfirstname" name="mfirstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".mfirstname"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                        <Col xm={12} md={5}>
                            <Control.text model=".mlastname" id="mlastname" name="mlastname"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".mlastname"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group mb-3">
                        <Label htmlFor="kids" xm={12} md={2}>Number of Kids</Label>
                        <Col xm={12} md={10}>
                            <Control.text model=".kids" id="kids" name="kids"
                                type="number"
                                placeholder=""
                                min="0"
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".kids"
                                show="touched"
                                messages={{
                                    required: '*Required\n'
                                }}
                            />
                        </Col>
                    </Row>
                    <h6><b>Account Details</b> </h6> <hr/>
                    <Row className="form-group">
                        <Label htmlFor="username" xm={12} md={2}>Username</Label>
                        <Col xm={12} md={9}>
                            <Control.text model=".username" id="username" name="username"
                                placeholder="Create a Username"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".username"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="password" xm={12} md={2}>Password</Label>
                        <Col xm={12} md={9}>
                            <Control.text model=".password" id="password" name="password"
                                placeholder="Create a Password"
                                type="password"
                                className="form-control"
                                validators={{
                                    required, validPassword
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".password"
                                show="touched"
                                messages={{
                                    required: '*Required\n',
                                    validPassword: "Password should be 7-16 characters long \n Must contain only characters, numeric digits underscore \n First character must be a letter"
                                }}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Col xm={{ offset: 4, size: 12 }} md={{ offset: 4 }}>
                            <ButtonWrap type="submit">
                                Register
                                    </ButtonWrap>
                        </Col>
                    </Row>
                    <div className="link">
                        <Link to="/signIn" > Already have an account? Sign In.</Link>
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