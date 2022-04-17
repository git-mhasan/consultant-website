import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const { name, comments, imageUrl, rating } = review;

    return (
        <div className='review-card border border-gray-400 m-8 shadow-lg'>
            <div className='m-4 flex'>
                <img className='review-pic' src={imageUrl} alt="" />
                <div className='align-middle'>
                    <h3 className='mx-4 text-left text-base font-bold'> {name}</h3>
                    <p className='mx-4 my-1 text-left text-base'>{rating}/5.0 </p>
                </div>
            </div>
            <p className='text-justify mx-8 mb-8'>{comments?.length > 100 ? comments?.slice(0, 100) + "..." : comments}</p>
        </div>
    );
};

export default ReviewCard;