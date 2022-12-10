import {  Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "../../../styles/components.scss";

const cardTime = ({url, date, firstName, lastName}) => {
  return (
    <Link to={url} className="cardTime">
      <div>
        <p>{date}</p>
        </div>
      <div>
        <p>{firstName} &nbsp; &nbsp;</p>
        <p>{lastName}</p>
      </div>
      <div>
        <Image src="../../assets/icones/edit_create.svg" alt="image d'un stylo"/>
      </div>
    </Link>
  )
}

export default cardTime