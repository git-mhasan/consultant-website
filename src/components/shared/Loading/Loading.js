import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: "400px", width: "50px" }} className="w-100 d-flex justify-content-center align-items-center">
            <Spinner animation='border' variant='dark'></Spinner>
        </div>
    );
};

export default Loading;