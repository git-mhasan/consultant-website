import React from 'react';
import useService from '../../../hooks/useServices';
import Service from './Service/Service';

const Home = () => {
    const services = useService();
    return (
        <div className='container text-center my-4'>
            <div>
                <h2>Banner</h2>
            </div>
            <div>
                <h2>Services</h2>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <h2>Review</h2>
            </div>
        </div>
    );
};

export default Home;