// Pages/Dashboard/Dashboard.jsx
import { useState, useEffect } from 'react';
import authService from '../../services/authService'; 
import './Dashboard.css';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        // Sayfa yüklendiğinde kullanıcı bilgisini al
        const user = authService.getCurrentUser();
        setCurrentUser(user);
    }, []);
    
    return (
        <div className="dashboard-container">
            <h1>Hoş Geldiniz!</h1>
            <p>Merhaba {currentUser?.email}, hesabınıza başarıyla giriş yaptınız.</p>
            
            <div className="dashboard-content">
                <h2>Organizasyon Paneli</h2>
                <p>Buradan organizasyonlarınızı yönetebilirsiniz.</p>
                
                {/* Kullanıcının organizasyonlarını listeleme veya yeni organizasyon oluşturma alanı */}
                <div className="dashboard-actions">
                    <button className="action-button">Organizasyonlarım</button>
                    <button className="action-button">Yeni Organizasyon</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;