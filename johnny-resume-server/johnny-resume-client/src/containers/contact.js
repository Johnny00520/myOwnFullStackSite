import React, { Component } from 'react';
import emailIcon from '../images/Email-icon.png';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { goToAnchor } from 'react-scrollable-anchor';

// const Joi = require('joi');
// import Joi from 'joi';

class Contact extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          email: '',
          subject: '',
        //   message: '',
          visible: false
        };

        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChangeEmail = this.onHandleChangeEmail.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onHandleChangeEmail = event => {
        // this.setState({ [event.target.name]: event.target.value })
        this.setState({
            email: event.target.value
        })
    }

    onReset = (e) => {
        e.preventDefault();

        this.setState((prevState) => {
            return ({
                name: prevState.name = '',
                email: prevState.email = '',
                subject: prevState.subject = '',
            });
        });
    }

    async onHandleSubmit(e) {
        e.preventDefault();

        const { subject, name, email } = this.state;
        let message = this.props.message;

        alert("Thank you!! I will get back to you ASAP");
        window.location.reload();
        goToAnchor('HOME', true);

        // const schema = {
        //     name: Joi.string().required(),
        //     subject: Joi.string().required(),
        //     email: Joi.string().email().required(),
        //     message: Joi.string().min(5).max(1000).required()
        // };
        // let obj = {
        //     subject: this.state.subject,
        //     name: this.state.name,
        //     email: this.state.email,
        //     message: this.props.message
        // }
        // const result = Joi.validate(obj, schema);
        // if (result.error) {
        //     return alert(result.error.details[0].message);
        // } else {
        //     window.confirm("Thank you!! I will get back to you ASAP")
        //     // window.location.reload();
        //     goToAnchor('HOME', true)
        // }
        // const form = await axios.post('/api/form', obj)

        const form = await axios.post('/api/form', {
            subject,
            name,
            email,
            message
        })
        .then(response => {
            console.log('response: ', response)
        })
        .catch(error => {
            console.log('error: ', error.response)
        });
    }

    // validateEmail(e) {
    //     const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     const { validate } = this.state
    //         if (emailRex.test(e.target.value)) {
    //             validate.emailState = 'has-success'
    //         } else {
    //             validate.emailState = 'has-danger'
    //         }
    //         this.setState({ validate })
    // }
    
    render() {
        const showErrorMessage = this.props.showErrorMessage;

        return (
            <div className="contact-page">
                <div className="contact-page-header">
                    <img src={emailIcon} alt="" />
                    <h2 className="contact-page-title">Contact me</h2>
                    <div className="contact-page-header-title">
                    Do you think I'd be a good fit for your team? I'd love to hear from you, give me an opportunity by email or by using the form below if you'd like to get in contact with me.
                    </div>
                </div>
                <div className="row">
                    <div className="row-input">
                        <Form onSubmit={this.onHandleSubmit}
                            style={{ marginBottom: '30px', width: '65%' }}
                        >
                            <div className="Contact-container">
                                <div className='col-md-8 push-md-2 col-lg-6 push-lg-3'
                                    style={{ width: '100%' }}
                                >
                                    <FormGroup row>
                                        <div className='row form-group'>
                                            <div className='col-6'>
                                                <Label style={{ float: 'left'}}>Name</Label>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    id="exampleName" 
                                                    placeholder="Your name (can NOT be empty)"
                                                    title="Provide your name"
                                                    value={this.state.name}
                                                    onChange={(event) => this.setState({name: event.target.value})}
                                                    style={{ height: '40px'}}
                                                />
                                            </div>
                                            <div className='col-6'>
                                                <Label for="exampleEmail" style={{ float: 'left'}}>Email</Label>
                                                <Input 
                                                    // className='form-control' 
                                                    type="email" 
                                                    name="email" 
                                                    id="exampleEmail" 
                                                    placeholder="Your email address"
                                                    title="Please provide your email address"
                                                    value={this.state.email}
                                                    onChange={this.onHandleChangeEmail}
                                                    style={{ height: '40px'}}
                                                />
                                            </div>
                                            <div className='col-6'>
                                                <Label style={{ float: 'left'}}>Subject</Label>
                                                <Input
                                                    className='form-control' 
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject (can NOT be empty)"
                                                    title="Provide your subject"
                                                    value={this.state.subject}
                                                    onChange={(event) => this.setState({subject: event.target.value})}
                                                    style={{ height: '40px'}}
                                                />
                                            </div>
                                        </div>
                                    </FormGroup>

                                    <FormGroup 
                                        row
                                        style={{ margin: '0', width: '100%' }}
                                    >
                                        <Label 
                                            for="exampleText" 

                                            style={{ float: 'left'}}
                                        >Message
                                        </Label>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="exampleText"
                                            value={this.props.message}
                                            placeholder='Anything interesting for me? (Characters between 5 to 1000)'
                                            // onChange={(event) => this.setState({message: event.target.value})}
                                            onChange={this.props.onMaxLimitMessageInContact}
                                            style={{ minHeight: '10vw', maxHeight: '15vw'}}
                                        />
                                    </FormGroup>

                                    <span className={`${showErrorMessage ? 'error-limit-message-badge' : 'limit-message-badge'}`}>
                                        {this.props.maxLimitMessageLength}
                                    </span>
                                    { showErrorMessage ?
                                        <div className="error-message">
                                            <span>Your message might be too long</span>
                                        </div>
                                    : ''}

                                    <div className="submit-btn"
                                        style={{ textAlign: 'right', margin: '2%' }}
                                    >
                                        <FormGroup check row>
                                            {/* <Button color="primary" style={{ marginRight: '2%' }} onClick={this.onReset}>Reset</Button> */}
                                            <Button color="primary" >Submit</Button>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                        </Form>

                        <div className="row-personal-container">
                            <div className="row-myInfo">
                                <Label style={{ color: 'white', fontSize: '1.5em' }}>Address & Email Address</Label>
                                <p>。Johnny(Chen Hao) Cheng</p>
                                <p>。3000 Colorado Ave B105</p>
                                <p>。Boulder, Colorado, 80303</p>
                            </div>
                            <div className="row-myTweet">
                                <Label style={{ color: 'white', fontSize: '1.5em' }}>Mottos</Label>
                                <p>。Always Learning</p>
                                <p>。No Regrets</p>
                                <p>。Every saint has a past, every sinner has a future</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact