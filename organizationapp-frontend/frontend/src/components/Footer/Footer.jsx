import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">
                        <Link to="/">
                            <div className="logo-placeholder">
                                <span className="logo-text">Lilly Organizasyon</span>
                            </div>
                        </Link>
                    </div>
                    <div className="footer-tagline">
                        <p>Özel Günleriniz İçin<br />Profesyonel Dokunuş</p>
                    </div>
                    <div className="footer-contact">
                        <div className="contact-item">
                            <span className="contact-icon email-icon"></span>
                            <a href="mailto:lilaconceptt@gmail.com">lillyorganizasyon@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon phone-icon"></span>
                            <a href="tel:+902125363797">+90 (544) - 294 - 25 - 40</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon location-icon"></span>
                            <p>Çekmeköy / İstanbul / Türkiye</p>
                        </div>
                        <div className="social-icons">
                            <a href="https://instagram.com/lilaconceptt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <span className="social-icon instagram-icon"></span>
                            </a>
                            <a href="https://facebook.com/lilaconceptt" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <span className="social-icon facebook-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Hızlı Linkler</h3>
                        <ul>
                            <li><Link to="/">Anasayfa</Link></li>
                            <li><Link to="/Contact">İletişim</Link></li>
                            <li><Link to="/AboutUs">Hakkımızda</Link></li>
                            <li><Link to="/neler-yaptik">Neler Yaptık</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-column">
                        <h3>Düğün</h3>
                        <ul>
                            <li><Link to="/dugun/islami-dugun">İslami Düğün Organizasyonu</Link></li>
                            <li><Link to="/dugun/kir-dugunu">Kır Düğünü Organizasyonu</Link></li>
                            <li><Link to="/dugun/kumsalda-dugun">Kumsalda Düğün Organizasyonu</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-column">
                        <h3>Nişan</h3>
                        <ul>
                            <li><Link to="/nisan/evde-nisan">Evde Nişan Organizasyonu</Link></li>
                            <li><Link to="/nisan/bahcede-nisan">Bahçede Nişan Organizasyonu</Link></li>
                            <li><Link to="/nisan/nikah">Nikah Organizasyonu</Link></li>
                            <li><Link to="/nisan/kafede-nisan">Kafede Nişan Organizasyonu</Link></li>
                            <li><Link to="/nisan/otelde-nisan">Otelde Nişan Organizasyonu</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="whatsapp-button">
                    <a href="https://wa.me/905362013797" target="_blank" rel="noopener noreferrer">
                        <div className="whatsapp-icon"></div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;