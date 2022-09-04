import "../src/assets/globalstyle/style.scss";
import "./App.scss";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

import Ellipse from "./assets/images/Ellipse.png";
import RobotChander from "./assets/images/robotichander.png";
import DollarSign from "./assets/images/dollarsign.png";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <main>
          <div className="text-content">
            <h1 className="title">NFT GALLERY</h1>
            <p className="description">
              NFT Gallery is a digital art marketplace powered by Hive, a fast
              aand free blockchain that makes creating and collecting rare
              digital artworks easy and affordable
            </p>
            <div className="button">
              <Button text="Get Started" />
            </div>
            <div className="stats-container">
              <div className="stats">
                <span className="stats-numbers">8K</span>
                <p className="stats-descriptions">AUTHORS</p>
              </div>
              <div>
                <span className="stats-numbers">24K</span>
                <p className="stats-descriptions">BUYERS</p>
              </div>
              <div>
                <span className="stats-numbers">50.6K</span>
                <p className="stats-descriptions">PAINTING</p>
              </div>
            </div>
          </div>
          <div className="images-container">
            <Card name="KISHU RAJ TYAGI" />
            <img src={Ellipse} alt="Ellipse" />
            <img
              className="robotchander"
              src={RobotChander}
              alt="Robot Chander"
            />
            <div className="dollar-sign">
              <img src={DollarSign} alt="Dollar Sign" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
