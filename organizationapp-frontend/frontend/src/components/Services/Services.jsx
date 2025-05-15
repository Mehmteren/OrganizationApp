import ServiceCard from "./ServiceCard";
import PropTypes from 'prop-types';
import './Services.css';

const Services = ({ services }) => {
    return (
        <div className="services-section">
            <h1 className="services-title">Hizmetlerimiz</h1>
            <div className="services-grid">
                {
                    services?.map(service => 
                        <ServiceCard key={service.id} service={service} />
                    )
                }
            </div>
        </div>
    );
};

export default Services;

Services.propTypes = {
    services: PropTypes.array.isRequired
};