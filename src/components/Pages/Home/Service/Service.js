import React from 'react';
import "./Service.css"

const Service = ({ service }) => {
    const { title, price, desc, imageUrl } = service;
    // console.log()
    return (
        <div className='service-card border border-gray-400 m-8 shadow-lg' >
            <div className='m-4 flex'>
                <img className='service-pic' src={imageUrl} alt="" />
                <div className='align-middle'>
                    <h4 className='mx-2 my-2 text-left text-base font-bold'> {title}</h4>
                    <p className='mx-5 my-1 text-left text-base'>Price: {price} tk</p>
                </div>
            </div>
            <p className='text-justify mx-4 mt-3'>{desc?.length > 100 ? desc?.slice(0, 100) + "..." : desc}</p>
            <button className='btn btn-dark'>Get Appointment</button>
        </div >
    );
};

export default Service;
