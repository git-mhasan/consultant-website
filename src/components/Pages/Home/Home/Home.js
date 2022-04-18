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
        <div className='container text-center my-4 mx-auto'>

            {/* -----------------banner section ---------------------*/}

            <div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="my-4">
                        <div className="my-4 mx-6">
                            <h2 className='my-3 text-3xl font-bold'>{bannerItems[0]?.title}</h2>
                            <h3 className='my-3 text-2xl text-blue-500 font-bold'>{bannerItems[0]?.slog}</h3>
                            <p className='mx-7 text-justify'>{bannerItems[0]?.desc}</p>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Details</button>
                    </div>
                    <div className="my-4">
                        <img src={bannerItems[0]?.imageUrl} alt="" />
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