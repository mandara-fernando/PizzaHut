import React, { Component } from "react";
import { Card, Container, Form, Table, Row } from "react-bootstrap";
import "../../../stylesheets/payment.css";
import Paypal from "./Paypal";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className={"pt-3"}>
        <Card className={"p-5 mb-3"}>
          <div class="card-body">
            <div class="row">
              <div class="col-md-7">
                <div class="left border">
                  <div class="row">
                    <h3 class="header">Payment</h3>
                    <div class="icons">
                     
                      <img src="https://img.icons8.com/color/48/000000/visa.png" />
                      <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                      <img src="https://img.icons8.com/color/48/000000/maestro.png" />
                    </div>
                  </div>
                  <Form>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Cardholder's name:</Form.Label>
                      <Form.Control className="CardHName" type="text" placeholder="Mr.sample" />
                    </Form.Group>
                    <Form.Group controlId="formGridPassword">
                      <Form.Label>Card Number:</Form.Label>
                      <Form.Control className="CardNumber" type="text" placeholder="Card Number" />
                    </Form.Group>
                    <Row className="mb-3">
                      <Form.Label class="col-4">
                        <span>Expiry date:</span>

                        <Form.Control type="text" className="YYMM" placeholder="YY/MM" />
                      </Form.Label>
                      <Form.Label class="col-4">
                        <span>CVV:</span>

                        <Form.Control type="text" id="cvv " className="CVV" placeholder="cvv" />
                      </Form.Label>
                    </Row>
                    <input type="checkbox" id="save_card" class="align-left" />{" "}
                    <Form.Label for="save_card">
                      Save card details to wallet
                    </Form.Label>
                  </Form>

                  <Paypal />
                </div>
              </div>
              <div class="col-md-5">
                <div class="right border">
                  <h3 class="header">Order Summary</h3>
                  <br />
                  <Row class="row item">
                    <div class="col-4 align-self-center">
                      <img class="img-fluid" src="https://i.imgur.com/79M6pU0.png"/>
                    </div>
                    <div class="col-8">
                      <Form.Label class="row">
                        <b>$ 26.99</b>
                      </Form.Label>
                      <Form.Label class="row text-muted">
                        Be Legandary Lipstick-Nude rose
                      </Form.Label>
                      <Form.Label class="row">Qty:1</Form.Label>
                    </div>
                  </Row>
                  <hr />
                  <br />
                  <Row className="row lower">
                    <Form.Label class="col text-left">Subtotal</Form.Label>
                    <Form.Label class="col text-right">$ 46.98</Form.Label>
                  </Row>
                  <Row class="row lower">
                    <Form.Label class="col text-left">Delivery</Form.Label>
                    <Form.Label class="col text-right">Free</Form.Label>
                  </Row>
                  <Row class="row lower">
                    <Form.Label class="col text-left">
                      <b>Total to pay</b>
                    </Form.Label>
                    <Form.Label class="col text-right">
                      <b>$ 46.98</b>
                    </Form.Label>
                  </Row>
                  <Row class="row lower">
                    <div class="col text-left">
                      <a href="#">
                        <u>Add promo code</u>
                      </a>
                    </div>
                  </Row>{" "}
                  <button class="placeOrder">Place order</button>
                  <Form.Label class="text-muted text-center">
                    Complimentary Shipping & Returns
                  </Form.Label>
              
                </div>
              </div>
            </div>
          </div>
          <div> </div>
        </Card>
      </Container>
    );
  }
}

export default Payment;
