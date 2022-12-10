import { Row, Form, Col, Button } from "react-bootstrap";
import "../../../styles/components.scss";

// rfce for function
const FormNews = ({subject, button}) => {
  return (
    <>
    <Form className="formA" action="/admin/manage_news">
      <h2>{subject}</h2>
      <p>
        <span>* </span>Les champs marqués par une étoile sont obligatoires
      </p>

      {/* radios one answer submit */}
      <Form.Group as={Row} className="mb-5">
        <Form.Label className="mb-4">
          <span>* </span>TYPE D'EVENEMENT:
        </Form.Label>

                <Row className="centeredRow">
                  <Col>
              <Form.Check
                type="radio"
                label="PRESSE ECRITE"
                value="presse ecrite"
                name="event_check"
                className="radio"
              />
                  </Col>
                  <Col>
              <Form.Check
                type="radio"
                label="TELEVISION / INTERNET"
                value="television / internet"
                name="event_check"
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
              name="news_title"
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
          <Form.Group className="mb-5">
            <Form.Label>
              <span className="noAsterix">* </span>URL
            </Form.Label>
            <Form.Control
              name="news_url"
              type="text"
              placeholder="exemple: https://Mesnieres-en-bray.fr"
            />
          </Form.Group>
        </Col>
      </Row>

      {/* image */}
      <Col>
        <Form.Group controlId="formFileLg" className="mb-5 inputhalf">
          <Form.Label>
            <span>* </span>INSERER UNE IMAGE
          </Form.Label>
          <Form.Control type="file" size="lg" name="news_img1" required />
        </Form.Group>
        </Col>
      {/* image 2 */}
      <Col>
        <Form.Group controlId="formFileLg" className="mb-5 inputhalf">
          <Form.Label>
            <span className="noAsterix">* </span>INSERER UNE IMAGE
          </Form.Label>
          <Form.Control type="file" size="lg" name="news_img2" required />
        </Form.Group>

        {/* article's inner */}
        <Form.Group className="mb-5">
          <Form.Label>
            <span>* </span>CONTENU
          </Form.Label>
          <Form.Control
            name="news_message"
            className="mb-4"
            as="textarea"
            rows={"10"}
            placeholder="Entrer votre texte..."
            required
          />
        </Form.Group>
      </Col>

      <Button variant="primary" type="submit">
        {button}
      </Button>
    </Form>
    </>
  )
}

export default FormNews