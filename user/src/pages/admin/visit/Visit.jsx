import Accordion from "react-bootstrap/Accordion";
import { Row, Form, Col, Button } from "react-bootstrap";
import BottomNav from '../../../components/common_components/BottomNav';
import "../../../styles/pages.scss";

const Rent = () => {
  return (
    <>
      <BottomNav name="EDITER LES VISITES"
      urlNav="/admin/selection_menu" />

      <Accordion defaultActiveKey="0" className="manageRoom" flush>
        {/* visiting hours*/}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Horaires des visites</Accordion.Header>
          <Accordion.Body>
            <Form className="formAccomodation">
              <p>
                <span>* </span>Les champs marqués par une étoile sont
                obligatoires
              </p>

              <Form.Group className="mb-5">
                <Row>
                  <Col>
                    <Form.Label>
                      <span>* </span>MOIS DEBUT DES VISITES
                    </Form.Label>
                    <Form.Select aria-label="Default select example" required>
                      <option>-</option>
                      <option value="1">Janvier</option>
                      <option value="2">Février</option>
                      <option value="3">Mars</option>
                      <option value="4">Avril</option>
                      <option value="5">Mais</option>
                      <option value="6">Juin</option>
                      <option value="7">Juillet</option>
                      <option value="8">Août</option>
                      <option value="9">September</option>
                      <option value="10">Octobre</option>
                      <option value="11">Novembre</option>
                      <option value="12">Décembre</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>
                      <span>* </span>MOIS FIN DES VISITES
                    </Form.Label>
                    <Form.Select aria-label="Default select example" required>
                      <option>-</option>
                      <option value="1">Janvier</option>
                      <option value="2">Février</option>
                      <option value="3">Mars</option>
                      <option value="4">Avril</option>
                      <option value="5">Mais</option>
                      <option value="6">Juin</option>
                      <option value="7">Juillet</option>
                      <option value="8">Août</option>
                      <option value="9">September</option>
                      <option value="10">Octobre</option>
                      <option value="11">Novembre</option>
                      <option value="12">Décembre</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-5">
                <Row>
                  <Col>
                    <Form.Group className="mb-4">
                      <Form.Label>
                        <span>* </span>HEURE OUVERTURE
                      </Form.Label>
                      <Form.Control type="time_hourstart" required />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4">
                      <Form.Label>
                        <span>* </span>HEURE FERMETURE
                      </Form.Label>
                      <Form.Control type="time_hourend" required />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>

              <Button variant="primary" type="submit">
                MODIFIER
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>


        {/* calendar */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Dates d'ouverture des visites</Accordion.Header>
          <Accordion.Body>{/* import form */}</Accordion.Body>
        </Accordion.Item>


        {/* events */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Evenements</Accordion.Header>
          <Accordion.Body>{/* import form */}</Accordion.Body>
        </Accordion.Item>


        {/* prices to visit */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Tarifs des visites</Accordion.Header>
          <Accordion.Body>
            {" "}
            <Form className="formAccomodation">
              {" "}
              {/* price per vsit */}
              <Form.Group className="mb-5">
                <Row>
                  <Col>
                    <Form.Label>
                      <span>* </span>PRIX VISITE GUIDEE PAR PERSONNE ( € )
                    </Form.Label>
                    <Form.Control
                      name="visit_priceadult"
                      type="number"
                      placeholder="exemple: 10,80"
                      required
                    />
                  </Col>
                  <Col>
                    {/* price group*/}
                    <Form.Label>
                      <span>* </span>PRIX VISITE DE GROUPE ( € )
                    </Form.Label>
                    <Form.Control
                      name="visit_pricegroup"
                      type="number"
                      placeholder="exemple: 10,80"
                      required
                    />
                  </Col>
                </Row>
                <Col>
                  {/* price visit domain */}
                  <Form.Label>
                    <span>* </span>PRIX VISITE PARC ET DOMAINE ( € )
                  </Form.Label>
                  <Form.Control
                    className="halfsize"
                    name="vist_pricegarden"
                    type="number"
                    placeholder="exemple: 10,80"
                    required
                  />
                </Col>
              </Form.Group>
              <Button variant="primary" type="submit">
                MODIFIER
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>


        {/* url bus */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Ligne(s) de bus</Accordion.Header>
          <Accordion.Body>
            <Form className="formAccomodation">
              {/* url */}
              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>
                    <span>* </span>URL BUS EN DIRECTION DE ROUEN
                  </Form.Label>
                  <Form.Control
                    name="bus_urlRouen"
                    type="text"
                    placeholder="exemple: https://www.forgesleseaux.fr/upload/dieppegisors21.pdf"
                    required
                  />
                </Form.Group>
              </Col>
              {/* url */}
              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>
                    <span>* </span>URL BUS EN DIRECTION DE DIEPPE
                  </Form.Label>
                  <Form.Control
                    name="bus_urlDieppe"
                    type="text"
                    placeholder="exemple: https://www.normandie.fr/sites/default/files/2020-06/ligne_71_neufchatel_en_bray_rouen.pdf"
                    required
                  />
                </Form.Group>
              </Col>

              <Button variant="primary" type="submit">
                MODIFIER
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Rent;
