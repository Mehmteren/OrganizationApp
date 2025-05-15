import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Album.css';

const Album = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    
    return (
        <div className='album-container'>
            <div className="memories-title">
                <h1>Anılar</h1>
                <p>Sevdiğimiz anlardan bazıları</p>
            </div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://www.acharmingfete.com/wp-content/uploads/2023/04/mp-4-2048x1536.jpg" alt="Grandeur Wedding" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://saradoesseo.com/wp-content/uploads/2024/10/wedding-planner-seo-1024x720.jpg" alt="Ifa and Karim" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://cdn0.weddingwire.com/review/6104/original/1280/jpg/4394016.webp" alt="David and Katya" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://www.acharmingfete.com/wp-content/uploads/2024/03/ringling-museum-wedding-florida-wedding-planner-destination-2048x1363.jpg" alt="Polish Royal Wedding" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://veronicapranzosevents.com/wp-content/uploads/2023/10/0cbb0ea6-7cb9-46c4-a5cd-c6a06e148db2-e1697426072628.jpg" alt="GreenVile wedding" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Album;