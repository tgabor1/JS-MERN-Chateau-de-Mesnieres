import { Row, Form, Col, Button } from "react-bootstrap";
import "../../../styles/components.scss";

const FormRentRoom = ({
  room_title,
  room_message,
  room_priceLow,
  room_priceHigh,
  room_access,
  room_maxPers,
  room_minPers,
  room_size,
  room_heating,
  room_cooling,
  room_cocktail,
  room_banquet,
  room_U,
  room_seminary,
}) => {
  return (
    <Form className="formA">
      <p>
        <span>* </span>Les champs marqués par une étoile sont obligatoires
      </p>

      {/* title */}
      <Form.Group>
        <Form.Label>
          <span>* </span>TITRE
        </Form.Label>
        <Form.Control
          name={room_title}
          type="text"
          placeholder="exemple: Suite"
          required
        />
      </Form.Group>

      {/* article's inner */}
      <Form.Group>
        <Form.Label>
          <span>* </span>CONTENU
        </Form.Label>
        <Form.Control
          name={room_message}
          as="textarea"
          rows={"8"}
          placeholder="Entrer votre texte..."
          required
        />
      </Form.Group>

      {/* min people */}
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>
              <span>* </span>NOMBRE DE PERSONNE MIN.
            </Form.Label>
            <Form.Control
              name={room_minPers}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
          <Col>
            {/* max people */}
            <Form.Label>
              <span>* </span>NOMBRE DE PERSONNE MAX.
            </Form.Label>
            <Form.Control
              name={room_maxPers}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      {/* money low season */}
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>
              <span>* </span>PRIX BASSE SAISON ( € )
            </Form.Label>
            <Form.Control
              name={room_priceLow}
              type="number"
              placeholder="exemple: 10,80"
              required
            />
          </Col>
          <Col>
            {/* money high season */}
            <Form.Label>
              <span>* </span>PRIX HAUTE SAISON ( € )
            </Form.Label>
            <Form.Control
              name={room_priceHigh}
              type="number"
              placeholder="exemple: 10,80"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      {/* access */}
        <Form.Group>
          <Form.Label>
            <span>* </span>ACCES
          </Form.Label>
          <Form.Control
            name={room_access}
            as="textarea"
            rows={"3"}
            placeholder="Entrer votre texte..."
            required
          />
        </Form.Group>
      {/* heating cooling radio */}

      {/* radios one answer submit */}
      <Form.Group>
        <Form.Label>
          <span>* </span>BONUS DE LA SALLE
        </Form.Label>

        <Row>
          <Col>
            <Form.Check label="CHAUFFER" name={room_heating} />
          </Col>
          <Col>
            <Form.Check label="CLIMATISER" name={room_cooling} />
          </Col>
        </Row>
      </Form.Group>

      {/* size */}
        <Form.Group className="halfsize">
          <Form.Label>
            <span>* </span>TAILLE DE LA SALLE
          </Form.Label>
          <Form.Control
            name={room_size}
            type="number"
            placeholder="exemple: 100"
            required
          />
        </Form.Group>

      {/* cocktail + banquet*/}
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>
              <span>* </span>MAX PERSONNES: "COCKTAIL"
            </Form.Label>
            <Form.Control
              name={room_cocktail}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
          <Col>
            <Form.Label>
              <span>* </span>MAX PERSONNES: "BANQUET"
            </Form.Label>
            <Form.Control
              name={room_banquet}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      {/* u shape seminary */}
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>
              <span>* </span>MAX PERSONNES: "TABLES U"
            </Form.Label>
            <Form.Control
              name={room_U}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
          <Col>
            <Form.Label>
              <span>* </span>MAX PERSONNES: "SEMINAIRE"
            </Form.Label>
            <Form.Control
              name={room_seminary}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      <Button variant="primary" className="btn2" type="submit">
        MODIFIER
      </Button>
    </Form>
  );
};

export default FormRentRoom;
