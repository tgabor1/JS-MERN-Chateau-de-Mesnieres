import { Row, Form, Col, Button } from "react-bootstrap";
import "../../../styles/components.scss";

const FormModerator = ({ subject, button}) =>{
  return (
    <Form className="formA" action="/admin/manage_moderator">
      <h2>{subject}</h2>
      <p>
        <span>* </span>Les champs marqués par une étoile sont obligatoires
      </p>
      <Row>
              <Col>
      <Form.Group className="mb-4">
        <Form.Label>
          <span>* </span>NOM
        </Form.Label>
        <Form.Control
          name="user_lastname"
          type="text"
          placeholder="exemple: Dupont"
          required
        />
      </Form.Group>
      </Col>
              <Col>
      <Form.Group className="mb-4">
        <Form.Label>
          <span>* </span>PRENOM
        </Form.Label>
        <Form.Control
          name="user_firstname"
          type="text"
          placeholder="exemple: Jean"
          required
        />
      </Form.Group>
      </Col>
            </Row>

            <Row>
              <Col>
      <Form.Group className="mb-4">
        <Form.Label>
          <span>* </span>DATE DE NAISSANCE
        </Form.Label>
        <Form.Control
          name="user_birthday"
          type="date"
          placeholder="exemple: Dupont"
          required
        />
      </Form.Group>
      </Col>
              <Col>
              <Form.Group className="mb-4">
                  <Form.Label>
                    <span>* </span>E-MAIL
                  </Form.Label>
                  <Form.Control
                    name="user_email"
                    type="email"
                    placeholder="exemple: dupont@chateau.com"
                    required
                  />
                </Form.Group>
      </Col>
            </Row>
              <Col>
      <Form.Group className="mb-5" controlId="formGroupLastName">
        <Form.Label>
          <span>* </span>DATE DE LA FIN DU CONTRAT
        </Form.Label>
        <Form.Control className="inputhalf"
          name="user_endcontract"
          type="date"
          placeholder="exemple: 01/01/1990"
          required
        />
      </Form.Group>
      </Col>

      <Button variant="primary" type="submit">
              {button}
            </Button>

            {/* SEND INFORMATIONS TO DATABASE */}
    </Form>
  );
}

export default FormModerator;
