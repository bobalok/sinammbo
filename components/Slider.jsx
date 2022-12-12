// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay, EffectCreative } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

import Image from "next/legacy/image";

// loading project images
import slider1 from "../public/images/slider-images/1.jpg";
import slider2 from "../public/images/slider-images/2.jpg";
import slider3 from "../public/images/slider-images/3.jpg";
import slider4 from "../public/images/slider-images/4.jpeg";
// import Link from "next/link";

export default function Slider() {
  return (
    <>
      <div id='home' className='relative top-0 w-full mx-auto bg-white'>
        <Swiper
          className='xl:h-[90vh] h-[92vh]'
          modules={[
            // Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
          ]}
          // spaceBetween={20}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          effect='creative'
          slidesPerView={1}
          // navigation
          pagination={{
            clickable: true,
          }}
        >
          {/* slider1 */}
          <SwiperSlide>
            <Image
              className=''
              src={slider1}
              alt='Ashuganj Power Station Company Ltd. site image'
              layout='fill'
              objectFit='cover'
              quality='50'
              placeholder='blur' // Optional blur-up while loading
              priority
            />
            <div className='block inset-0 absolute bg-zinc-900 bg-opacity-70'></div>
            <div className='relative max-w-screen-xl px-4 py-44 mx-auto lg:h-screen lg:items-center lg:flex'>
              <div className='max-w-7xl mx-auto text-left'>
                <h1 className='text-4xl font-bold sm:text-7xl text-white'>
                  WE ARE BETTER THAN JUST ENGINEERING
                </h1>

                {/* <p className='mt-4 sm:leading-relaxed text-xl sm:text-2xl text-white'>
                  Ashuganj Power Station Company Ltd. (APSCL)
                </p> */}

                {/* <div className='flex flex-wrap justify-center gap-4 mt-8'>
                  <Link href='/portfolio'>
                    <a className='block  px-12 py-3 text-lg font-medium text-white hover:text-black border-2 border-white rounded sm:w-auto hover:bg-white transition-all'>
                      See more
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          {/* slider2 */}
          <SwiperSlide>
            <Image
              className=''
              src={slider2}
              alt='North West Power Generation Company Limited (NWPGCL)'
              layout='fill'
              objectFit='cover'
              quality='50'
              placeholder='blur' // Optional blur-up while loading
              priority
            />
            <div className='block inset-0 absolute bg-zinc-900 bg-opacity-70'></div>
            <div className='relative max-w-screen-xl px-4 py-44 mx-auto lg:h-screen lg:items-center lg:flex'>
              <div className='max-w-7xl mx-auto text-left'>
                <h1 className='text-4xl font-bold sm:text-7xl text-white'>
                  OUR REPUTATION IS AS SOLID AS CONCRETE
                </h1>

                {/* <p className='mt-4 sm:leading-relaxed text-xl sm:text-2xl text-white'>
                  North West Power Generation Company Limited (NWPGCL)
                </p> */}

                {/* <div className='flex flex-wrap justify-center gap-4 mt-8'>
                  <Link href='/portfolio'>
                    <a className='block  px-12 py-3 text-lg font-medium text-white hover:text-black border-2 border-white rounded sm:w-auto hover:bg-white transition-all'>
                      See more
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          {/* slider3 */}
          <SwiperSlide>
            <Image
              className=''
              src={slider3}
              alt='North West Power Generation Company Limited (NWPGCL)'
              layout='fill'
              objectFit='cover'
              quality='50'
              placeholder='blur' // Optional blur-up while loading
              priority
            />
            <div className='block inset-0 absolute bg-zinc-900 bg-opacity-70'></div>
            <div className='relative max-w-screen-xl px-4 py-44 mx-auto lg:h-screen lg:items-center lg:flex'>
              <div className='max-w-7xl mx-auto text-left'>
                <h1 className='text-4xl font-bold sm:text-7xl text-white'>
                  WHEN YOU NEED EXPERIENCE, WE HAVE IT COVERED
                </h1>

                {/* <p className='mt-4 sm:leading-relaxed text-xl sm:text-2xl text-white'>
                  North West Power Generation Company Limited (NWPGCL)
                </p> */}

                {/* <div className='flex flex-wrap justify-center gap-4 mt-8'>
                  <Link href='/portfolio'>
                    <a className='block  px-12 py-3 text-lg font-medium text-white hover:text-black border-2 border-white rounded sm:w-auto hover:bg-white transition-all'>
                      See more
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          {/* slider4 */}
        </Swiper>
      </div>
    </>
  );
}
