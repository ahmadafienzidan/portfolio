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
    <section className="px-8 py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-8 bg-[url('/coffee-texture.png')] mix-blend-multiply"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-coffee-medium/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-400/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300/10 rounded-full blur-xl animate-pulse"></div>

      <div className="absolute top-20 right-20 w-8 h-12 bg-coffee-dark/5 rounded-full transform rotate-45"></div>
      <div className="absolute bottom-32 left-16 w-6 h-10 bg-coffee-medium/5 rounded-full transform rotate-12"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-coffee-dark font-cursive mb-4">Fresh Achievements</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-coffee-medium to-amber-400 mx-auto rounded-full"></div>
          <p className="text-coffee-medium/70 mt-4 text-lg">Perfectly roasted accomplishments</p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          centeredSlides
          slidesPerView={3}
          spaceBetween={32}
          speed={800}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-12"
        >
          {achievements.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[280px] group cursor-pointer">
                <div className="h-full bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/80 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Card background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-16 h-16 border border-coffee-light rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-amber-300 rounded-full"></div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200/0 to-orange-200/0 group-hover:from-amber-200/20 group-hover:to-orange-200/20 rounded-3xl transition-all duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon with coffee-themed styling */}
                    <div className="mb-6 text-coffee-medium group-hover:text-coffee-dark transition-colors duration-300 transform group-hover:scale-110">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">{item.icon}</div>
                    </div>

                    {/* Achievement title */}
                    <h4 className="text-xl font-bold mb-3 text-coffee-dark leading-tight group-hover:text-coffee-medium transition-colors duration-300">{item.title}</h4>

                    {/* Description */}
                    <p className="text-coffee-medium/80 font-light leading-relaxed text-sm group-hover:text-coffee-medium transition-colors duration-300">{item.desc}</p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coffee-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Decorative coffee cups */}
        <div className="flex justify-center items-center mt-8 space-x-4 opacity-30">
          <div className="w-4 h-4 bg-coffee-medium rounded-full"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-3 h-3 bg-coffee-light rounded-full"></div>
          <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
          <div className="w-4 h-4 bg-coffee-medium rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
