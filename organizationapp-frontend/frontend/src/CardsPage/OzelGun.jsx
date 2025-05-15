// CardsPage/OzelGun/OzelGun.jsx
import ServicePage from '../components/ServicePage/ServicePage';
import PropTypes from 'prop-types';

const OzelGun = ({ services }) => {
    const ozelGunPackages = [
        {
            title: "Temel Paket",
            features: [
                "Mekan düzenlemesi",
                "Temel dekorasyon",
                "2 saat fotoğraf çekimi"
            ],
            isBasic: true,
            isRecommended: false
        },
        {
            title: "Standart Paket",
            features: [
                "Temel paket içeriği",
                "Özel pasta ve ikramlar",
                "4 saat fotoğraf ve video",
                "DJ hizmeti"
            ],
            isStandard: true,
            isRecommended: false
        },
        {
            title: "Premium Paket",
            features: [
                "Standart paket içeriği",
                "VIP mekan",
                "Lüks catering hizmeti",
                "Tam gün fotoğraf ve video",
                "Özel gösteriler"
            ],
            isRecommended: true
        }
    ];

    // Özel Gün organizasyonu için resim galerisi
    const ozelGunGalleryImages = [
        "https://www.newstrendsway.com/wp-content/uploads/2022/06/party-4.jpg",
        "https://www.eventwala.info/wp-content/uploads/2019/07/Birthday-Party-Organizer-in-Delhi.jpg",
        "https://www.birthdayorganiser.com/admin/uploads/2/Baby-Birthday-Party-Ideas.jpg",
        "https://cdn.eventplanner.net/imgs/xsite140933/content1308013.jpg",
        "https://i.pinimg.com/originals/a1/5d/2c/a15d2c2ea3c24962aa4fe1d86d122a33.jpg"
    ];

    // Özel Gün organizasyonu seçenekleri
    const ozelGunOptions = [
        {
            title: "Etkinlik Türü",
            options: [
                { label: "Doğum Günü", value: "birthday" },
                { label: "Mezuniyet", value: "graduation" },
                { label: "Yıldönümü", value: "anniversary" },
                { label: "Baby Shower", value: "babyshower" },
                { label: "Kurumsal Etkinlik", value: "corporate" }
            ]
        },
        {
            title: "Mekan Seçenekleri",
            options: [
                { label: "Ev Partisi", value: "home" },
                { label: "Restoran/Kafe", value: "restaurant" },
                { label: "Parti Salonu", value: "party-hall" },
                { label: "Açık Hava", value: "outdoor" }
            ]
        },
        {
            title: "İkram Seçenekleri",
            options: [
                { label: "Hafif İkramlar", value: "light" },
                { label: "Standart Menü", value: "standard" },
                { label: "Özel Menü", value: "special" },
                { label: "Kokteyl", value: "cocktail" }
            ]
        },
        {
            title: "Eğlence Seçenekleri",
            options: [
                { label: "Müzik (DJ)", value: "dj" },
                { label: "Canlı Müzik", value: "live-music" },
                { label: "Animatör / Sihirbaz", value: "entertainer" },
                { label: "Özel Aktiviteler", value: "activities" }
            ]
        }
    ];

    return (
        <ServicePage 
            services={services} 
            pageTitle="Özel Gün Organizasyonu" 
            packageOptions={ozelGunPackages}
            galleryImages={ozelGunGalleryImages}
            serviceOptions={ozelGunOptions}
        />
    );
};

OzelGun.propTypes = {
    services: PropTypes.array.isRequired
};

export default OzelGun;