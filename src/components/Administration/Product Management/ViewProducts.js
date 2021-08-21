import React from 'react'
import { Card, Button, Container, Row, Col, Badge, Form, Dropdown } from "react-bootstrap";
import "../../../stylesheets/ViewProduct.css";

function ViewProducts(props) {
  return <
    Card className={"p-5 mb-3"}>
  <Button className="btn-add" variant="primary">Add</Button>
  <Row className="mb-3">            
              
              <Form.Group as={Col} controlId="formGridState">
                  <Form.Label  >Filter By Category</Form.Label>
              </Form.Group>
          
              <Dropdown className="drop" as={Col}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
          
          
          </Row>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
      <Row className="mb-3">
          <Card.Title>Card Title</Card.Title>
          <Badge bg="secondary">9</Badge>
      </Row>
      <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
      </Card.Text>
          <Row className="mb-3">
              <Button className="btn-edit" as={Col} variant="primary">Edit</Button>
              <Button className="btn-delete" as={Col} variant="primary">Delete</Button>
          </Row>
      </Card.Body>
  </Card>
</Card>;
}

export default ViewProducts;
