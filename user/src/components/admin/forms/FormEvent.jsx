import { Row, Form, Col, Button } from "react-bootstrap";
import "../../../styles/components.scss";


const FormEvent = ({ subject, button }) => {

  return (
    <Form className="formA" action="/admin/manage_event">
      <h2>{subject}</h2>
      <p>
        <span>* </span>Les champs marqués par une étoile sont obligatoires
      </p>

      {/* title */}
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>
              <span>* </span>TITRE
            </Form.Label>
            <Form.Control
              name="event_title"
              type="text"
              placeholder="exemple: Expo au château"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      {/* url */}
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>
              <span className="noAsterix">* </span>URL
            </Form.Label>
            <Form.Control
              name="event_url"
              type="text"
              placeholder="exemple: https://Mesnieres-en-bray.fr"
            />
          </Form.Group>
        </Col>
      </Row>
      {/* date start*/}
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>
              <span>* </span>DATE DE L'EVEMENENT
            </Form.Label>
            <Form.Control name="event_dateStart" type="date" required />
          </Form.Group>
        </Col>
        {/* date end */}
        <Col>
          <Form.Group>
            <Form.Label>
              <Col>
                <span className="noAsterix">* </span>
                <Form.Check
                  inline
                  label="INFORMATIONS COMPLEMENTAIRES"
                  name="infosPlus"
                  type="switch"
                />
              </Col>
            </Form.Label>
            <Form.Control name="event_dateEnd" type="date" />
          </Form.Group>
        </Col>
      </Row>

      {/* image */}
      <Col>
        <Form.Group controlId="formFileLg" className="mb-5">
          <Form.Label>
            <span>* </span>INSERER UNE IMAGE
          </Form.Label>
          <Form.Control type="file" size="lg" name="event_img" required />
        </Form.Group>

        {/* article's inner */}
        <Form.Group className="mb-4">
          <Form.Label>
            <span>* </span>CONTENU
          </Form.Label>
          <Form.Control
            name="event_message"
            className="mb-4"
            as="textarea"
            rows={"10"}
            placeholder="Entrer votre texte..."
            required
          />
        </Form.Group>
      </Col>

      {/* radios one answer submit */}
      <Form.Group as={Row} className="mb-5">
        <Form.Label className="mb-4">
          <span>* </span>TYPE D'EVENEMENT:
        </Form.Label>

                <Row>
                  <Col>
              <Form.Check
                type="radio"
                label="CULTURE"
                value="culture"
                name="event_check"
                className="radio"
              />
                  </Col>
                  <Col>
              <Form.Check
                type="radio"
                label="SPORT"
                value="sport"
                name="event_check"
                className="radio"
              />
                  </Col>
                  <Col>
              <Form.Check
                type="radio"
                label="CONCERT"
                value="concert"
                name="event_check"
                className="radio"
              />
                  </Col>
                  <Col>
              <Form.Check
                type="radio"
                label="PATRIMOINE"
                value="patrimoine"
                name="event_check"
                className="radio"
              />
                  </Col>
                  <Col>
              <Form.Check
                type="radio"
                label="FESTIVAL"
                value="festival"
                name="event_check"
                className="radio"
              />
                  </Col>
                  <Col>
              <Form.Check
                type="radio"
                label="NATURE"
                value="nature"
                name="event_check"
                className="radio"
              />
              </Col>
              </Row>
      </Form.Group>

      {/* INFOS + */}
      <Form.Group as={Row} className="mb-4">
        <Col>
          <Form.Check
            className="mb-3"
            inline
            label="INFORMATIONS COMPLEMENTAIRES"
            name="infosPlus"
            type="switch"
          />
        </Col>
        <Row>
          {/* phone */}
          <Col>
            <Form.Group className="mb-4">
              <Form.Label>
                <span className="noAsterix">* </span>TELEPHONE
              </Form.Label>
              <Form.Control
                name="phone"
                type="event_tel"
                placeholder="exemple: 02 32 00 00 00"
              />
            </Form.Group>
          </Col>
          {/* email */}
          <Col>
            <Form.Group className="mb-4">
              <Form.Label>
                <span className="noAsterix">* </span>E-MAIL
              </Form.Label>
              <Form.Control
                name="email"
                type="event_email"
                placeholder="exemple: dupont@chateau.com"
              />
            </Form.Group>
          </Col>
        </Row>
        {/* last call for the date */}
        <Form.Group className="mb-5">
          <Form.Label>
            <span className="noAsterix">* </span>DATE LIMITE
          </Form.Label>
          <Form.Control
            className="inputhalf"
            name="event_dateLastCall"
            type="date"
          />
        </Form.Group>
      </Form.Group>

      <Button variant="primary" type="submit">
        {button}
      </Button>
    </Form>
  );
}

export default FormEvent;
