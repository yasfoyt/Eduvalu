import React from "react";
import "./Courses.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import { useTheme } from "@mui/material/styles";
import { Button, colors } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Courses = () => {
  const theme = useTheme();
  return (
    <div className="courses">
      <div className="container">
        <h2 className="sub-heading">احدث الكورسات الموجودة في المنصة</h2>
        <hr className="line" />
        <p className="sub-desc">
          تُعرض الكورسات التي تمت إضافتها حديثًا في المنصة
        </p>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="card-list" // Use your existing class name
          slidesPerView={3} // Default for large screens
          spaceBetween={20}
          breakpoints={{
            1024: {
              // Large screens
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              // Medium screens
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              // Small screens
              slidesPerView: 1,
              spaceBetween: 10,
            },
            320: {
              // Extra-small screens
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {[
            {
              src: "public/images/1.jpg",
              name: "Youssef Mohammed",
              classname: "الصف الاول الاعدادي",
              teacherName: "احمد الجوهري",
              teacherSubject: "احياء",
              courseName: "الجيمنج وكيفية التعامل مع المعرقين",
              videos: 4,
              file: 3,
              hws: 7,
              exams: 3,
            },
            {
              src: "/images/2.jpg",
              name: "Youssef Mohammed",
              classname: "الصف الاول الاعدادي",
              teacherName: "احمد الجوهري",
              teacherSubject: "احياء",
              courseName: "الجيمنج وكيفية التعامل مع المعرقين",
              videos: 4,
              file: 3,
              hws: 7,
              exams: 3,
            },
            {
              src: "/images/3.jpg",
              name: "Youssef Mohammed",
              classname: "الصف الاول الاعدادي",
              teacherName: "احمد الجوهري",
              teacherSubject: "احياء",
              courseName: "الجيمنج وكيفية التعامل مع المعرقين",
              videos: 4,
              file: 3,
              hws: 7,
              exams: 3,
            },
            {
              src: "/images/3.jpg",
              name: "Youssef Mohammed",
              classname: "الصف الاول الاعدادي",
              teacherName: "احمد الجوهري",
              teacherSubject: "احياء",
              courseName: "الجيمنج وكيفية التعامل مع المعرقين",
              videos: 4,
              file: 3,
              hws: 7,
              exams: 3,
            },
            {
              src: "/images/1.jpg",
              name: "Youssef Mohammed",
              classname: "الصف الاول الاعدادي",
              teacherName: "احمد الجوهري",
              teacherSubject: "احياء",
              courseName: "الجيمنج وكيفية التعامل مع المعرقين",
              videos: 4,
              file: 3,
              hws: 7,
              exams: 3,
            },
            {
              src: "/images/4.jpeg",
              name: "Youssef Mohammed",
              classname: "الصف الاول الاعدادي",
              teacherName: "احمد الجوهري",
              teacherSubject: "احياء",
              courseName: "الجيمنج وكيفية التعامل مع المعرقين",
              videos: 4,
              file: 3,
              hws: 7,
              exams: 3,
            },
            {
              src: "/images/2.jpg",
              name: "Youssef Mohammed",
              classname: "الصف الاول الاعدادي",
              teacherName: "احمد الجوهري",
              teacherSubject: "احياء",
              courseName: "الجيمنج وكيفية التعامل مع المعرقين",
              videos: 4,
              file: 2,
              hws: 7,
              exams: 3,
            },
          ].map((item, index) => (
            <SwiperSlide key={index} className="card-item">
              {" "}
              {/* Use your existing class name */}
              <img src={item.src} alt="" />
              <h4 className="classname">{item.classname}</h4>
              <div className="teacher">
                <div className="info">
                  <img src="/images/1.jpg" alt="" />
                  <div className="teacher-info">
                    <h5 className="teacherName">{item.teacherName}</h5>
                    <h6 className="teacherSubject">{item.teacherSubject}</h6>
                  </div>
                </div>
                <div className="price">
                  <h5>60 جنيه</h5>
                </div>
              </div>
              <h3 className="courseName">{item.courseName}</h3>
              <div className="course-content">
                <div className="videos">
                  <VideoLibraryIcon />
                  <span>{item.videos} فيديوهات</span>
                </div>
                <div className="files">
                  <DescriptionIcon />
                  <span>{item.file} فايلات</span>
                </div>
                <div className="hws">
                  <AssignmentIcon />
                  <span>{item.hws} واجبات</span>
                </div>
                <div className="exams">
                  <SchoolIcon />
                  <span>{item.exams} اختبارات</span>
                </div>
              </div>
              <a
                href="/"
                className="filled-btn"
                style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}
              >
                عرض تفاصيل الكورس
              </a>
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

export default Courses;
