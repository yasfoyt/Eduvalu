import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <h2 className="heading">
          واجهتك الاولى <span>للنجاح</span>
        </h2>
        <p>
          منصة Eduvalu هي منصة تهدف إلي تطوير العملية التعليمية لمساعدة الطالب
          في تحقق النجاح في جميع المواد والتفوق بها وذلك من خلال الخدمات التي
          نقدمها.
        </p>
        <a href="" className="outline-btn">
          انشئ حسابك الآن
        </a>
        <a href="" className="filled-btn">
          عرض الكورسات
        </a>
        <br />
        <br />
        <br />
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="card-list" // Use your existing class name
          slidesPerView={4} // Default for large screens
          spaceBetween={30}
          breakpoints={{
            1024: {
              // Large screens
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              // Medium screens
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              // Small screens
              slidesPerView: 2,
              spaceBetween: 15,
            },
            320: {
              // Extra-small screens
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {[
            { src: "/images/1.jpg", name: "Youssef Mohammed" },
            { src: "/images/2.jpg", name: "Youssef Mohammed" },
            { src: "/images/3.jpg", name: "Youssef Mohammed" },
            { src: "/images/3.jpg", name: "Youssef Mohammed" },
            { src: "/images/1.jpg", name: "Youssef Mohammed" },
            { src: "/images/4.jpeg", name: "Youssef Mohammed" },
            { src: "/images/2.jpg", name: "Youssef Mohammed" },
          ].map((item, index) => (
            <SwiperSlide key={index} className="card-item">
              {" "}
              {/* Use your existing class name */}
              <img src={item.src} alt="" />
              <p className="area">Software Engineering</p>
              <h2 className="name">{item.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
