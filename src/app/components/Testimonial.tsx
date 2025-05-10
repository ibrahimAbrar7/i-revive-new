"use client";

import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const reviews = [
  {
    name: "Irfan Syed",
    content:
      "Had an excellent experience at i-revive. Dr. Imran gave insightful advice and the practitioners were highly skilled and professional.",
  },
  {
    name: "Latha T",
    content:
      "So hygienic and very friendly staff. You must experience it to understand the care and professionalism they offer. Highly recommended!",
  },
  {
    name: "Ali Akber",
    content:
      "Had my first session at i-Recover. The therapist ensured comfort throughout. Great equipment and excellent service overall.",
  },
  {
    name: "Ash Tqr",
    content:
      "Very clean and professional environment. Staff had a great attitude and I felt respected. Would definitely recommend i-revive!",
  },
  {
    name: "Abdullah Naser",
    content:
      "Excellent care from start to finish. Brought my elderly father and he was treated with kindness. Great experience overall.",
  },
  {
    name: "Nishat Fatima",
    content:
      "The doctor explains everything well and gives session plans. Clinic is neat and organized. Very satisfied with the service.",
  },
  {
    name: "Arshia Tasneen",
    content:
      "Visited after seeing Instagram reviews. Imran sir listened patiently and advised sessions. Staff was friendly and polite.",
  },
  {
    name: "Muneeb Ahmed",
    content:
      "Highly recommend for detox. Everything is hygienic and carefully planned. Only downside is limited car parking space.",
  },
  {
    name: "Syed Afsar",
    content:
      "Amazing hijama experience. Clean and calming environment. I felt relaxed and rejuvenated after the expertly performed session.",
  },
  {
    name: "Afnan Naweed",
    content:
      "As a hijama practitioner myself, I approve this center. It's one of the best in Hyderabad. Will recommend to others.",
  },
  {
    name: "Mohammed Irshaad",
    content:
      "Impressed by the professionalism and cleanliness. The soothing atmosphere added to the overall relaxation. Recommended!",
  },
  {
    name: "Shaik Arsalan",
    content:
      "This place blew me away with their 5-star service. Professional therapists and smooth process. Already booked my next session!",
  },
  {
    name: "Md. Ali",
    content:
      "Was nervous initially, but the staff was so supportive that I felt at ease quickly. Clean and welcoming environment.",
  },
  {
    name: "Sareen Sana",
    content:
      "The calming and healing vibe was noticeable from the entrance. Everything exceeded my expectations. Wonderful experience!",
  },
  {
    name: "Mazhar Mohammad",
    content:
      "Had hijama done before but this was the best. They diagnose first and proceed professionally. I recommend this center.",
  },
  {
    name: "Abdul Muqtadir",
    content:
      "Located centrally, this place offers great service. The doctor is knowledgeable and explains well. A relaxing experience.",
  },
  {
    name: "Faiz Faiz",
    content:
      "A truly rejuvenating hijama session. The ambiance was soothing and the practitioner explained everything clearly.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F2F4F7] py-8 text-center md:px-3 xl:px-12">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-4">
          <Image
            src="/google-logo.png"
            alt="Google Logo"
            width={60}
            height={60}
            className="mb-2"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">5.0</h2>
          <div className="flex justify-center text-yellow-400 my-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <IoIosStar
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-current"
                />
              ))}
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            540: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 rounded-xl bg-white shadow-md h-[190px] lg:h-[300px] xl:h-[270px] flex flex-col justify-between mb-16">
                <div className="text-[#99CC66] text-2xl mb-2">
                  <RiDoubleQuotesR />
                </div>
                <div className="text-sm text-gray-800 pb-4 leading-relaxed text-center">
                  {review.content}
                </div>
                <p className="font-semibold text-gray-900 mt-auto">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex justify-center">
          <Link
            href="https://www.google.com/search?q=i-Revive+Cupping+Clinic+%28Hijama%29+Reviews"
            target="_blank"
            className="bg-primary text-white px-6 py-3 rounded-full border border-green-300 hover:bg-white hover:text-hovershed transition-all duration-300"
          >
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
