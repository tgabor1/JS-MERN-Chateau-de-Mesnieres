import { useNavigate } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import "../../styles/adminComponent.scss";

// rfce for function
const BottomNav = ({name, urlNav}) => {

  const navigate = useNavigate({urlNav});
  return (
    <>
    {/* DISCONNECTING USER */}
    <nav className="bottom_nav">
    <Button onClick={() => navigate(urlNav)}>
        <Image src="../assets/icones/stag.svg" alt="icone de retour vers le menu principal" />
        PAGE D'ACCUEIL
        </Button>

      <span></span>
      <h2>{name}</h2>
    </nav>
    </>
  )
}

export default BottomNav
