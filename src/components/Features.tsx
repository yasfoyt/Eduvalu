import React from "react";
import "./features.css";
import StarIcon from "@mui/icons-material/Star";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <h2 className="sub-heading">مميزات المنصه لتسهيل عليك دراستك</h2>
        <hr className="line" />
        <p className="sub-desc">
          يوجد الكثير من المميزات لتسهيل الدراسة علي الطالب وجعله مُستفادًا -
          هذه أهم مميزات المنصة ويوجد الكثير من المميزات يمكنك إكتشافها معنا .
        </p>
        <br />
        <br />
        <div className="features-wrapper">
          <div className="feat">
            <div className="icon-box">
              <StarIcon
                style={{ fontSize: "36px", fontWeight: "900" }}
                className="icon"
              />
            </div>
            <h4 className="feat-name">كورسات مجانية</h4>
            <p className="feat-desc">
              يتم عمل كورسات مجانية في بعض المواد لجميع الطلاب المشتركة في
              المنصة
            </p>
          </div>
          <div className="feat">
            <div className="icon-box">
              <StarIcon
                style={{ fontSize: "36px", fontWeight: "900" }}
                className="icon"
              />
            </div>
            <h4 className="feat-name">كورسات مجانية</h4>
            <p className="feat-desc">
              يتم عمل كورسات مجانية في بعض المواد لجميع الطلاب المشتركة في
              المنصة
            </p>
          </div>
          <div className="feat">
            <div className="icon-box">
              <StarIcon
                style={{ fontSize: "36px", fontWeight: "900" }}
                className="icon"
              />
            </div>
            <h4 className="feat-name">كورسات مجانية</h4>
            <p className="feat-desc">
              يتم عمل كورسات مجانية في بعض المواد لجميع الطلاب المشتركة في
              المنصة
            </p>
          </div>
          <div className="feat">
            <div className="icon-box">
              <StarIcon
                style={{ fontSize: "36px", fontWeight: "900" }}
                className="icon"
              />
            </div>
            <h4 className="feat-name">كورسات مجانية</h4>
            <p className="feat-desc">
              يتم عمل كورسات مجانية في بعض المواد لجميع الطلاب المشتركة في
              المنصة
            </p>
          </div>
          <div className="feat">
            <div className="icon-box">
              <StarIcon
                style={{ fontSize: "36px", fontWeight: "900" }}
                className="icon"
              />
            </div>
            <h4 className="feat-name">كورسات مجانية</h4>
            <p className="feat-desc">
              يتم عمل كورسات مجانية في بعض المواد لجميع الطلاب المشتركة في
              المنصة
            </p>
          </div>
          <div className="feat">
            <div className="icon-box">
              <StarIcon
                style={{ fontSize: "36px", fontWeight: "900" }}
                className="icon"
              />
            </div>
            <h4 className="feat-name">كورسات مجانية</h4>
            <p className="feat-desc">
              يتم عمل كورسات مجانية في بعض المواد لجميع الطلاب المشتركة في
              المنصة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
