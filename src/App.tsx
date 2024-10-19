import react from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { Teachers } from "./components/BestTeachers";
import Subjects from "./components/Subjects";
import Courses from "./components/Courses";
import Books from "./components/Books";
import Features from "./components/Features";
import Questions from "./components/questions";
import Ready from "./components/Ready";

const App = () => {
  return (
    <div className="website">
      <Header />
      <br />
      <Slider />
      <br />
      <Teachers />
      <br />
      <Subjects />
      <br />
      <Courses />
      <br />
      <Books />
      <br />
      <Features />
      <br />
      <Questions />
      <br />
      <Ready />
    </div>
  );
};

export default App;
