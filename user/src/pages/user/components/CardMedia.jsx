import { Container } from "react-bootstrap";
import TextTruncate from "react-text-truncate";
import "../../../styles/userComponents.scss";

const CardMedia = ({ name, content, videoYoutube }) => {
  return (
    <Container className="card_media">
      <h4>{name}</h4>
      <div className="card_media_main">
        <TextTruncate
          line={9}
          text={content}
          truncateText="…"
          // textTruncateChild={<a href="#">Read on</a>}
        />
        <iframe
          src={videoYoutube}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

export default CardMedia;
