// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    if (!currentUser) {
        // Yetkisiz erişimde giriş sayfasına yönlendir
        return <Navigate to="/giris" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;