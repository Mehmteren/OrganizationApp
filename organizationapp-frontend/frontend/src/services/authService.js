// src/services/authService.js
import axios from 'axios';

// Backend API URL
const API_URL = 'https://localhost:7000/api/auth/';

// Axios instance oluşturma
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Token ile yapılan istekler için interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token'); // localStorage yerine sessionStorage kullanılıyor
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Giriş işlemi
const login = async (userData) => {
  try {
    const response = await axiosInstance.post('login', {
      email: userData.email,
      password: userData.password,
      rememberMe: userData.rememberMe
    });
    
    if (response.data.token) {
      // Token ve kullanıcı bilgilerini sessionStorage'da sakla (tarayıcı kapatıldığında silinir)
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('user', JSON.stringify({ 
        email: userData.email,
        // Diğer kullanıcı bilgileri
      }));
      
      // Beni hatırla seçiliyse sadece giriş bilgilerini localStorage'a kaydet
      if (userData.rememberMe) {
        localStorage.setItem('rememberedEmail', userData.email);
        localStorage.setItem('rememberedPassword', btoa(userData.password)); // Basit şifreleme
      } else {
        // Beni hatırla seçili değilse stored credentials'ı temizle
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
      }
    }
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Bir hata oluştu' };
  }
};

// Kayıt işlemi
const register = async (userData) => {
  try {
    const response = await axiosInstance.post('register', {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      termsAccepted: userData.terms
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Bir hata oluştu' };
  }
};

// Çıkış işlemi
const logout = () => {
  // Yalnızca oturum verilerini temizle
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  // "Beni hatırla" ile kaydedilen bilgilere dokunma
  
  // Çıkış sonrası anasayfaya yönlendirme
  window.location.href = '/';
};

// Kullanıcı bilgilerini getirme
const getCurrentUser = () => {
  const user = sessionStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Kullanıcının giriş yapmış olup olmadığını kontrol etme
const isAuthenticated = () => {
  return sessionStorage.getItem('token') !== null;
};

// Hatırlanan giriş bilgilerini getirme
const getRememberedCredentials = () => {
  const email = localStorage.getItem('rememberedEmail');
  const password = localStorage.getItem('rememberedPassword');
  
  if (email && password) {
    return {
      email,
      password: atob(password), // Şifreyi çöz
      rememberMe: true
    };
  }
  
  return null;
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
  getRememberedCredentials
};

export default authService;