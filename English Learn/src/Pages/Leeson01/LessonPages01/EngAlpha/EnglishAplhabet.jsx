import "./EnglishAlphabet.css";

function EnglishAplhabet() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="alphabet">
      <h2>English Alphabet</h2>
      <ul className="alphabetUl">
        {alphabet.map((letter) => {
          return (
            <li className="letterLi" key={letter}>
              <h3>{letter} </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EnglishAplhabet;
