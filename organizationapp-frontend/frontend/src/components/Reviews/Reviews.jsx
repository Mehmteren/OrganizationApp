import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard.jsx";
import { useNavigate } from "react-router-dom";
import "./Reviews.css";

const Reviews = () => {
    const [reviews, setReview] = useState(null)
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    
    const navigate = useNavigate()
    return (
        <div className="reviews-section">
            <h1 className="reviews-title">Bizimle İlgili Görüşleriniz</h1>
            <div className="reviews-container">
                <div className="reviews-grid">
                    {
                        reviews?.slice(0, 3).map((review) => 
                            <ReviewCard key={review.review_id} review={review} />
                        )
                    }
                </div>
                <button
                    onClick={() => navigate('/reviews')}
                    className="show-all-button">
                    Daha fazla
                </button>
            </div>
        </div>
    );
};

export default Reviews;