import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    let errorMsg;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLoginWithEmail = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signInWithEmailAndPassword(email, pass);
    }

    if (error) {
        errorMsg = <div className='text-danger text-center' style={{ width: "500px", height: "100px" }}>
            <p className='mt-3'>Error: {error?.message}</p>
        </div>
    }

    if (loading) {
        errorMsg = <div className='text-primary text-center' style={{ width: "500px", height: "100px" }}>
            <p className='mt-3'>Loading ...</p>
        </div>
    }

    if (user) {
        navigate('/home')
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
                    <Button variant="dark mx-auto d-block" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            {errorMsg}
        </div>
    );
};

export default Login;