import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ServicePage.css';

const ServicePage = ({ services, pageTitle, packageOptions, galleryImages, serviceOptions }) => {
    const { id } = useParams();
    // ID'yi string'den number'a dönüştürme
    const numericId = parseInt(id, 10);
    const selectedService = services.find(service => service.id === numericId);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const galleryRef = useRef(null);
    const slideInterval = useRef(null);
    
    // Varsayılan fiyatlar - hizmet türüne göre
    const defaultPrices = {
        'wedding': 15000,
        'kina': 8000,
        'soz': 6000,
        'ozelgun': 7500,
        'nisan': 9000,
        'evlilikteklifi': 5000
    };
    
    // Seçenek değişikliklerini işleyen fonksiyon
    const handleOptionChange = (groupIndex, value) => {
        setSelectedOptions({
            ...selectedOptions,
            [groupIndex]: value
        });
    };

    // Slaytı değiştirme fonksiyonu
    const changeSlide = (direction) => {
        if (galleryImages && galleryImages.length > 0) {
            if (direction === "next") {
                setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
            } else {
                setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
            }
        }
    };
    
    // Otomatik slayt geçişini başlat
    useEffect(() => {
        if (galleryImages && galleryImages.length > 0) {
            slideInterval.current = setInterval(() => {
                changeSlide("next");
            }, 3000); // 3 saniye aralıkla otomatik geçiş
            
            return () => {
                if (slideInterval.current) {
                    clearInterval(slideInterval.current);
                }
            };
        }
    }, [galleryImages]);
    
    // Mouse üzerine geldiğinde otomatik geçişi durdur
    const pauseSlider = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };
    
    // Mouse ayrıldığında otomatik geçişi tekrar başlat
    const resumeSlider = () => {
        if (galleryImages && galleryImages.length > 0) {
            slideInterval.current = setInterval(() => {
                changeSlide("next");
            }, 3000);   
        }
    };

    // Slayt değiştiğinde galeriyi hareket ettir
    useEffect(() => {
        if (galleryRef.current) {
            const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                item.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
            });
        }
    }, [currentSlide]);

    // Fiyat hesaplama fonksiyonu - NaN hatasını önler ve varsayılan değerleri kullanır
    const calculatePrice = (multiplier) => {
        // Hizmet fiyatını al veya varsayılan fiyatı kullan
        let basePrice = 0;
        
        if (selectedService && selectedService.price && !isNaN(selectedService.price)) {
            basePrice = selectedService.price;
        } else if (selectedService && selectedService.path) {
            basePrice = defaultPrices[selectedService.path] || 10000; // Varsayılan değer
        } else {
            basePrice = 10000; // Fallback değeri
        }
        
        const factor = multiplier || 1;
        return (basePrice * factor).toLocaleString('tr-TR') + " ₺";
    };

    if (!selectedService) {
        return (
            <div className="service-not-found">
                <h2>Servis bulunamadı</h2>
                <Link to="/">Ana Sayfaya Dön</Link>
            </div>
        );
    }

    return (
        <div className="service-container">
            <div className="service-header">
                <h1>{pageTitle}</h1>
            </div>
            
            {/* Yeni yatay düzen başlangıcı */}
            <div className="service-main-content">
                {/* SOL TARAF - Galeri */}
                <div className="service-gallery-section">
                    {galleryImages && galleryImages.length > 0 ? (
                        <div 
                            className="gallery-container"
                            onMouseEnter={pauseSlider}
                            onMouseLeave={resumeSlider}
                        >
                            <div className="horizontal-gallery" ref={galleryRef}>
                                {galleryImages.map((image, index) => (
                                    <div key={index} className="gallery-item">
                                        <img src={image} alt={`${pageTitle} ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="gallery-nav">
                                <button className="prev" onClick={() => changeSlide("prev")}>
                                    &#8249;
                                </button>
                                <button className="next" onClick={() => changeSlide("next")}>
                                    &#8250;
                                </button>
                            </div>
                            <div className="gallery-progress">
                                <div 
                                    className="gallery-progress-inner" 
                                    style={{ width: `${((currentSlide + 1) / galleryImages.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ) : (
                        <div className="service-image-container">
                            <img src={selectedService.img} alt={pageTitle} className="service-main-image" />
                        </div>
                    )}
                </div>
                
                {/* SAĞ TARAF - Seçenekler */}
                <div className="service-options-section">
                    {serviceOptions && serviceOptions.length > 0 && (
                        <div className="service-options">
                            <h3>Organizasyon Seçenekleri</h3>
                            {serviceOptions.map((optionGroup, groupIndex) => (
                                <div key={groupIndex} className="dropdown-option-group">
                                    <div className="dropdown-label">
                                        <label htmlFor={`select-group-${groupIndex}`}>{optionGroup.title}:</label>
                                    </div>
                                    <div className="dropdown-select">
                                        <select 
                                            id={`select-group-${groupIndex}`}
                                            value={selectedOptions[groupIndex] || ''}
                                            onChange={(e) => handleOptionChange(groupIndex, e.target.value)}
                                        >
                                            <option value="" disabled>Seçiniz...</option>
                                            {optionGroup.options.map((option, optionIndex) => (
                                                <option key={optionIndex} value={option.value}>
                                                    {option.label} {option.priceAdjustment !== undefined && 
                                                    (option.priceAdjustment > 0 
                                                        ? `(+${option.priceAdjustment.toLocaleString('tr-TR')} ₺)` 
                                                        : option.priceAdjustment < 0 
                                                        ? `(${option.priceAdjustment.toLocaleString('tr-TR')} ₺)` 
                                                        : '')}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Rezervasyon Talep Et butonu */}
                            <div className="reservation-button-container">
                                <button className="reservation-button">
                                    <span className="reservation-icon">✉ </span>
                                    Rezervasyon Talep Et
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Yeni yatay düzen sonu */}
            
            {/* Paketler bölümü - tam genişlik */}
            <div className="packages">
                <h2>{pageTitle} Paket Seçenekleri</h2>
                <div className="package-list">
                    {packageOptions.map((option, index) => (
                        <div 
                            key={index} 
                            className={`package-card ${option.isRecommended ? 'premium' : ''}`}
                        >
                            {option.isRecommended && <div className="recommended">Önerilen</div>}
                            <h3>{option.title}</h3>
                            <div className="package-content">
                                <ul>
                                    {option.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="package-bottom">
                                    <p className="package-price">
                                        {option.isBasic 
                                            ? calculatePrice(1) 
                                            : (option.isStandard 
                                                ? calculatePrice(1.5) 
                                                : calculatePrice(2))}
                                    </p>
                                    <button className={`book-btn ${option.isRecommended ? 'premium-btn' : ''}`}>
                                        {option.isRecommended ? 'Hemen Rezervasyon Yap' : 'Rezervasyon Yap'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

ServicePage.propTypes = {
    services: PropTypes.array.isRequired,
    pageTitle: PropTypes.string.isRequired,
    packageOptions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
        isBasic: PropTypes.bool,
        isStandard: PropTypes.bool,
        isRecommended: PropTypes.bool
    })).isRequired,
    galleryImages: PropTypes.arrayOf(PropTypes.string),
    serviceOptions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            priceAdjustment: PropTypes.number
        })).isRequired
    }))
};

export default ServicePage;