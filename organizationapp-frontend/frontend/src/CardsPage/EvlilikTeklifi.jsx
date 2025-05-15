// CardsPage/Teklif/EvlilikTeklifi.jsx
import ServicePage from '../components/ServicePage/ServicePage';
import PropTypes from 'prop-types';

const EvlilikTeklifi = ({ services }) => {
    const teklifPackages = [
        {
            title: "Temel Teklif Paketi",
            features: [
                "Romantik ortam düzenlemesi",
                "Çiçek aranjmanları",
                "Fotoğraf çekimi"
            ],
            isBasic: true,
            isRecommended: false
        },
        {
            title: "Standart Teklif Paketi",
            features: [
                "Temel paket içeriği",
                "Özel mekan kiralama",
                "Romantik akşam yemeği",
                "Profesyonel fotoğraf ve video"
            ],
            isStandard: true,
            isRecommended: false
        },
        {
            title: "Premium Teklif Paketi",
            features: [
                "Standart paket içeriği",
                "Lüks tekne veya özel mekanda teklif",
                "Canlı müzisyen",
                "Özel tasarım yüzük kutusu",
                "Limuzin veya özel araç hizmeti"
            ],
            isRecommended: true
        }
    ];

    // Evlilik Teklifi organizasyonu için resim galerisi
    const teklifGalleryImages = [
        "https://www.cntraveler.com/gallery/the-most-romantic-places-to-propose-in-the-world",
        "https://cdn0.weddingwire.com/article/2720/3_2/1280/jpg/70272-proposal-feature-macy-marie-photography.jpeg",
        "https://hips.hearstapps.com/hmg-prod/images/marriage-proposal-with-ring-in-box-royalty-free-image-1674159491.jpg",
        "https://cdn0.weddingwire.com/article/9620/3_2/1280/jpg/80269-proposalstocksy-txp7099379jid200.jpeg",
        "https://www.theknot.com/tk-media/images/ea0640a8-1cc2-4e92-9a54-c1688b8a24da~rs_768.h"
    ];

    // Evlilik Teklifi organizasyonu seçenekleri
    const teklifOptions = [
        {
            title: "Teklif Mekanı",
            options: [
                { label: "Restaurant", value: "restaurant" },
                { label: "Özel Dekorasyonlu Oda", value: "room" },
                { label: "Tekne/Yat", value: "boat" },
                { label: "Helikopter Turu", value: "helicopter" },
                { label: "Özel Bir Manzara", value: "landscape" }
            ]
        },
        {
            title: "Teklif Stili",
            options: [
                { label: "Romantik & Sade", value: "romantic" },
                { label: "Sürpriz Parti", value: "surprise-party" },
                { label: "Seyahat Temalı", value: "travel" },
                { label: "Sinema/Film Temalı", value: "movie" }
            ]
        },
        {
            title: "Müzik & Atmosfer",
            options: [
                { label: "Özel Playlist", value: "playlist" },
                { label: "Canlı Müzisyen/Şarkıcı", value: "live-musician" },
                { label: "Yaylı Çalgılar Grubu", value: "strings" },
                { label: "DJ ile Özel Şarkılar", value: "dj" }
            ]
        },
        {
            title: "Fotoğraf & Video",
            options: [
                { label: "Temel Fotoğraf Çekimi", value: "basic-photo" },
                { label: "Profesyonel Fotoğraf + Video", value: "professional" },
                { label: "Drone ile Havadan Çekim", value: "drone" },
                { label: "Premium Paket (Fotoğraf Albümü Dahil)", value: "premium" }
            ]
        },
        {
            title: "Ek Özel Dokunuşlar",
            options: [
                { label: "Çiçek Aranjmanları", value: "flowers" },
                { label: "Özel Mesajlı Havai Fişek Gösterisi", value: "fireworks" },
                { label: "Romantik Akşam Yemeği", value: "dinner" },
                { label: "Lüks Konaklama", value: "accommodation" }
            ]
        }
    ];

    return (
        <ServicePage 
            services={services} 
            pageTitle="Evlilik Teklifi Organizasyonu" 
            packageOptions={teklifPackages}
            galleryImages={teklifGalleryImages}
            serviceOptions={teklifOptions}
        />
    );
};

EvlilikTeklifi.propTypes = {
    services: PropTypes.array.isRequired
};

export default EvlilikTeklifi;