import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import bgImg from "../../../assets/servicebg.webp"; // use your uploaded image path

const testimonials = [
  {
    title: "Finance Analysis Report",
    text: "I got a report from Jyotish Gyani Ji about my finances for the next 5 years. It’s been really...",
    name: "Shivam",
  },
  {
    title: "Premium Personalized Kundali",
    text: "During the most challenging phase of my life... Through a careful examination of my Kundali...",
    name: "Roshni",
  },
  {
    title: "Call Consultation",
    text: "I recently had a call consultation with Jyotish Gyani... His advice and insights were on point...",
    name: "Sonali",
  },
  {
    title: "Finance Consultation Report",
    text: "I received a Finance Analysis Report... It gave me useful tips for making better financial decisions...",
    name: "Raju",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <h2 className="text-4xl text-center font-serif text-[#6e0000] mb-10">
        Happy Client Testimonials
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#6e0000] p-6 rounded-md h-full flex items-center justify-center">
                <div className="bg-white text-center p-6 rounded-md relative">
                  <h3 className="font-semibold text-lg mb-4 text-[#6e0000]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">{item.text}</p>
                  <p className="text-sm font-semibold text-gray-800">
                    – {item.name}
                  </p>
                  {/* bottom triangle */}
                  <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
