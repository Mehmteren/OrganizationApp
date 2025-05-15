import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    errorMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false, errorMessage: '' });

    try {
      // Proxy'yi kullanarak göreceli URL (proxy'de tanımlanan port: 7000)
      const apiUrl = '/api/Messages';
      
      console.log('Gönderilecek form verileri:', formData);
      
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('API yanıtı:', response.data);
      
      if (response.data.success) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(response.data.message || 'Beklenmeyen bir hata oluştu.');
      }
    } catch (error) {
      console.error('Form gönderimi hatası:', error);
      
      let errorMessage = 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
      
      if (error.response) {
        console.error('Sunucu yanıtı:', error.response.data);
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        console.error('Yanıt alınamadı:', error.request);
        errorMessage = 'Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setFormStatus({ 
        submitting: false, 
        success: false, 
        error: true, 
        errorMessage: errorMessage
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1 className="contact-title">SEVGİYLE PLANLANMIŞ<br />HER DETAY İÇİN BİZE<br />ULAŞIN!</h1>
          
          <p className="contact-description">
            Her detayı özenle planlayarak, hayalinizdeki düğünü gerçeğe dönüştürüyoruz. Bizimle iletişime geçin, en özel anlarınızı birlikte tasarlayalım!
          </p>
          
          <div className="contact-details">
            <h3>İSTANBUL</h3>
            
            <div className="contact-item">
              <span className="contact-icon email-icon"></span>
              <a href="mailto:lillyorganizasyon@gmail.com">lillyorganizasyon@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon phone-icon"></span>
              <a href="tel:+905442942540">+90 (544) 294 - 25 - 40</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon location-icon"></span>
              <p>İstanbul / Türkiye</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="Adınız*" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="E-mail*" 
                required 
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                placeholder="Mesajınız" 
                rows="6"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-button" 
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Gönderiliyor...' : 'Gönder'}
            </button>
            
            {formStatus.success && (
              <div className="success-message">Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</div>
            )}
            
            {formStatus.error && (
              <div className="error-message">
                {formStatus.errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div className="instagram-section">
        <div className="instagram-divider">
          <div className="divider-line"></div>
          <div className="divider-icon"></div>
          <div className="divider-line"></div>
        </div>
        <h2 className="instagram-title">INSTAGRAM'DA • BİZİ • KEŞFEDİN</h2>
        <a href="https://www.instagram.com/lillyorganizasyon" className="instagram-handle">@LillyOrganizasyon</a>
      </div>
      
      {/* WhatsApp Butonu */}
      <a href="https://wa.me/905442942540" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <div className="whatsapp-icon"></div>
      </a>
    </div>
  );
};

export default Contact;