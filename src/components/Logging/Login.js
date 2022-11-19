import React, {useState, useEffect} from "react";

import classes from "./Login.module.css";
import { Container, Col, } from "react-bootstrap";
import Button from "../Button/Button";
import Card from "../Card/Card";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isValid, setValid] = useState(false);

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

  const validForm = () => {
    props.storing(isValid);
    props.onLogin();
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
