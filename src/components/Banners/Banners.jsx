import React from 'react'
import './Banners.css'
import useWindowWidth from '../../hooks/useWindowWidth'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import BannersImg from './BannersImg';
import banner1 from '../../assets/banner-1.png'
import banner2 from '../../assets/banner-2.png'
import banner6101 from '../../assets/banner610-1.png'
import banner6102 from '../../assets/banner610-2.png'

const Banners = () => {
  const windowWidth = useWindowWidth()

  return (
    <section className="banners">
      <div className="container">

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className='mySwiper'
        >
          <SwiperSlide>
            {
              windowWidth <= 610
                ? (<BannersImg img={banner6101} alt="Banner" />)
                : (<BannersImg img={banner1} alt="Banner" />)
            }
          </SwiperSlide>

          <SwiperSlide>
          {
              windowWidth <= 610
                ? (<BannersImg img={banner6102} alt="Banner" />)
                : (<BannersImg img={banner2} alt="Banner" />)
            }
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  )
}

export default Banners