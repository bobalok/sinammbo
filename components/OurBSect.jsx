import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const OurBSect = () => {
  return (
    <>
      <section className='py-16 text-gray-700'>
        <div className='max-w-screen-xl mx-auto p-4 sm:px-6 lg-px-8'>
          {/* Headline */}
          <div className='max-w-lg'>
            <h2 className='text-3xl font-bold sm:text-4xl'>Our Business</h2>
          </div>
          {/* swiperjs grid */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Swiper>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBSect;
