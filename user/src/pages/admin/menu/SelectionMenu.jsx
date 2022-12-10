import { useNavigate } from "react-router-dom";
import { Image, Container, Button } from "react-bootstrap";
import Card from "../../../components/admin/card/Card";
import "../../../styles/pages.scss";

const SelectionMenu = () => {

  const navigate = useNavigate();
  return (
    <>
      {/* DISCONNECTING USER */}
      <nav className="nav_SelectionMenu">

      <Button onClick={() => navigate("/admin/login")}>
          <Image src="../../assets/icones/off.svg" alt="icone de deconnexion" />
          DECONNEXION
          </Button>
      </nav>

      <main className="main_SelectionMenu">
        <Container fluid>
          {/* USER: GRAB USER FIRSTNAME */}
          <p>
            Bonjour !<br />
            Par ou souhaitez-vous commencer?
          </p>
        </Container>

        <Container fluid>
          <Card name="NOUVEAU MODERATEUR" urlCard="/admin/manage_moderator" />
          <Card name="EVENEMENTS & PRESSE" urlCard="/admin/path_events&news" />
          <Card name="NOS PARTENAIRES" urlCard="/admin/manage_partners" />
          <Card name="EMPLOIS & STAGES" urlCard="/admin/manage_hire"/>
          <Card name="VISITER" urlCard="/admin/visit_castle" />
          <Card name="HEBERGEMENT" urlCard="/admin/path_bedroom&dormitory" />
          <Card name="LOUER NOS SALLES" urlCard="/admin/rent_rooms" />
          <Card name="RESTAURATION" urlCard="/admin/path_food" />
        </Container>
      </main>
    </>
  );
};

export default SelectionMenu;
