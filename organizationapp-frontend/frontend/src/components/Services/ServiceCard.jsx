// components/Services/ServiceCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { title, id, img, details, path } = service;
    
    return (
        <div className="service-card">
            <div className="service-image">
                <img src={img} alt={title} />
            </div>
            <div className="service-content">
                <h1 className="service-title">{title}</h1>
                <p className="service-description">{details}</p>
                <div>
                    <Link to={`/${path}/${id}`}>
                        <button className="select-button">İncele</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
};