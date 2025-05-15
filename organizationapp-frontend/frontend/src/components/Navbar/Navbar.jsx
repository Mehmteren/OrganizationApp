// src/components/Navbar/Navbar.jsx
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import authService from '../../services/authService';
import './Nav.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';
    
    // Montserrat yazı tipi
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        
        return () => {
            document.head.removeChild(link);
        };
    }, []);
    
    // Sayfa yüklendiğinde ve location değiştiğinde kullanıcı bilgisini güncelle
    useEffect(() => {
        const user = authService.getCurrentUser();
        setCurrentUser(user);
    }, [location]);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Temizleme işlemi
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Çıkış işlemi
    const handleLogout = () => {
        authService.logout();
        setCurrentUser(null);
        navigate('/'); // Ana sayfaya yönlendir
        setShowProfileMenu(false);
    };

    // Profil menüsünü aç/kapat
    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };
    
    // Dışarıda bir yere tıklandığında profil menüsünü kapat
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showProfileMenu && !event.target.closest('.profile-dropdown')) {
                setShowProfileMenu(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfileMenu]);

    return (
        <div className={`navbar-container ${scrolled ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}>
            <div className="logo">
                <Link to="/">
                    <span className="logo-text">Lilly Organizasyon</span>
                </Link>
            </div>
            
            <div className="nav-links">
                <NavLink to="/" className="nav-item">ANA SAYFA</NavLink>
                <NavLink to="/AboutUs" className="nav-item">HAKKIMIZDA</NavLink>
                
                <div className="dropdown-container">
                    <NavLink to="#" className="nav-item">
                        HİZMETLERİMİZ
                    </NavLink>
                    <div className="services-dropdown">
                        <div className="dropdown-columns">
                            <div className="dropdown-column">
                                <h3>DÜĞÜN</h3>
                                <Link to="/dugun/dugun-organizasyonu">Düğün Organizasyonu</Link>
                                <Link to="/dugun/kir-dugunu">Kır Düğünü Organizasyonu</Link>
                                <Link to="/dugun/islami-dugun">İslami Düğün Organizasyonu</Link>
                                <Link to="/dugun/bahce-dugunu">Bahçe Düğünü Organizasyonu</Link>
                                <Link to="/dugun/nikah">Nikah Organizasyonu</Link>
                                <Link to="/dugun/kumsalda-dugun">Kumsalda Düğün Organizasyonu</Link>
                            </div>
                            <div className="dropdown-column">
                                <h3>NİŞAN</h3>
                                <Link to="/nisan/nisan-organizasyonu">Nişan Organizasyonu</Link>
                                <Link to="/nisan/ev-ici">Ev İçi</Link>
                                <Link to="/nisan/bahcede">Bahçede</Link>
                                <Link to="/nisan/restoranlar">Restoranlar ve Kafeler</Link>
                                <Link to="/nisan/oteller">Oteller</Link>
                                <Link to="/nisan/kir-bahceleri">Kır Bahçeleri</Link>
                                <Link to="/nisan/teknede">Teknede Nişan</Link>
                                <Link to="/nisan/vintaj">Vintaj Mekanları</Link>
                                <Link to="/nisan/sanat-galerileri">Sanat Galerileri veya Müzeler</Link>
                                <Link to="/nisan/dag-evleri">Dağ Evleri</Link>
                            </div>
                            <div className="dropdown-column">
                                <h3>KİRALAMA</h3>
                                <Link to="/kiralama/organizasyon-malzemeleri">Organizasyon Malzemeleri Kiralama</Link>
                                <Link to="/kiralama/masa-sandalye">Masa & Sandalye Kiralama</Link>
                                <Link to="/kiralama/kokteyl-bar">Kokteyl & Bar Masası Kiralama</Link>
                                <Link to="/kiralama/personel">Personel Kiralama</Link>
                                <Link to="/kiralama/ses-sistemi">Ses Sistemi Kiralama</Link>
                                <Link to="/kiralama/led-ekran">LED Ekran Kiralama</Link>
                                <Link to="/kiralama/podyum">Podyum Kiralama</Link>
                            </div>
                            <div className="dropdown-column">
                                <h3>ÖZEL ÇÖZÜMLER</h3>
                                <Link to="/cozumler/dugun-susleme">Düğün Süsleme</Link>
                                <Link to="/cozumler/nisan-susleme">Nişan Süsleme</Link>
                                <Link to="/cozumler/masa-sandalye-susleme">Masa Sandalye Süsleme</Link>
                                <Link to="/cozumler/nikah-susleme">Nikah Süsleme</Link>
                                <Link to="/cozumler/balon-susleme">Balon Süsleme</Link>
                                <Link to="/cozumler/acilis-susleme">Açılış Süsleme</Link>
                                <Link to="/cozumler/sunnet-susleme">Sünnet Süsleme</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to="/Contact" className="nav-item">İLETİŞİM</NavLink>
            </div>
            
            <div className="auth-buttons">
                {currentUser ? (
                    <div className="profile-dropdown">
                        <div className="user-profile" onClick={toggleProfileMenu}>
                            <img 
                                src="https://banner2.cleanpng.com/20180404/sqe/avhxkafxo.webp" 
                                alt="Profil" 
                                className="profile-avatar" 
                            />
                            <span className="profile-username">{currentUser.email.split('@')[0]}</span>
                        </div>
                        {showProfileMenu && (
                            <div className="profile-dropdown-menu">
                                <Link to="/dashboard" className="profile-dropdown-item">
                                    <span>Profilim</span>
                                </Link>
                                <Link to="/rezervasyonlarim" className="profile-dropdown-item">
                                    <span>Rezervasyonlarım</span>
                                </Link>
                                <div className="menu-divider"></div>
                                <button onClick={handleLogout} className="profile-dropdown-item logout-btn">
                                    <span>Çıkış Yap</span>
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <Link to="/giris" className="auth-button login-btn">GİRİŞ</Link>
                        <Link to="/kayit" className="auth-button register-btn">KAYIT OL</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;