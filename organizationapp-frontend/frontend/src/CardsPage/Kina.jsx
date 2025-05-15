// CardsPage/Kina/Kina.jsx
import ServicePage from '../components/ServicePage/ServicePage';
import PropTypes from 'prop-types';

const Kina = ({ services }) => {
    const kinaPackages = [
        {
            title: "Temel Kına Paketi",
            features: [
                "Temel kına malzemeleri",
                "4 saat fotoğraf çekimi",
                "Kına gecesi müzik"
            ],
            isBasic: true,
            isRecommended: false
        },
        {
            title: "Standart Kına Paketi",
            features: [
                "Temel paket içeriği",
                "Profesyonel kına organizasyonu",
                "Özel dans gösterisi",
                "Oryantal dansöz"
            ],
            isStandard: true,
            isRecommended: false
        },
        {
            title: "Premium Kına Paketi",
            features: [
                "Standart paket içeriği",
                "VIP kına mekanı",
                "Profesyonel makyaj ve saç",
                "Özel kına kıyafeti",
                "Lüks dekorasyon"
            ],
            isRecommended: true
        }
    ];

    // Kına organizasyonu için resim galerisi
    const kinaGalleryImages = [
        "https://www.arabiaweddings.com/sites/default/files/styles/max980/public/articles/2020/07/ciragan_kempinski_istanbul_2.jpg?itok=_1TlOjFw",
        "https://www.dugun.com/sites/default/files/2023-08/the-pera-istanbul-kina-2.jpg",
        "https://i.dugun.com/gallery/46633/preview_istanbul-wedding-ozel-etkinlik-ve-organizasyon-1_9KYqSz8c.jpg",
        "https://www.swissotel.com.tr/assets/0/92/3686/3768/3770/6442451513/87b25b21-3d4f-4c92-b308-b99b28638332.jpg",
        "https://www.feriyeotel.com/img/large/a0ccc7c5-3e7a-43d9-a9aa-cb1fb23bb1a5.jpg"
    ];

    // Kına organizasyonu seçenekleri
    const kinaOptions = [
        {
            title: "Mekan Seçenekleri",
            options: [
                { label: "Ev Kınası", value: "home" },
                { label: "Kır/Bahçe Kınası", value: "garden" },
                { label: "Salon Kınası", value: "hall" },
                { label: "Otel Kınası", value: "hotel" }
            ]
        },
        {
            title: "Misafir Sayısı",
            options: [
                { label: "30 kişiye kadar", value: "30" },
                { label: "31-70 kişi", value: "70" },
                { label: "71-120 kişi", value: "120" },
                { label: "120+ kişi", value: "120+" }
            ]
        },
        {
            title: "Kına Gecesi Eğlence",
            options: [
                { label: "Geleneksel Müzik", value: "traditional" },
                { label: "DJ", value: "dj" },
                { label: "Kına Ekibi", value: "team" },
                { label: "Profesyonel Dans Gösterileri", value: "dance" }
            ]
        },
        {
            title: "Kına Organizasyon Paketi",
            options: [
                { label: "Sadece Kına Malzemeleri", value: "basic" },
                { label: "Kına + Dekorasyon", value: "decoration" },
                { label: "Kına + Dekorasyon + Pasta", value: "cake" },
                { label: "Tam Organizasyon", value: "full" }
            ]
        },
        {
            title: "Gelin Hazırlık",
            options: [
                { label: "Kendi Hazırlığınız", value: "self" },
                { label: "Saç ve Makyaj", value: "hair-makeup" },
                { label: "Tam Gelin Bakımı", value: "full-bride" },
                { label: "Özel Kına Kıyafeti + Bakım", value: "outfit-care" }
            ]
        }
    ];

    return (
        <ServicePage 
            services={services} 
            pageTitle="Kına Organizasyonu" 
            packageOptions={kinaPackages}
            galleryImages={kinaGalleryImages}
            serviceOptions={kinaOptions}
        />
    );
};

Kina.propTypes = {
    services: PropTypes.array.isRequired
};

export default Kina;