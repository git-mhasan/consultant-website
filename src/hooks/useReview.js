import { useEffect, useState } from "react";

const useReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return review;
}

export default useReview;