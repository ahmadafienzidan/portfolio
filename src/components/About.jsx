// src/components/About.js
import React from "react";

const industries = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#B6B09F">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5z" />
        <circle cx="7.5" cy="14.5" r="1.5" />
        <circle cx="16.5" cy="14.5" r="1.5" />
      </svg>
    ),
    text: "Electric Vehicles (EV2W, EV4W, Conversion)",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#B6B09F">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-8-2.14c0 .47-.54.78-1.01.57L8 15.14V13h2.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5H8V9h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H8.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H10v2H8.5c-.55 0-1 .45-1 1v2.61l2.99 1.72c.26.15.51-.04.51-.29V14z" />
      </svg>
    ),
    text: "Web Development & UI Engineering",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#B6B09F">
        <path d="M17.67 6.33C16.42 4.63 14.3 3.5 12 3.5c-3.58 0-6.55 2.61-7.05 6H2v3h2.95c.5 3.39 3.47 6 7.05 6 2.3 0 4.42-1.13 5.67-2.83l-1.42-1.42C15.03 17.09 13.57 18 12 18c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.57 0 3.03.91 3.9 2.36l1.42-1.42C16.42 7.91 14.3 6.8 12 6.8c-2.3 0-4.4 1.1-5.7 2.8H7V9H2v5h5v-1.7h1.3C9.6 15.9 11.7 17 14 17c3.31 0 6-2.69 6-6s-2.69-6-6-6z" />
      </svg>
    ),
    text: "Battery Management Systems (BMS)",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="#B6B09F">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9.1 17.9l-2.1-2.1 1.4-1.4 1.1 1.1 3.4-3.4 1.4 1.4-4.8 4.8z" />
      </svg>
    ),
    text: "Research & Technical Documentation",
  },
];

export default function About() {
  return (
    <section className="flex flex-col mt-16 md:flex-row items-center justify-between gap-8 px-8 sm:px-10 md:px-14 lg:px-16 py-10 backdrop-blur-md">
      {/* Left: Photo & About block */}
      <div className="basis-2/5 w-full flex flex-col gap-4">
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          {/* About Block */}
          <div className="col-span-1 relative bg-[#EAE4D5] rounded-3xl aspect-square">
            <span className="absolute bottom-4 left-4 text-3xl font-semibold text-gray-800">About</span>
          </div>

          {/* Images */}
          <img src="https://asset.kompas.com/crops/G-T3EknTzAA6j1ndXODKE3f2t98=/0x0:900x600/1200x800/data/photo/2022/03/31/62456c8000ebc.jpg" alt="Work" className="rounded-3xl aspect-square object-cover" />
          <img src="https://indopop.id/storage/uploads/2024/11/Kim-Sejeong.jpeg" alt="Project" className="col-span-2 rounded-3xl h-48 w-full object-cover" />
        </div>
      </div>

      {/* Right: Content */}
      <div className="basis-3/5 flex flex-col gap-6 border border-gray-200 rounded-3xl p-8 shadow-inner bg-white">
        <h1 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-6">I'm Ahmad 'Afien Zidan, an Electrical Engineer turned Software Developer</h1>

        <div className="space-y-6 border-b border-gray-100 pb-6">
          <p className="font-light text-gray-600 text-lg leading-relaxed">
            With a strong passion for EV technology and digital solutions. Starting from designing wiring schematics for electric buses to building award-winning electric motorcycles, I now apply the same engineering mindset to the world of
            web development using React, Node.js, and MongoDB.
          </p>
          <p className="font-light text-gray-600 text-lg leading-relaxed">I believe in merging hardware and software to create real-world impact building things that move people, literally and digitally.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Industries I'm Active In:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <span className="shrink-0 mt-1 p-2 bg-[#EAE4D5] rounded-lg">{item.icon}</span>
                <span className="font-light text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
