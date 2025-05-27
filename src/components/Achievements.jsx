import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Trophy, Zap, Award, BookOpen, Code, Star } from "./icons/AchievementsIcons";

const achievements = [
  { icon: <Trophy />, title: "1st Place PLN ICE 2023", desc: "Built SAGA & ESA electric motorcycles; top speed 170km/h & 95km/h" },
  { icon: <Award />, title: "Top 10 Finalist PLN ICE 2023", desc: "Innovation & performance in EV motorcycle category" },
  { icon: <Zap />, title: "4th Place PLN ICE 2022", desc: "Converted Yamaha Byson into By-E with high-speed performance" },
  { icon: <BookOpen />, title: "2nd Place Essay Competition @ UNDIKSHA", desc: "Electric mobility innovation in Indonesia" },
  { icon: <Code />, title: "Best Final Project – Sanber Code", desc: "Built NextStep job portal with React and REST API" },
  { icon: <Star />, title: "Top 2 Student – Sanber Code", desc: "Outstanding academic & project performance" },
];

export default function Achievements() {
  return (
    <section className="px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Notable Achievements</h3>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          centeredSlides
          slidesPerView={3}
          spaceBetween={24}
          speed={600}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {achievements.map((item, idx) => (
            <SwiperSlide key={idx}>
              <main className="h-[250px]">
                <div className="h-[200px] bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  {/* <div className="mb-4 text-[#B6B09F]">{item.icon}</div> */}
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </main>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
