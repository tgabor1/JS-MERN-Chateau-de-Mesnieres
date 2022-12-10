import "../../../styles/userComponents.scss";
import { Container, Image } from "react-bootstrap";

const CardRoomToRent = ({presentation}) => {
  return (
    <Container>
        <header></header>
        <article>
            <Image></Image>
            <p>{presentation}</p>
        </article>
    </Container>
  )
}

export default CardRoomToRent