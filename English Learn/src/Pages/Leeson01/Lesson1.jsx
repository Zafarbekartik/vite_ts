import "./Lessons.css";
import { Routes, Route } from "react-router-dom";

import ThemesLinks from "../../Components/ThemesLinks/ThemesLinks";
import EnglishAplhabet from "./LessonPages01/EngAlpha/EnglishAplhabet";
import PluralKuplik from "./LessonPages01/PluralsKuplik/PluralKuplik";
import Countablenouns from "./LessonPages01/CountableNouns/Countablenouns";
import IrregularPlurs from "./LessonPages01/IrregularPlurs/IrregularPlurs";
import Numbers from "./LessonPages01/Numbers/Numbers";
import WordList from "./LessonPages01/WordList/WordList";
import EngQuestions from "./LessonPages01/EngQuestions/EngQuestions";
import IndefiniteArticles from "./LessonPages01/indefiniteArticles/IndefiniteArticles";
import DemonstrativePronouns from "./LessonPages01/DemonstrativePronouns/DemonstrativePronouns";
import HomeWork from "./LessonPages01/HomeWork/HomeWork";

function Lesson01() {
  const links = [
    "English Alphabet",
    "Plurals - Ko'plik",
    "Countable - UnCountable : Nouns",
    "Irregular Plurs",
    "Word List",
    "Numbers",
    "100 English questions",
    "Indefinite articles",
    "Demonstrative pronouns",

    "Homework",
  ];

  return (
    <div className="lessons">
      <Routes>
        <Route
          index
          element={
            <h2
              style={{
                marginBottom: "50px",
              }}
            >
              Select a page
            </h2>
          }
        />
        <Route path="/English Alphabet" element={<EnglishAplhabet />} />

        <Route path="/Plurals - Ko'plik" element={<PluralKuplik />} />
        <Route
          path="/Countable - UnCountable : Nouns"
          element={<Countablenouns />}
        />
        <Route path="/Irregular Plurs" element={<IrregularPlurs />} />
        <Route path="/Word List" element={<WordList />} />
        <Route path="/Numbers" element={<Numbers />} />
        <Route path="/100 English questions" element={<EngQuestions />} />
        <Route path="/Indefinite articles" element={<IndefiniteArticles />} />
        <Route
          path="/Demonstrative pronouns"
          element={<DemonstrativePronouns />}
        />
        <Route path="/Homework" element={<HomeWork />} />
      </Routes>
      <ThemesLinks links={links} />
    </div>
  );
}

export default Lesson01;
