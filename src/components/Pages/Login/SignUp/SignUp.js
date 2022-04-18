import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    let errorMsg;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

    const handleLoginWithEmail = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        await createUserWithEmailAndPassword(email, pass);
        await updateProfile({ displayName: name });
    }
    if (error || errorUpdate) {
        // errorMsg = <div className='text-danger text-center' style={{ width: "500px", height: "100px" }}>
        //     <p className='mt-3'>Error: {error?.message} {errorUpdate?.message}</p>
        // </div>
        errorMsg = error?.message;
        toast(errorMsg);
    }

    if (loading || updating) {
        // errorMsg = <div className='text-primary text-center' style={{ width: "500px", height: "100px" }}>
        //     <p className='mt-3'>Loading ...</p>
        // </div>
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container mx-auto m-4' style={{ width: "600px", height: "400px" }}>
            <h2 className='text-center my-3'>Please Sign Up</h2>
            <div className='d-flex justify-content-center align-item-center'>
                <SocialLogin className="d-block">
                </SocialLogin>
                <div style={{ height: "340px", width: "1px" }} className="bg-dark mx-4" />
                <div style={{ width: "450px" }}>
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
                        <Button variant="dark mx-auto d-block" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div >
            <ToastContainer />
            {/* {errorMsg} */}
        </div >
    );
};

export default SignUp;