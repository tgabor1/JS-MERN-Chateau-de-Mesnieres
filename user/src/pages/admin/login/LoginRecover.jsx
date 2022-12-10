import { Button, Form, Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import "../../../styles/pages.scss";

const LoginRecover = () => {

  // change route
  const navigate = useNavigate();
  return (
    <>
    <Btnreturn urlCard="/admin/Login" />

    <section className="login_admin">
    <h2>MOT DE PASSE OU IDENTIFIANT PERDU</h2>
    <article>
      <Image src="../../assets/images/stag.png" alt="Image d'un cerf"></Image>
      <Form>
                  {/* DISPLAY MESSAGE ERROR */}
      <h3>Votre e-mail n’est pas reconnu par la base de donnée.</h3>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='admin_email'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control type="date" name='admin_birthday'/>
        </Form.Group>

        {/* security */}
        <Button className="btn_login" variant="primary" onClick={() => navigate("/admin/login_recover_userDB")}>
        ENVOYER
        </Button>
      </Form>
    </article>
  </section>
  </>
  )
}

export default LoginRecover