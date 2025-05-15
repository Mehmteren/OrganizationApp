// CardsPage/Soz/Soz.jsx
import ServicePage from '../components/ServicePage/ServicePage';
import PropTypes from 'prop-types';

const Soz = ({ services }) => {
    const sozPackages = [
        {
            title: "Temel Söz Paketi",
            features: [
                "Temel söz organizasyonu",
                "Söz masası düzenlemesi",
                "Fotoğraf çekimi"
            ],
            isBasic: true,
            isRecommended: false
        },
        {
            title: "Standart Söz Paketi",
            features: [
                "Temel paket içeriği",
                "Özel söz pastası",
                "Canlı müzik",
                "Çiçek düzenlemeleri"
            ],
            isStandard: true,
            isRecommended: false
        },
        {
            title: "Premium Söz Paketi",
            features: [
                "Standart paket içeriği",
                "Özel mekan kiralama",
                "Profesyonel fotoğraf ve video",
                "Özel ikramlar",
                "VIP dekorasyon"
            ],
            isRecommended: true
        }
    ];

    // Söz organizasyonu için resim galerisi
    const sozGalleryImages = [
        "https://i.pinimg.com/originals/27/f1/91/27f1919f3e16204f588f7542d0e4889c.jpg",
        "https://i.dugun.com/articles/wp-content/uploads/2022/01/nisin-sozu-770x513.jpg",
        "https://www.modanisa.com/blog/wp-content/uploads/2021/12/soz-hazirliklari-1024x512.jpg",
        "https://www.eliteworldhotels.com.tr/upload/blog/d75e2b673ae64d088a0ab58e8a29a9c3.jpg",
        "https://i0.shbdn.com/photos/45/05/79/x5_1109450579ufj.jpg"
    ];

    // Söz organizasyonu seçenekleri
    const sozOptions = [
        {
            title: "Mekan Seçeneği",
            options: [
                { label: "Ev Ortamı", value: "home" },
                { label: "Kafe/Restoran", value: "restaurant" },
                { label: "Otel Salonu", value: "hotel" },
                { label: "Bahçe/Teras", value: "garden" }
            ]
        },
        {
            title: "İkram Seçenekleri",
            options: [
                { label: "Temel İkramlar (Kuruyemiş, Çerez)", value: "basic" },
                { label: "Standart İkramlar (Kuru pasta, Tatlı)", value: "standard" },
                { label: "Lüks İkramlar (Özel Menü)", value: "luxury" }
            ]
        },
        {
            title: "Müzik Seçenekleri",
            options: [
                { label: "Özel Playlist", value: "playlist" },
                { label: "DJ", value: "dj" },
                { label: "Canlı Müzik", value: "live" }
            ]
        },
        {
            title: "Fotoğraf & Video",
            options: [
                { label: "Temel Fotoğraf Paketi (2 saat)", value: "basic-photo" },
                { label: "Standart Paket (4 saat + Video)", value: "standard-photo" },
                { label: "Premium Paket (Tam Hizmet)", value: "premium-photo" }
            ]
        }
    ];

    return (
        <ServicePage 
            services={services} 
            pageTitle="Söz Organizasyonu" 
            packageOptions={sozPackages}
            galleryImages={sozGalleryImages}
            serviceOptions={sozOptions}
        />
    );
};

Soz.propTypes = {
    services: PropTypes.array.isRequired
};

export default Soz;