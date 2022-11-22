import React, {useContext} from "react";
import classes from "./Home.module.css";
import { Container } from "react-bootstrap";
import Card from "../Card/Card";
import Button from "../Button/Button";
import AuthContext from "../Context/auth-context";

const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <Container>
      <div className={classes.home}>
        <Card>
          <h1>Welcome back...</h1>
          <Button onClick={ctx.onLogOut}>Log out</Button>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
