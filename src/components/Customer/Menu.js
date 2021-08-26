import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/all";
import { Grid, Paper } from "@material-ui/core";
import SingleProduct from "./Main Pages/SingleProduct";

const Menu = () => {
  const [category, setCategoryState] = useState("");
  // useEffect(() => {}, [category]);

  function openFoodList(cat) {
    console.log(cat);
    setCategoryState(cat);
  }

  return (
    <Container fluid={"lg"}>
      <div className="text-center">
        <h1 className="main-titles">Menu</h1>
        <hr className="main-divide" />
      </div>
      <Row className={"p-4"}>
        <Col lg={3}>
          <Card className={"category-card p-3"}>
            <Card.Body>
              <Card.Title>
                <GiHamburgerMenu className={"d-inline"} />
                <span className={"category-title d-inline"}>Categories </span>
              </Card.Title>
              <ButtonGroup className={"category-grp pt-3"} vertical>
                <Button
                  className={"category-btn"}
                  onClick={() => openFoodList("")}
                >
                  All
                </Button>
                <Button
                  className={"category-btn"}
                  onClick={() => openFoodList("Pizza")}
                >
                  Pizza
                </Button>
                <Button
                  className={"category-btn"}
                  onClick={() => openFoodList("Appetizers")}
                >
                  Appetizers
                </Button>
                <Button className={"category-btn"}>Pastas</Button>
                <Button className={"category-btn"}>Desserts</Button>
                <Button className={"category-btn"}>Beverages</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={9}>
          <div className={`tab-content ${category === "" ? "active" : ""}`}>
            <h1 className="food-titles">Any</h1>
            <hr className="food-divide" />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper>
                  <SingleProduct />
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div
            className={`tab-content ${category === "Pizza" ? "active" : ""}`}
          >
            <h1 className="food-titles">Pizza</h1>
            <hr className="food-divide" />
          </div>
          <div
            className={`tab-content ${
              category === "Appetizers" ? "active" : ""
            }`}
          >
            <h1 className="food-titles">Appetizers</h1>
            <hr className="food-divide" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
