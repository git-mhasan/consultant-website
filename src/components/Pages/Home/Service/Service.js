import React from 'react';
import "./Service.css"

const Service = (service) => {
    const { _id, title, price, desc, imageUrl } = service;

    return (
        <div className='service-card border border-gray-400 m-8 shadow-lg' >
            <div className='m-4 flex'>
                <img className='service-pic' src={imageUrl} alt="" />
                <div className='align-middle'>
                    <h3 className='mx-4 text-left text-base font-bold'> {title}</h3>
                    <p className='mx-4 my-1 text-left text-base'>Price: {price} tk</p>
                </div>
            </div>
            <p className='text-justify mx-8 mb-8'>{desc?.length > 100 ? desc?.slice(0, 100) + "..." : desc}</p>
            <button className='btn btn-dark'>Get Appointment</button>
        </div >
    );
};

export default Service;
