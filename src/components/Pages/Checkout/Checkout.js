import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../../hooks/useServices';

const Checkout = () => {
    const { serviceId } = useParams();


    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center'> Thank you for chosing: {serviceId}</h2>
        </div>
    );
};

export default Checkout;