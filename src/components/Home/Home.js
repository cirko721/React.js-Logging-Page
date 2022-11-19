import classes from "./Home.module.css";
import { Container } from "react-bootstrap";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Home = (props) => {
  return (
    <Container>
      <div className={classes.home}>
        <Card>
          <h1>Welcome back...</h1>
          <Button onClick={props.onLogout}>Log out</Button>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
