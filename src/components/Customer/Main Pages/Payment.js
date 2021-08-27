import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Table } from "react-bootstrap";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="row">
        <div class="col-75">
          <div className="text-center mb-2">
            <h1 className="form-titles ">Payment</h1>
            <hr className="divide" />
          </div>

          <form id="validate">
            <Card className={"p-5 mb-3"}>
              <h3>Payment</h3>
              <label for="fname">Accepted Cards</label>
              <div class="icon-container">
                <i class="fa fa-cc-visa"></i>
                <i class="fa fa-cc-amex"></i>
                <i class="fa fa-cc-mastercard"></i>
                <i class="fa fa-cc-discover"></i>
              </div>

              <label for="cname">Name on Card</label>
              <input
                type="text"
                id="cname"
                name="cardname"
                placeholder="Soeng Souy"
                required
              />
              <label for="ccnum">Credit card number</label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
                required
              />
              <label for="expmonth">Exp Month</label>
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="September"
                required
              />
              <div class="row">
                <div class="col-50">
                  <label for="expyear">Exp Year</label>
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    placeholder="2021"
                    required
                  />
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="352"
                    required
                  />
                </div>
              </div>

              <label>
                <input type="checkbox" checked="checked" name="sameadr" />{" "}
                Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" class="btn" />
            </Card>
          </form>
        </div>
        <div class="col-25">
          <div class="container">
            <h4>
              Cart{" "}
              <span class="price">
                <i class="fa fa-shopping-cart"></i> <b>4</b>
              </span>
            </h4>
            <p>
              <a href="#">IPHONE 12 Pro Mac</a> <span class="price">$1500</span>
            </p>
            <p>
              <a href="#">SAMSUNG S21</a> <span class="price">$1500</span>
            </p>
            <p>
              <a href="#">OPPO F14</a> <span class="price">$1400</span>
            </p>
            <p>
              <a href="#">HUAWEI 20 Mac</a> <span class="price">$1200</span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span class="price">
                <b>$12600</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
