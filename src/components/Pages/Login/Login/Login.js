import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let errorMsg;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleLoginWithEmail = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signInWithEmailAndPassword(email, pass);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email to: ' + email);
        }
        else {
            toast('Please enter your email.')
        }
    }

    if (error) {
        errorMsg = error.message;
        toast(errorMsg);
    }

    if (loading) {

        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container mx-auto m-4' style={{ width: "800px", height: "400px" }}>
            <h2 className='text-center m-5'>Please Login</h2>
            <div className='d-flex justify-content-center align-item-center'>
                <SocialLogin className="d-block">
                </SocialLogin>
                <div style={{ height: "260px", width: "1px" }} className="bg-dark mx-4" />
                <div style={{ width: "400px" }}>
                    <Form onSubmit={handleLoginWithEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <p >Not Registered? <Link to="/signup">Sign Up</Link></p>
                        <p >Forget Passwork? <Link to="" onClick={resetPassword}>Reset Password</Link> </p>
                        <Button variant="dark mx-auto d-block" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;