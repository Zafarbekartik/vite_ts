import "./Developer.css"
import devImage from "./dev.png"

function Deweloper() {
  console.log("Developer page")
  return (
    <div className="developer">
      <div className="devAbout">
        <div className="macWindow">
          <div className="yellowCir"></div>
          <div className="redCir"></div>
          <div className="greenCir"></div>
        </div>
        <div className="dev">
          <div className="devImage">
            <img src={devImage} alt="Devimage" width={300} />
          </div>
          <div className="devObjectData">
            <p className="openObj">
              <b className="objName"> Zafarbek </b>
            </p>
            <pre>
              <b className="objKey"> name :</b>{" "}
              <b className="objString"> "Zafarbek Artikboev"</b>,
            </pre>
            <pre>
              <b className="objKey"> age :</b> <b className="objNumber"></b>{" "}
              <b className="objNumber"> 26</b>,
            </pre>
            <pre>
              <b className="objKey openObj"> address :</b>{" "}
              <b className="objKey"> city :</b>{" "}
              <b className="objString"> "Pakhtakor"</b>,
              <b className="objKey">region :</b>{" "}
              <b className="objString closeObj"> "Jizakh"</b>,
            </pre>
            <pre>
              {" "}
              <b className="objKey"> phone number </b> :{" "}
              <b className="objString">"+998 99 022 65 71"</b>,
            </pre>
            <pre>
              <b className="objKey"> email :</b>{" "}
              <b className="objString"> "bironmanbek@gmail.com"</b>,
            </pre>
            <pre>
              <b className="objKey"> job : </b>{" "}
              <b className="objString">"Frontend Developer"</b>,{" "}
            </pre>
            <pre>
              <b className="objKey"> jobLevel : </b>{" "}
              <b className="objString">"Beginner"</b>,
            </pre>
            <pre className="closeObj">
              <b className="objKey"> skills</b> : <b className="objScope">[</b>
              <b className="objString">"HTML5" </b>,
              <b className="objString">"CSS" </b>,
              <b className="objString">"JavaScript" </b>,
              <b className="objString">"WebPack" </b>,
              <b className="objString">"React" </b>,
              <b className="objString">"TypeScript"</b>
              <b className="objScope">]</b>
            </pre>
          </div>
        </div>
        {/* <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          minus, nisi iusto consequatur ex dignissimos officia ab ad illum
          veniam ut nemo. Consectetur facilis omnis optio amet voluptatem velit,
          distinctio quae impedit dignissimos totam explicabo aut id tempora
          fugiat. Perferendis facilis fuga ad quasi. Temporibus quia eligendi
          exercitationem perspiciatis eos.
        </p> */}
      </div>
    </div>
  )
}

export default Deweloper
