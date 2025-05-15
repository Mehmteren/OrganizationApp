// CardsPage/Nisan/Nisan.jsx
import ServicePage from '../components/ServicePage/ServicePage';
import PropTypes from 'prop-types';

const Nisan = ({ services }) => {
    const nisanPackages = [
        {
            title: "Temel Nişan Paketi",
            features: [
                "Nişan masası düzenlemesi",
                "Çiçek aranjmanları",
                "Fotoğraf çekimi"
            ],
            isBasic: true,
            isRecommended: false
        },
        {
            title: "Standart Nişan Paketi",
            features: [
                "Temel paket içeriği",
                "Özel mekan düzenlemesi",
                "Profesyonel fotoğraf ve video",
                "Nişan pastası"
            ],
            isStandard: true,
            isRecommended: false
        },
        {
            title: "Premium Nişan Paketi",
            features: [
                "Standart paket içeriği",
                "VIP mekan kiralama",
                "Lüks ikramlar",
                "Canlı müzik",
                "Profesyonel etkinlik yönetimi"
            ],
            isRecommended: true
        }
    ];

    // Nişan organizasyonu için resim galerisi
    const nisanGalleryImages = [
        "https://www.eliteworldhotels.com.tr/upload/blog/d75e2b673ae64d088a0ab58e8a29a9c3.jpg",
        "https://www.dugun.com/sites/default/files/2023-10/grand-hyatt-istanbul-nisanlandik-4.jpg",
        "https://www.swissotel.com.tr/assets/0/92/3686/3768/3770/6442451513/ae6c1a8d-77dc-4c78-be94-97eefc1077c3.jpg",
        "https://www.dugun.com/sites/default/files/2023-04/nishan-dugun-evi-7.jpg",
        "https://i.dugun.com/gallery/64882/preview_esila-wedding-hall_SXvX9xVf.jpg"
    ];

    // Nişan organizasyonu seçenekleri
    const nisanOptions = [
        {
            title: "Mekan Seçeneği",
            options: [
                { label: "Otel Salonu", value: "hotel" },
                { label: "Düğün Salonu", value: "wedding-hall" },
                { label: "Kır/Bahçe", value: "garden" },
                { label: "Restaurant", value: "restaurant" }
            ]
        },
        {
            title: "Misafir Sayısı",
            options: [
                { label: "50 kişiye kadar", value: "50" },
                { label: "51-100 kişi", value: "100" },
                { label: "101-200 kişi", value: "200" },
                { label: "200+ kişi", value: "200+" }
            ]
        },
        {
            title: "İkram Seçenekleri",
            options: [
                { label: "Çerez & Tatlı", value: "snacks" },
                { label: "Açık Büfe", value: "buffet" },
                { label: "Yemekli Menü", value: "dinner" },
                { label: "Premium İkramlar", value: "premium" }
            ]
        },
        {
            title: "Müzik & Eğlence",
            options: [
                { label: "Playlist", value: "playlist" },
                { label: "DJ", value: "dj" },
                { label: "Canlı Müzik", value: "live-music" },
                { label: "Orkestra", value: "orchestra" }
            ]
        },
        {
            title: "Dekorasyon",
            options: [
                { label: "Temel Dekorasyon", value: "basic" },
                { label: "Standart Dekorasyon", value: "standard" },
                { label: "Lüks Dekorasyon", value: "luxury" },
                { label: "Özel Tasarım", value: "custom" }
            ]
        }
    ];

    return (
        <ServicePage 
            services={services} 
            pageTitle="Nişan Organizasyonu" 
            packageOptions={nisanPackages}
            galleryImages={nisanGalleryImages}
            serviceOptions={nisanOptions}
        />
    );
};

Nisan.propTypes = {
    services: PropTypes.array.isRequired
};

export default Nisan;