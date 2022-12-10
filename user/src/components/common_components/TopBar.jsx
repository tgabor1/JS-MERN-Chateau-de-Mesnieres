import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/adminComponent.scss";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="topBar">

      <DropdownButton className="dropdown-basic-button" title="LE CHATEAU">
        <Dropdown.Item href="Visiter">VISITER</Dropdown.Item>
        <Dropdown.Item href="ParcEtDomaine">PARC & DOMAINE</Dropdown.Item>
        <Dropdown.Item href="Histoire">HISTOIRE</Dropdown.Item>
        <Dropdown.Item href="LeGrandIncendie">LE GRAND INCENDIE</Dropdown.Item>
      </DropdownButton>

      <Button className="btn_nav" onClick={() => navigate("LouerNosSalles")}>LOUER NOS SALLES</Button>

      <Button className="btn_nav" onClick={() => navigate("SeRestaurer")}>SE RESTAURER</Button>

      <DropdownButton title="DORMIR">
        <Dropdown.Item href="GitesCollectif">GITES COLLECTIF</Dropdown.Item>
        <Dropdown.Item href="ChambresDuChateau">CHAMBRE DU CHATEAU</Dropdown.Item>
      </DropdownButton>

      <DropdownButton title="NOS ARTICLES">
        <Dropdown.Item href="Evenements">EVENEMENTS </Dropdown.Item>
        <Dropdown.Item href="Presse">PRESSE</Dropdown.Item>
      </DropdownButton>

      <Button className="btn_nav" onClick={() => navigate("NousContacter")}>CONTACT</Button>
    </nav>
  );
};

export default TopBar;
