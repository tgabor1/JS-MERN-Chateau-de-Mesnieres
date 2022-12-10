import { Row, Form, Col, Button } from "react-bootstrap";
import "../../../styles/components.scss";


const FormPartner = ({ subject, button }) => {

  return (
    <Form className="formA" action="/admin/manage_partners">
      <h2>{subject}</h2>
      <p>
        <span>* </span>Les champs marqués par une étoile sont obligatoires
      </p>

      {/* title */}
      <Row>
        <Col>
          <Form.Group className="mb-4">
            <Form.Label>
              <span>* </span>TITRE
            </Form.Label>
            <Form.Control
              name="partner_title"
              type="text"
              placeholder="exemple: Région Haute Normandie"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      {/* url */}
      <Row>
        <Col>
          <Form.Group className="mb-4">
            <Form.Label>
              <span>* </span>URL
            </Form.Label>
            <Form.Control
              name="partner_url"
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
          <Form.Control type="file" size="lg" name="partner_logo" required />
        </Form.Group>
        </Col>

        {/* article's inner */}
        <Form.Group className="mb-5">
          <Form.Label>
            <span>* </span>CONTENU
          </Form.Label>
          <Form.Control
            name="partner_message"
            className="mb-4"
            as="textarea"
            rows={"5"}
            placeholder="Entrer votre texte..."
            required
          />
        </Form.Group>

      <Button variant="primary" type="submit">
        {button}
      </Button>
    </Form>
  );
}

export default FormPartner;
