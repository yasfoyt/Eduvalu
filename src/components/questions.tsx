import React from "react";
import "./questions.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Questions = () => {
  return (
    <div className="questions">
      <div className="container">
        <h2 className="sub-heading">الاسئلة المتكررة</h2>
        <hr className="line" />
        <p className="sub-desc">
          هذه أكثر الأسئلة التي يسألها الطلاب - يمكنك فتح السؤال ومشاهدة الرد من
          الدعم الفني .
        </p>
        {/* <div className="question">
          <div className="top">
            <h3 className="ques-name">كيفية التواصل مع الدعم الفني</h3>
            <ArrowUpwardIcon className="icon" />
          </div>
          <p className="ques-desc">
            يمكنك التواصل مع الدعم الفني للمنصة من خلال : واتساب :-:- أضغط الآن
            أو من خلال صفحة الفيسبوك :- تواصل معنا
          </p>
        </div> */}
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "rgb(50, 53, 56)",
            color: "white",
            padding: 1.5,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              sx={{ color: "white", fontSize: 20, fontFamily: "Tajawal" }}
            >
              كيفية التواصل مع الدعم الفني للمنصة ؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ color: "white", fontSize: 16, fontFamily: "Tajawal" }}
            >
              يمكنك التواصل مع الدعم الفني للمنصة من خلال : واتساب :-:- أضغط
              الآن أو من خلال صفحة الفيسبوك :- تواصل معنا
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Questions;
