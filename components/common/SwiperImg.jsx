import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);

const slides = [
    {
        src: '/assets/images/faq/ig-main-img.jpg',
        title: 'Slide 1',
    },
    {
        src: '/assets/images/faq/ig-main-img-2.jpg',
        title: 'Slide 2',
    },
    {
        src: '/assets/images/faq/ig-main-img-3.jpg',
        title: 'Slide 3',
    },
    {
        src: '/assets/images/faq/ig-main-img-4.jpg',
        title: 'Slide 4',
    },
    {
        src: '/assets/images/faq/ig-main-img-5.jpg',
        title: 'Slide 5',
    },
    {
        src: '/assets/images/faq/ig-main-img-6.jpg',
        title: 'Slide 6',
    },
    {
        src: '/assets/images/faq/ig-main-img.jpg',
        title: 'Slide 7',
    },
    {
        src: '/assets/images/faq/ig-main-img-2.jpg',
        title: 'Slide 8',
    },
    {
        src: '/assets/images/faq/ig-main-img-4.jpg',
        title: 'Slide 9',
    },
];

export const SwiperImage = () => {
    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={5}
            autoplay={{
                delay: 3000,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="swiper__img">
                        <Image src={slide.src} alt={slide.title} width={270} height={260} objectFit="cover" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
