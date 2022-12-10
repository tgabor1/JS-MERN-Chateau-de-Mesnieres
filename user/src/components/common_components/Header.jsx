import { Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import "../../styles/adminComponent.scss";

const Header = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <header>
      {location === "admin" ? (
        <>
          <div className="header_back">
            <div>
              <h2>PAGE RESERVEE AU PERSONNEL DU CHATEAU UNIQUEMENT</h2>

              {/* on pages other than login display unlock padlock */}
              <Image
                src="../assets/icones/unlock-padlock.svg"
                alt="Logo cadenas ouvert"
              />
            </div>
            <Image
              src="../assets/photos/castle_back.avif"
              alt="illustration d'une porte de service"
            />
          </div>
        </>
      ) : (
        <>
          <div className="header_front">
            <div>
              <h2>EVENEMENT AU CHATEAU</h2>

              {/* on pages other than login display unlock padlock */}
              <Image src="../assets/icones/mariage.svg" alt="Logo evenement" />
            </div>
            <TopBar />
            <Image
              src="../assets/photos/castle.avif"
              alt="illustration du château"
            />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
