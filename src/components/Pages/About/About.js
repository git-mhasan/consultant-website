import React from 'react';
import profilePic from "../../../images/profile.jpg";

const About = () => {
    return (
        <div className='container my-5 mx-auto px-5'>
            <div className='d-flex justify-content-start'>
                <div style={{ width: "300px" }} className="me-auto">
                    <img className='img-fluid' src={profilePic} alt="" />
                </div>
                <div className='d-flex ms-auto justify-content-start align-items-center'>
                    <div className=''>
                        <h2>Mahadi Hasan</h2>
                        <h3>BSc in Civil Engineering.</h3>
                        <h5>Structural Designer and Consultant.</h5>
                    </div>
                </div>
            </div>
            <div className='container my-5 mx-auto px-5'>
                <p className='m-5 pt-3 pb-5'> <span style={{ fontWeight: "700" }}>Career Goal:</span><br /> To Achieve high career growth through a continuous process of learning. Working hard for achieving goal and keeping myself dynamic in the changing scenario to become a successful professional. Manage time to get the best opportunity. I work hard to achieve success in Civil engineering field.</p>
            </div>
        </div>
    );
};

export default About;