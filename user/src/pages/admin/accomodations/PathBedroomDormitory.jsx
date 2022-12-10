import { Container } from "react-bootstrap";
import Card from "../../../components/admin/card/Card";
import BottomNav from '../../../components/common_components/BottomNav';
import "../../../styles/pages.scss";

const PathBedroomDormitory = () => {
  return (
    <>
    <BottomNav
    name="CHAMBRES & DORTOIRS"
    urlNav="/admin/selection_menu"
    />

      <Container className="pathBed">
      <h2>Ou souhaitez-vous aller?</h2>
        <div>
        <Card
          name="CHAMBRES CHATEAU"
          urlCard="/admin/manage_bedrooms"
        />
        <Card name="DORTOIRS & CAMPING" urlCard="/admin/manage_dorms_and_camping" />
        </div>
      </Container>
    </>
  )
}

export default PathBedroomDormitory