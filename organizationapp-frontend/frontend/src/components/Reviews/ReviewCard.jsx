import PropTypes from 'prop-types';
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const { username, user_image, review_rating, review_text } = review;
    
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    };

    return (
        <div className="review-card">
            <div className="review-image-container">
                <img src={user_image} className="review-image" alt={username} />
            </div>
            <div className="review-content">
                <div className="star-rating">
                    <Rating 
                        style={{ maxWidth: 150, margin: '0 auto' }} 
                        value={review_rating} 
                        itemStyles={myStyles} 
                        readOnly 
                    />
                </div>
                <h1 className="reviewer-name">{username}</h1>
                <p className="review-text">{review_text}</p>
            </div>
        </div>
    );
};

export default ReviewCard;

ReviewCard.propTypes = {
    review: PropTypes.object.isRequired
};