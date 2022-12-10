import {  Link } from "react-router-dom";
import "../../../styles/components.scss";

// building card with function
const Card = ({ name, urlCard }) => {
  return (
    <Link to={urlCard} className="card_back">
      <h3>{name}</h3>
      <div className="animation_card"></div>
    </Link>
  );
}

export default Card;
