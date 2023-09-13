import "./Countablenouns.css";

function Countablenouns() {
  return (
    <div className="countableNouns">
      <h2>Countable - UnCountable : Nouns</h2>
      <div className="countableUncountable">
        <p>
          Otlar sanaladigan <mark>Countable</mark> va sanalmaydigan{" "}
          <mark>UnCountable</mark> larga bo`linadi
        </p>
        <p>
          Sanaladigan otlar birlikda, ko`plikda bo`lishi mumkin. Ya`ni
          sanaladigan otlarni sonini aniqlash maqsadida.
        </p>
        <p>One bottle - two bottles, three men, four houses</p>
        <table>
          <tbody>
            <tr>
              <td
                colSpan={2}
                style={{
                  padding: "20px 40px",
                  fontSize: "22px",
                  letterSpacing: "2px",
                  borderWidth: "3px",
                }}
              >
                Countable nouns
              </td>
            </tr>
            <tr>
              <td>Egg</td>
              <td>Tuxum</td>
            </tr>
            <tr>
              <td>Apple</td>
              <td>Olma</td>
            </tr>
            <tr>
              <td>Chair</td>
              <td>Stol</td>
            </tr>
            <tr>
              <td>Pen</td>
              <td>Ruchka</td>
            </tr>
            <tr>
              <td>Bag</td>
              <td>Sumka</td>
            </tr>
            <tr>
              <td>Girl</td>
              <td>Qiz bola</td>
            </tr>
            <tr>
              <td>Boy</td>
              <td>O`g`il bola</td>
            </tr>
            <tr>
              <td>Glasses</td>
              <td>Ko`zoynak</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Countablenouns;
