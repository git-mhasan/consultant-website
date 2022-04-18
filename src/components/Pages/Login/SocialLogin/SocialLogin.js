import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let errorMsg;

    const handleGooleSignIn = () => {
        signInWithGoogle();
    }

    if (error) {

        toast(error.message);
    }
    if (loading) {
        errorMsg = <div className='text-primary text-center' style={{ width: "180px", height: "100px" }}>
            <p className='mt-3'>Loading ...</p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="d-flex flex-column align-item-center justify-content-center mt-3">
            <button onClick={handleGooleSignIn} style={{ width: "200px", height: "40px" }} className='btn btn-dark'>Google Sign in</button>
            {errorMsg}
            <ToastContainer />
        </div>

    );
};

export default SocialLogin;