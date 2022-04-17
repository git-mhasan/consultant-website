import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleLoginWithEmail = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        console.log(email);
    }

    return (
        <div className='container mx-auto m-4' style={{ width: "600px", height: "400px" }}>
            <h2 className='text-center m-5'>Please Login</h2>
            <div className='d-flex justify-content-center align-item-center'>
                <SocialLogin className="d-block">
                </SocialLogin>
                <div style={{ height: "260px", width: "1px" }} className="bg-dark" />
                <Form onSubmit={handleLoginWithEmail}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>Not Registered? <Link to="/signup">Sign Up</Link></p>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;