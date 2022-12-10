import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../context/authContext';
import { Button, Form, Image } from 'react-bootstrap';
import "../../../styles/pages.scss";
import axios from 'axios';

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  // change route
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/admin/selection_menu")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
      <section className="login_admin">
        <h2>CONNEXION</h2>
        <article>
          <Image
            src="../../assets/images/stag.png"
            alt="Image d'un cerf"
            width={250}
            height={430}
          ></Image>
          <Form>
            {/* DISPLAY MESSAGE ERROR */}
            {error && <h3>{error.message}</h3>}

            <Form.Group>
              <Form.Label>Pseudo</Form.Label>
              <Form.Control onChange={handleChange} type="text" id="username" name="username" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control onChange={handleChange} type="password" id="password" name="password" />
            </Form.Group>

            <Link id="a_recover_up" to="/admin/login_recover">Vous n'arrivez pas à vous connecter?</Link>

            {/* security */}
            <Button variant="primary" disabled={loading} onClick={handleClick}>
              {/* onClick={() => navigate()} */}
              SE CONNECTER
            </Button>
          </Form>
        </article>
        <Link id="a_recover_down" to="/admin/login_recover">Vous n'arrivez pas à vous connecter?</Link>
      </section>
    </>
  );
};

export default Login;