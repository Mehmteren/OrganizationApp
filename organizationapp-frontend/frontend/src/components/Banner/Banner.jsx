import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-image" style={{backgroundImage: "url('https://cdn-europe.dugunbuketi.com/media/43325/conversions/bosphorus-palace-hotel-luxury-%C3%BCsk%C3%BCdar-istanbul-16-lg.jpg')"}}>
                <div className="banner-overlay">
                    <div className="banner-title-container">
                        <h1 className="banner-title-main">YENİ HİKAYENİZDE</h1>
                        <h2 className="banner-title-script">Biz Varız</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;