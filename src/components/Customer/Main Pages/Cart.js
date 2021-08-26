import React from "react";
import { Container } from "react-bootstrap";

function Cart(props) {
  return (
    <Container fluid={"lg"}>
      <div className="text-center">
        <h1 className="main-titles">Cart</h1>
        <hr className="main-divide" />
      </div>
    </Container>
  );
}

export default Cart;
