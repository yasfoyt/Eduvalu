import React from "react";
import "./Subjects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useTheme } from "@mui/material/styles";
import { Button, colors } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Subjects = () => {
  const theme = useTheme();
  return (
    <div className="subjects">
      <div className="container">
        <h2 className="sub-heading">المواد الدراسية الموجودة</h2>
        <hr className="line" />
        <p className="sub-desc">
          تتيح المنصة جميع المواد الدراسية لطلاب الشعب العلمية والأدبية وطلاب
          مدارس العربي واللغات.
        </p>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="card-list"
          slidesPerView={4} // Default for large screens
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {[
            { src: "/images/arabic.png", name: "Arabic", Teachers: "1" },
            {
              src: "/images/english.jpeg",
              name: "English",
              Teachers: "2",
            },
            { src: "/images/math.jpg", name: "Math", Teachers: "3" },
            {
              src: "/images/science.avif",
              name: "Science",
              Teachers: "5",
            },
            {
              src: "/images/socialstudies.jpg",
              name: "Social Studies",
              Teachers: "4",
            },
          ].map((item, index) => (
            <SwiperSlide key={index} className="card-item">
              <div className="image">
                <img src={item.src} alt={item.name} />
              </div>
              <div className="info">
                <h3 className="subjectName">{item.name}</h3>
                <h3 className="subjectTeachers">{item.Teachers} مدرسين</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <br />
        <IconButton
          sx={{ color: "white", backgroundColor: "rgba(255, 255, 255, .2)" }}
        >
          <ArrowForwardIcon />
        </IconButton>
        <Button
          sx={{
            color: "white",
            backgroundColor: "rgba(255,255,255,.2)",
            marginRight: 1,
            marginLeft: 1,
            padding: 1,
          }}
        >
          عرض الكل
        </Button>
        <IconButton
          sx={{ color: "white", backgroundColor: "rgba(255, 255, 255, .2)" }}
        >
          <ArrowBackIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Subjects;
