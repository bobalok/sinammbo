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
    { name: "obs1.jpg", title: "Power Plant Civil Works" },
    { name: "obs2.jpg", title: "Grid Substation" },
    { name: "obs3.jpg", title: "Pre Fab Steel Structure" },
    { name: "obs4.jpg", title: "Sheet Piling Work" },
    { name: "obs5.jpg", title: "Pre Cast Piling Work" },
    { name: "obs6.jpg", title: "Water Intake Stucture" },
    { name: "obs7.jpg", title: "Iron Removal Plant" },
    { name: "obs8.jpg", title: "Effluent Treatment Plant" },
    { name: "obs9.jpeg", title: "Soil Filling & Improvement" },
    { name: "obs10.jpg", title: "Cyclone Shelter" },
    { name: "obs11.jpg", title: "Factory Building" },
    { name: "obs12.jpg", title: "Commercial Building" },
    { name: "obs13.jpg", title: "Apartment Building" },
    { name: "obs14.jpg", title: "Single Unit Residence Building" },
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
              {OurBSectPhotos.map((item) => (
                <SwiperSlide className='mySwiperSlide relative' key={item.name}>
                  <Image
                    className='rounded-lg'
                    src={`/images/slider-images/OurBSect/${item.name.toString()}`}
                    height={300}
                    width={450}
                    placeholder='blur'
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAbEAEAAgIDAAAAAAAAAAAAAAABAAMCBAURQf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AtuctulYl3S5eBERFL//Z'
                    quality='50'
                  />
                  <h4 className='absolute inset-x-0 bottom-0 w-full bg-blue-900/90 text-white rounded-b-lg'>
                    {item.title}
                  </h4>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBSect;
