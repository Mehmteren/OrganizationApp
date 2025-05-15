import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import AboutUs from "./Pages/AboutUs/AboutUs.jsx"; 
import Navbar from "./components/Navbar/Navbar.jsx";  
import Banner from "./components/Banner/Banner.jsx"; 
import Reviews from "./components/Reviews/Reviews.jsx";
import Album from "./components/Album/Album.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services/Services.jsx"; 
import Wedding from "./CardsPage/Wedding.jsx";
import Kina from "./CardsPage/Kina.jsx";
import Soz from "./CardsPage/Soz.jsx"; 
import OzelGun from "./CardsPage/OzelGun.jsx";
import Nisan from "./CardsPage/Nisan.jsx";
import EvlilikTeklifi from "./CardsPage/EvlilikTeklifi.jsx"; 
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx"; 
import authService from './services/authService';

function App() {
  const [loading, setLoading] = useState(true);

  // PrivateRoute bileşeni - kimlik doğrulama gerektiren sayfalar için
  const PrivateRoute = ({ children }) => {
    if (loading) {
      return <div>Yükleniyor...</div>;
    }

    if (!authService.isAuthenticated()) {
      return <Navigate to="/giris" />;
    }

    return children;
  };

  const services = [
    {
      id: 1,
      title: "Düğün Organizasyonu",
      img: "https://blissfulplans.com/wp-content/uploads/2022/11/CMGEhvVP-Untitled-design-3-1200x900-1-1.jpg",
      details: "Başlangıçtan sona kadar eksiksiz düğün planlama hizmeti. Mekan seçimi, tedarikçi koordinasyonu ve düğün günü yönetimi dahil her ayrıntıyı sizin için düşünüyoruz.",
      path: "wedding"
    },
    {
      id: 2,
      title: "Kına Organizasyonu",
      img: "https://www.arabiaweddings.com/sites/default/files/styles/max980/public/articles/2020/07/ciragan_kempinski_istanbul_2.jpg?itok=_1TlOjFw",
      details: "Geleneksel ve modern kına gecesi organizasyonları. Kına yakma ritüelleri, eğlence programları ve özel süslemelerle unutulmaz bir kına gecesi deneyimi sunuyoruz.",
      path: "kina"
    },
    {
      id: 3,
      title: "Söz Organizasyonu",
      img: "https://cinemaofpoetry.com/wp-content/uploads/2020/08/best-wedding-venues-santorini-gem-2.jpg.webp",
      details: "Söz kesme töreninizi eşsiz bir anıya dönüştüren şık organizasyonlar. Özel söz masası düzenlemesi, ikramlar ve aile büyüklerinizin de memnun kalacağı atmosfer yaratıyoruz.",
      path: "soz"
    },
    {
      id: 4,
      title: "Özel Gün Organizasyonu",
      img: "https://www.nisanmarket.com/wp-content/uploads/2024/03/615570e4a741a.jpg",
      details: "Doğum günleri, mezuniyet törenleri, yıldönümleri veya özel kutlamalar için kişiye özel organizasyonlar. Her türlü özel gününüz için tematik dekorasyonlar ve eğlence programları hazırlıyoruz.",
      path: "ozelgun"
    },
    {
      id: 5,
      title: "Nişan Organizasyonu",
      img: "https://zorganizasyon.com/tema/genel/uploads/haberler/soz-masasi-kiralama_5.jpg",
      details: "Nişan töreninizi hayallerinize uygun şekilde tasarlıyoruz. Davetli sayınıza ve isteklerinize göre düzenlenen mekân dekorasyonu, ikramlar ve özel nişan seremonisi hazırlıkları ile bu özel günü unutulmaz kılıyoruz.",
      path: "nisan"
    },
    {
      id: 6,
      title: "Evlilik Teklifi Organizasyonu",
      img: "https://lh3.googleusercontent.com/proxy/rJseTtpG_en1KGf5ku8_dImHP4jMC9wD3hqMZeeOj1-LreN02uD7z4CIZpN0obHxLeAXXgKHxYZCO0LBbofrVLontcjeGeclYRSu9rz4F2eUOAShs3tYcSNzWlkIU8oHhSfcVPHe-9HFvUn5",
      details: "Aşkınızı taçlandıracak sürpriz evlilik teklifleri organize ediyoruz. Romantik mekan düzenlemesi, özel müzikler, profesyonel fotoğraf ve video çekimi ile bu özel anın her detayını planlıyoruz.",
      path: "evlilikteklifi"
    }
  ];

  useEffect(() => {
    // Sayfa yüklendiğinde loading durumunu kaldır
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <br/>
        <br/>
        <br/>
        <Routes>
          <Route path="/" element={
            <div className="home-container">
              <Banner /> 
              <Services services={services} />
              <Reviews />
              <Album />
            </div>
          } />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/wedding/:id" element={<Wedding services={services} />} />
          <Route path="/kina/:id" element={<Kina services={services} />} />
          <Route path="/soz/:id" element={<Soz services={services} />} />
          <Route path="/ozelgun/:id" element={<OzelGun services={services} />} />
          <Route path="/nisan/:id" element={<Nisan services={services} />} />
          <Route path="/evlilikteklifi/:id" element={<EvlilikTeklifi services={services} />} />
          
          {/* Giriş ve Kayıt Sayfaları */}
          <Route path="/giris" element={
            authService.isAuthenticated() ? <Navigate to="/" /> : <Login />
          } />
          <Route path="/kayit" element={
            authService.isAuthenticated() ? <Navigate to="/" /> : <Register />
          } />
          
          {/* Korumalı sayfalar */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;