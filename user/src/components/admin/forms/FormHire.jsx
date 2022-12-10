import { Row, Form, Col, Button } from "react-bootstrap";
import { useState } from "react";
import "../../../styles/components.scss";

const FormPartner = ({ subject, button }) => {
  // display or hide depending of the radio being pushed
  const [show, setShow] = useState(false);
  return (
    <Form className="formA" action="/admin/manage_hire">
      <h2>{subject}</h2>
      <p>
        <span>* </span>Les champs marqués par une étoile sont obligatoires
      </p>

      {/* radios one answer submit */}
      <Form.Group as={Row} className="mb-4">
        <Form.Label className="mb-4">
          <span>* </span>TYPE DE CONTRACT:
        </Form.Label>
        <Row className="center">
          <Col>
            <Form.Check
              onClick={(e) => setShow(true)}
              type="radio"
              label="Stage"
              value="0"
              name="hire_radio"
              className="radio"
            />
          </Col>

          <Col>
            <Form.Check
              onClick={(e) => setShow(true)}
              type="radio"
              label="Saisonier"
              value="1"
              name="hire_radio"
              className="radio"
            />
          </Col>

          <Col>
            <Form.Check
              onClick={(e) => setShow(true)}
              type="radio"
              label="CDD"
              value="2"
              name="hire_radio"
              className="radio"
            />
          </Col>

          <Col>
            <Form.Check
              onClick={(e) => setShow(false)}
              type="radio"
              label="CDI"
              value="3"
              name="hire_radio"
              className="radio"
            />
          </Col>
        </Row>
      </Form.Group>

      {/* title */}
      <Row>
        <Col>
          <Form.Group className="mb-4">
            <Form.Label>
              <span>* </span>TITRE
            </Form.Label>
            <Form.Control
              name="offer_title"
              type="text"
              placeholder="exemple: guide touristique"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      {/* date start*/}
      <Row>
        <Col>
          <Form.Group className="mb-4">
            <Form.Label>
              <span>* </span>DATE D'EMBAUCHE
            </Form.Label>
            <Form.Control name="offer_start" type="date" required />
          </Form.Group>
        </Col>
        {/* date end */}
        <Col>
          {show ? (
            <Form.Group className="mb-5">
              <Form.Label>
                <Col>
                  <span className="noAsterix">* </span>DATE DE FIN DE CONTRAT
                </Col>
              </Form.Label>
              <Form.Control name="offer_end" type="date" required />
            </Form.Group>
          ) : null}
        </Col>
      </Row>

      <Form.Group className="mb-5">
        <Row>
          <Col>
            {/* formation */}
            <Form.Label>
              <span className="noAsterix">* </span>FORMATION
            </Form.Label>
            <Form.Control
              name="offer_studies"
              type="text"
              placeholder="exemple: CAP"
            />
          </Col>
          <Col>
            {/* experience */}
            <Form.Label>
              <span className="noAsterix">* </span>EXPERIENCE
            </Form.Label>
            <Form.Control
              name="offer_experience"
              type="text"
              placeholder="exemple: 2 ans"
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-5">
        <Row>
          <Col>
            {/* languages */}
            <Form.Label>
              <span className="noAsterix">* </span>LANGUE(S)
            </Form.Label>
            <Form.Control
              name="offer_language"
              type="text"
              placeholder="exemple: anglais courant"
            />
          </Col>
          <Col>
            {/* experience */}
            <Form.Label>
              <span className="noAsterix">* </span>NOMBRES D'HEURES PAR SEMAINE
            </Form.Label>
            <Form.Control
              name="offer_hours"
              type="text"
              placeholder="exemple: 35 heures"
            />
          </Col>
        </Row>
      </Form.Group>

      <Col>
        {/* paycheck */}
        <Form.Label>
          <span className="noAsterix">* </span>REMUNERATION
        </Form.Label>
        <Form.Control
          className="halfsize mb-5"
          name="offer_paycheck"
          type="text"
          placeholder="exemple: SMIC"
        />
      </Col>

      {/* article's inner */}
      <Form.Group className="mb-5">
        <Form.Label>
          <span>* </span>DESCRIPTION DU POSTE
        </Form.Label>
        <Form.Control
          name="offer_message"
          className="mb-4"
          as="textarea"
          rows={"10"}
          placeholder="Entrer votre texte..."
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {button}
      </Button>
    </Form>
  );
};

export default FormPartner;
