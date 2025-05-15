// pages/Login/Login.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import authService from '../../services/authService';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [apiError, setApiError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Kayıt sonrası mesaj varsa göster
        if (location.state?.message) {
            setSuccessMessage(location.state.message);
        }
        
        // Hatırlanan bilgileri kontrol et ve varsa formu doldur
        const rememberedCredentials = authService.getRememberedCredentials();
        if (rememberedCredentials) {
            setFormData(rememberedCredentials);
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError('');
        setIsLoading(true);
        
        try {
            await authService.login(formData);
            // Başarılı giriş sonrası yönlendirme
            navigate('/');
        } catch (error) {
            setApiError(error.message || 'Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Giriş Yap</h2>
                </div>
                
                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}
                
                {apiError && (
                    <div className="api-error-message">
                        {apiError}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">E-posta</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-posta adresinizi girin"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Şifrenizi girin"
                            required
                        />
                    </div>
                    
                    <div className="form-options">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <label htmlFor="rememberMe">Beni hatırla</label>
                        </div>
                        <Link to="/sifremi-unuttum" className="forgot-password">
                            Şifremi unuttum
                        </Link>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="login-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                    </button>
                </form>
                
                <div className="login-footer">
                    <p>Hesabınız yok mu? <Link to="/kayit">Hemen kaydolun</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;