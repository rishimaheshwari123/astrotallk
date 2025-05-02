import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Slider = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const work = [
    {
      id: 1,
      image1:
        "https://astroarunpandit.org/wp-content/uploads/2025/03/aap-1600x529-copy.png",
      image2:
        "https://astroarunpandit.org/wp-content/uploads/2025/03/aap-1080x1920-copy-1.png",
    },
    {
      id: 2,
      image1:
        "https://astroarunpandit.org/wp-content/uploads/2025/05/MH-Banner-Desktop.png",
      image2:
        "https://astroarunpandit.org/wp-content/uploads/2025/05/MH-Banner-Mobile.png",
    },
  ];

  const handleSlideChange = () => {
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500);
  };

  return (
    <div className="">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        navigation={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
        onSlideChange={handleSlideChange}
      >
        {work.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <img
              src={item.image1}
              alt="Large screen banner"
              className="w-full h-full object-cover hidden lg:block"
            />
            <img
              src={item.image2}
              alt="Small screen banner"
              className="w-full h-full object-cover block lg:hidden"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
