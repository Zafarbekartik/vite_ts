import "./pluralArticles.css";

function PluralKuplik() {
  return (
    <div className="Plural">
      <h2>Plural - Ko`plik</h2>
      <div className="pluralArticles">
        <p>
          Ko`pchlik otlarga <mark>...s</mark> qo`shish orqali ko`plik hosil
          qilinadi.
        </p>
        <p>
          <mark>s</mark>, <mark>ss</mark>, <mark>sh</mark>, <mark>ch</mark>,{" "}
          <mark>x</mark>, <mark>o</mark> harflari bilan tugagan otlar ko`plikda
          - <mark>...es</mark> oladi.
        </p>
        <p>
          Misol uchun : bus - bus<mark>es</mark>, dress - dress<mark>es</mark>,
          brush - brush<mark>es</mark>, torch - torch<mark>es</mark>, box - box
          <mark>es</mark> tomato - tomato<mark>es</mark>.
        </p>
        <p>
          Lekin ba`zi <mark>o</mark> harfi bilan tugaydigan otlar{" "}
          <mark>...s</mark> ni oladi
        </p>
        <p>
          Misol uchun : radio - radio<mark>s</mark>, piano - piano<mark>s</mark>
          , photo - photo<mark>s</mark>, video - video<mark>s</mark>.
        </p>
        <p>
          So`z oxirida undosh harf va <mark>...y</mark> harfi kelgan otlarga y
          harfini tushirib qoldirib, <mark>...ies</mark> qo`shimchasini
          qo`shamiz. Masalan: one baby - two bab<mark>ies</mark>.
        </p>
        <p>
          Lekin, So`z oxirida unli harf va <mark>...y</mark> kelsa, u holda -{" "}
          <mark>...s</mark> qo`shimchasini o`zi qo`shiladi. Masalan: toy - toy
          <mark>s</mark>.
        </p>
        <p>Ko`pgina otlarning ko`plik shakli shu qoidalar asosida yasaladi.</p>
      </div>
    </div>
  );
}

export default PluralKuplik;
