// pages/Register/Register.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import authService from '../../services/authService';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    });

    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // İsim ve soyisim kontrolü
        if (!formData.firstName.trim()) newErrors.firstName = "İsim gereklidir";
        if (!formData.lastName.trim()) newErrors.lastName = "Soyisim gereklidir";

        // E-posta kontrolü
        if (!formData.email.trim()) {
            newErrors.email = "E-posta gereklidir";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Geçerli bir e-posta adresi girin";
        }

        // Şifre kontrolü
        if (!formData.password) {
            newErrors.password = "Şifre gereklidir";
        } else if (formData.password.length < 6) {
            newErrors.password = "Şifre en az 6 karakter olmalıdır";
        }

        // Şifre onayı kontrolü
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Şifreler eşleşmiyor";
        }

        // Şartlar ve koşullar onayı
        if (!formData.terms) {
            newErrors.terms = "Şartlar ve koşulları kabul etmelisiniz";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        setApiError('');

        try {
            await authService.register(formData);
            navigate('/giris', { state: { message: 'Kayıt işlemi başarılı! Giriş yapabilirsiniz.' } });
        } catch (error) {
            setApiError(error.message || 'Kayıt sırasında bir hata oluştu');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h2>Hesap Oluştur</h2>
                </div>

                {apiError && (
                    <div className="api-error-message">
                        {apiError}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">İsim</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={errors.firstName ? "error" : ""}
                                placeholder="İsminizi girin"
                            />
                            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Soyisim</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={errors.lastName ? "error" : ""}
                                placeholder="Soyisminizi girin"
                            />
                            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-posta</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "error" : ""}
                            placeholder="E-posta adresinizi girin"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? "error" : ""}
                            placeholder="Şifrenizi girin"
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Şifre Tekrar</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? "error" : ""}
                            placeholder="Şifrenizi tekrar girin"
                        />
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                    </div>

                    <div className="form-group terms-checkbox">
                        <div>
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                            />
                            <label htmlFor="terms">
                                <Link to="/sartlar-ve-kosullar">Şartlar ve koşulları</Link> kabul ediyorum
                            </label>
                        </div>
                        {errors.terms && <span className="error-message">{errors.terms}</span>}
                    </div>

                    <button
                        type="submit"
                        className="register-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Kaydediliyor...' : 'Kayıt Ol'}
                    </button>
                </form>

                <div className="register-footer">
                    <p>Zaten hesabınız var mı? <Link to="/giris">Giriş yapın</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;