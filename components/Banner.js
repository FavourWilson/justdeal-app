import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerLogo from '../public/banner.png';
import bannerLogo1 from '../public/banner1.jpeg';
import bannerLogo2 from '../public/banner2.jpg';
import bannerLogo3 from '../public/banner3.jpg';
// import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';

const banner = () => {
  return (
    <div className="mt-8 mb-8 ">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        speed={500}
        loop={true}
        touchRatio={1.5}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Link href="/banna">
            <Image src={bannerLogo} alt="banner" width={918} height={386} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/banna">
            <Image src={bannerLogo1} alt="banner1" width={918} height={386} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/banna">
            <Image src={bannerLogo2} alt="banner2" width={918} height={386} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/banna">
            <Image src={bannerLogo3} alt="banner3" width={916} height={386} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default banner;
