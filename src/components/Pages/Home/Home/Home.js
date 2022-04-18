import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBanner from '../../../../hooks/useBanner';
import useReview from '../../../../hooks/useReview';
import useService from '../../../../hooks/useServices';
import ReviewCard from '../ReviewCard/ReviewCard';
import Service from '../Service/Service';
import "./Home.css";

const Home = () => {
    const services = useService();
    const bannerItems = useBanner();
    const allReviews = useReview();

    const reviews = allReviews?.length > 3 ? [...allReviews].slice(0, 3) : [...allReviews];
    return (
        <div className='container text-center mb-4 mx-auto'>

            {/* -----------------banner section ---------------------*/}

            <div>
                <div className=''>
                    <div className="position-relative">
                        <img className='img-fluid opacity-50' style={{ height: "400px" }} src={bannerItems[0]?.imageUrl} alt="" />
                    </div>
                    <div className="container my-4 position-absolute top-0 mx-auto text-center w-50">
                        <div className="p-3 mt-5">
                            <h1 className='text-center my-3 text-3xl font-bold'>{bannerItems[0]?.title}</h1>
                            <h2 className='text-center my-3 text-2xl text-blue-500 font-bold'>{bannerItems[0]?.slog}</h2>
                            <p className='mx-5 text-justify font-bold d-none d-md-block'>{bannerItems[0]?.desc}</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* -----------------service section ---------------------*/}

            <div>
                <h2 className='mt-5 mb-3'>Services</h2>
                <div className='service-section'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

            {/* -----------------review section ---------------------*/}

            <div className='container my-5'>

                <div className='my-5'>
                    <h2 className='mt-5 text-2xl font-bold'>What my Client says</h2>
                    <div className='row mx-auto'>
                        {
                            reviews.map(review => <ReviewCard
                                key={review.id}
                                review={review}
                            ></ReviewCard>)
                        }
                    </div>
                </div>
                <div className='my-5'></div>
            </div>
        </div>
    );
};

export default Home;