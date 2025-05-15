import ServicePage from '../components/ServicePage/ServicePage';
import PropTypes from 'prop-types';

const Wedding = ({ services }) => {
    const weddingPackages = [
        {
            title: "Temel Düğün Paketi",
            features: [
                "Temel düğün planlaması",
                "8 saat fotoğraf çekimi",
                "DJ hizmeti"
            ],
            isBasic: true,
            isRecommended: false
        },
        {
            title: "Standart Düğün Paketi",
            features: [
                "Temel paket içeriği",
                "Tam düğün koordinasyonu",
                "Profesyonel video çekimi",
                "Çiçek düzenlemeleri"
            ],
            isStandard: true,
            isRecommended: false
        },
        {
            title: "Premium Düğün Paketi",
            features: [
                "Standart paket içeriği",
                "Lüks mekan düzenlemesi",
                "Canlı müzik",
                "Premium catering hizmeti",
                "Limuzin hizmeti"
            ],
            isRecommended: true
        }
    ];
    
    const weddingGalleryImages = [
        "https://weddingpalace.com.tr/wp-content/uploads/2025/02/dugun_organizasyonu_19.jpg",
        "https://i.dugun.com/gallery/3214/preview_hulya-wedding-davet-organizasyon_pIwchmqV.jpg",
        "https://www.organizasyonmerkezi.com/resimleri/dugun/dugun_organizasyonu_24.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMJ_dlz-wLjxuFRJbGHZxzyYK76zGEi8yMQ&s",
        "https://berranosposa.com/wp-content/uploads/2022/11/iStock-1147052765.jpg"
    ];
    
    const weddingOptions = [
        {
            title: "Düğün Mekan Türü",
            options: [
                { label: "Kır Düğünü", value: "outdoor" },
                { label: "Salon Düğünü", value: "indoor" },
                { label: "Kumsal Düğünü", value: "beach" },
                { label: "Otel Düğünü", value: "hotel" }
            ]
        },
        {
            title: "Yemek Seçenekleri",
            options: [
                { label: "Yemeksiz (Sadece İkramlık)", value: "no-food" },
                { label: "Açık Büfe", value: "buffet" },
                { label: "Oturma Düzeni (Set Menü)", value: "seated" },
                { label: "Lüks Menü", value: "luxury" }
            ]
        },
        {
            title: "Müzik Seçenekleri",
            options: [
                { label: "DJ", value: "dj" },
                { label: "Canlı Müzik", value: "live" },
                { label: "Orkestra", value: "orchestra" }
            ]
        },
        {
            title: "Fotoğraf & Video",
            options: [
                { label: "Temel Paket (4 saat)", value: "basic-photo" },
                { label: "Standart Paket (8 saat)", value: "standard-photo" },
                { label: "Premium Paket (Tam Gün + Drone)", value: "premium-photo" }
            ]
        }
    ];
    
    return (
        <ServicePage 
            services={services}
            pageTitle="Düğün Organizasyonu"
            packageOptions={weddingPackages}
            galleryImages={weddingGalleryImages}
            serviceOptions={weddingOptions}
        />
    );
};

Wedding.propTypes = {
    services: PropTypes.array.isRequired
};

export default Wedding;