import react from "react";
import "./BestTeacher.css";

const BestTeachers = () => {
  return (
    <div className="bestTeachers">
      <div className="container">
        <h2 className="sub-heading">افضل المدرسين في منصة واحدة</h2>
        <hr className="line" />
        <p className="sub-desc">
          يمكنك التسجيل الآن علي المنصة مجانًا والإشتراك مع نخبة من المدرسين
          المتواجدين لدينا .
        </p>
        <img src="/images/bestteachers.png" alt="" />
      </div>
    </div>
  );
};

export { BestTeachers as Teachers };
