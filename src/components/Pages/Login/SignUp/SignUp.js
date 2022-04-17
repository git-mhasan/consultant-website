import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleLoginWithEmail = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(name, email, pass);
    }

    return (
        <div className='container mx-auto m-4' style={{ width: "600px", height: "400px" }}>
            <h2 className='text-center m-5'>Please Sign Up</h2>
            <div className='d-flex justify-content-center align-item-center'>
                <SocialLogin className="d-block">
                </SocialLogin>
                <div style={{ height: "340px", width: "1px" }} className="bg-dark" />
                <Form onSubmit={handleLoginWithEmail}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>Have an account? Please <Link to="/login">Login</Link></p>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div >

        </div >
    );
};

export default SignUp;