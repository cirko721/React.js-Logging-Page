import React, {useState, useEffect, useContext} from "react";

import classes from "./Login.module.css";
import { Container, Col, } from "react-bootstrap";
import Button from "../Button/Button";
import Card from "../Card/Card";
import AuthContext from "../Context/auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isValid, setValid] = useState(false);
  const ctx = useContext(AuthContext);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passHandler = (event) => {
    setPass(event.target.value);
  };

  useEffect(() => {
    const time = setTimeout(
    setValid(
      email.includes("@") && pass.length > 6
    ), 500)
    return () => {
      clearTimeout(time);
    };
  }, [email, pass]);

  const validForm = (e) => {
    e.preventDefault();
    ctx.onLogIn(isValid);
  };

  return (
    <Container>
      <form className={classes.form}>
        <Card>
        <Col>
          <div className={classes.mail}>
            <label>Email Adress:</label><br></br>
            <input onChange={emailHandler} type="text" />
          </div>
        </Col>
        <Col>
          <div className={classes.pass}>
            <label>Password:</label><br></br>
            <input onChange={passHandler} type="password" />
          </div>
        </Col>
        <Button onClick={validForm}>Log In</Button>
      </Card>
      </form>
    </Container>
  );
};

export default Login;
