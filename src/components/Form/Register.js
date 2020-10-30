import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Label, Col, Button, Row } from 'reactstrap';
import './form.css';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const equalLength = (len) => (val) => val && (val.length === len)
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class Register extends Component {
    render() {
        return (
            <div className="form-container">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <h6><b>Personal Details</b> </h6> <hr color="white"></hr>
                Student Name <br /><br />
                    <Row className="form-group">
                        <Col className="ml-3" md={{ size: 1.5 }}>
                            <Control.select model=".suffix" name="suffix"
                                className="form-control">
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Ms</option>
                            </Control.select>
                        </Col>
                        <Col md={{ size: 3 }}>

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
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />

                        </Col>

                        <Col md={{ size: 3 }}>

                            <Control.text model=".middlename" id="middlename" name="middlename"
                                placeholder="Middle Name (optional)"
                                className="form-control"
                            />

                        </Col>
                        <Col md={{ size: 3 }}>
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
                                    required: '*Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />

                        </Col>
                    </Row>

                    <Row className="form-group" >
                        <Label for="gender" md={2}>Gender</Label>
                        <Col md={2}>
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
                        <Col md={2}>
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

                        <Col md={2}>
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
                 <Label htmlFor="dob" md={2}>Date of Birth</Label> 
                    <Col md={10}>
                    <Control.text type="date" model=".dob" id="dob" name="dob"
                    max="01-01-2010"/>
                    </Col>
                 </Row>
                    <Row className="form-group">
                                <Label htmlFor="mobile"  md = {2}>Mobile Number</Label>
                                <Col md = {4}>
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
                                        required: 'Required',
                                        equalLength: 'Must be a 10 digit number',
                                        isNumber: 'Must be a number'
                                    }}
                                />                           
                        </Col>                          
                                <Label htmlFor="emergency-mobile"  md = {2}>Emergency Contact</Label>
                               <Col md = {4}>
                                <Control.text model=".emergency-mobile" id="emergency-mobile" name="emergency-mobile"
                                    placeholder=""
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
                                        required: 'Required',
                                        minLength: 'Must be greater than 10 numbers',
                                        maxLength: 'Must be 10 digits',
                                        isNumber: 'Must be a number'
                                    }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
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
                                    required: 'Required',
                                    validEmail: 'Invalid Email Address'
                                }}
                            />
                        </Col>
                    </Row>
                    
                        <Row className="form-group ">
                        <Label htmlFor="father-firstname" md={2}>Father's Name</Label>

                        <Col md={3}>
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
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                        <Col md={3}>
                            <Control.text model=".father-middlename" id="father-middlename" name="father-middlename"
                                placeholder="Middle Name"
                                className="form-control"
                            />
                        </Col>
                        <Col md={3}>
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
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="mfirstname" md={2}>Mother's Name</Label>
                        <Col md={5}>
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
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                        <Col md={5}>
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
                    <Row className="form-group">
                        <Label htmlFor="kids" md={2}>Number of Kids</Label>
                        <Col md={10}>
                            <Control.text model=".kids" id="kids" name="kids"
                                type = "number"
                                placeholder=""
                                min="0"
                                className="form-control"
                                validators={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".kids"
                                show="touched"
                                messages={{
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </Col>
                    </Row>
                    <h6><b>Account Details</b> </h6> <hr color="white"></hr>
                    <Row className="form-group">
                        <Label htmlFor="username" md={2}>Username</Label>
                        <Col md={10}>
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
                        <Label htmlFor="password" md={2}>Password</Label>
                        <Col md={10}>
                            <Control.text model=".password" id="password" name="password"
                                placeholder="Create a Password"
                                type="password"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger text-small"
                                model=".password"
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
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">
                                Register
                                    </Button>
                        </Col>
                    </Row>

                </LocalForm>
            </div>
        )
    }
}


