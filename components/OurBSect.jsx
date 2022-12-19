// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Pagination, Navigation } from "swiper";

import Image from "next/legacy/image";

// loading project images
import slider11 from "../public/images/slider-images/OurBSect/obs1.jpg";
import slider22 from "../public/images/slider-images/2.jpg";
import slider33 from "../public/images/slider-images/3.jpg";

const OurBSect = () => {
  const OurBSectPhotos = [
    "obs1.jpg",
    "obs2.jpg",
    "obs3.jpg",
    "obs4.jpg",
    "obs5.jpg",
    "obs6.jpg",
    "obs7.jpg",
    "obs8.jpg",
    "obs9.jpeg",
    "obs10.jpg",
    "obs11.jpg",
    "obs12.jpg",
    "obs13.jpg",
    "obs14.jpg",
  ];
  return (
    <>
      <section className='py-16 text-gray-700'>
        <div className='max-w-screen-xl mx-auto p-4 sm:px-6 lg-px-8'>
          {/* Headline */}
          <div className='max-w-lg'>
            <h2 className='text-3xl font-bold sm:text-4xl'>Our Business</h2>
          </div>
          {/* swiperjs grid */}
          <div className='pt-8'>
            <Swiper
              slidesPerView={3}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={{
                clickable: true,
              }}
              modules={[Grid, Pagination, Navigation]}
              className='mySwiper'
            >
              {OurBSectPhotos.map((photo) => (
                <SwiperSlide className='mySwiperSlide'>
                  <Image
                    className='rounded-lg relative'
                    src={`/images/slider-images/OurBSect/${photo.toString()}`}
                    height={300}
                    width={450}
                    quality='50'
                  />
                </SwiperSlide>
              ))}
              {/* <SwiperSlide className='w-[450px] h-[300px]'>
                <Image
                  className='rounded-lg'
                  src={slider11}
                  quality='50'
                  placeholder='blur' // Optional blur-up while loading
                  priority
                />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBSect;
