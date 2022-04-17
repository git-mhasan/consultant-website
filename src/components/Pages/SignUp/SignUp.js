import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleLoginWithEmail = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email, pass);
    }

    return (
        <div className='container mx-auto m-4' style={{ width: "400px", height: "400px" }}>
            <h2 className='text-center m-3'>Please Sign Up</h2>
            <Form onSubmit={handleLoginWithEmail}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={emailRef} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <p>Have an account? Please <Link to="/login">Login</Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;