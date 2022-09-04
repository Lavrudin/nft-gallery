import "../Card/style.scss";

import Chip from "../../assets/images/chip.png";
import EllipseCard1 from "../../assets/images/EllipseCard1.png";
import EllipseCard2 from "../../assets/images/EllipseCard2.png";

export function Card(props) {
  return (
    <>
      <div className="card">
        <div className="ellipses">
          <img className="ellipse1" src={EllipseCard1} alt="Ellipse Card" />
          <img className="ellipse2" src={EllipseCard2} alt="Ellipse Card" />
        </div>
        <img className="chip" src={Chip} alt="Chip" />
        <p className="name">{props.name}</p>
      </div>
    </>
  );
}
