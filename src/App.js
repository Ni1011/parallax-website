import layerBaseImage from "./img/layer-base.png";
import layerFrontImage from "./img/layer-front.png";
import layerMiddleImage from "./img/layer-middle.png";
import layerDungeonImage from "./img/dungeon.jpg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  });
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
            <div className="layers">
              <div className="layer-head">
                <div className="caption">Welcome to Parallex Web</div>
                <div className="title">Dark Forest</div>
              </div>
              <div
                className="img-layer layer-base"
                style={{ backgroundImage: `url(${layerBaseImage})` }}
              ></div>
              <div
                className="img-layer layer-mid"
                style={{ backgroundImage: `url(${layerMiddleImage})` }}
              ></div>
              <div
                className="img-layer layer-front"
                style={{ backgroundImage: `url(${layerFrontImage})` }}
              ></div>
            </div>
          </header>
          <article
            className="article-main"
            style={{ backgroundImage: `url(${layerDungeonImage})` }}
          >
            <div className="m-article-content">
              <h2 className="m-header">Story To Be Continued</h2>
              <p className="m-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="copy">&copy; Ni</div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
