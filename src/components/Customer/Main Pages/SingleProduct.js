import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { MdAddShoppingCart } from "react-icons/all";
import { Modal, Form, ToggleButton } from "react-bootstrap";

const SingleProduct = (props) => {
  const [model, setModelView] = useState(false);
  const [count, setCount] = useState(0);

  function increamentCount() {
    setCount(count + 1);
  }
  function decreamentCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const handleClose = () => setModelView(false);
  const handleShow = () => setModelView(true);
  return (
    <div>
      <Card>
        <CardMedia
          style={{ borderStyle: "none" }}
          component="img"
          height="190"
          image=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom component="h2">
            Lizard
          </Typography>
          <Typography
            style={{ fontSize: "12px" }}
            color="textSecondary"
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography
            style={{ fontSize: "11px", textAlign: "end" }}
            component="div"
            color="textSecondary"
          >
            Starting From :{" "}
            <Typography color="textPrimary" component="span">
              Rs. 2000
            </Typography>
          </Typography>
        </CardContent>
        <div className="d-flex justify-content-around ">
          <Button
            size="small"
            style={{ backgroundColor: "#70a401", color: "white" }}
            className={"m-2"}
          >
            Customize
          </Button>
          <Button
            style={{ backgroundColor: "#e13340", color: "white" }}
            size="small"
            color="primary"
            className={"m-2"}
            startIcon={<MdAddShoppingCart />}
            onClick={handleShow}
          >
            Add
          </Button>
        </div>
      </Card>
      <Modal show={model} onHide={handleClose} animation={true}>
        <Modal.Header>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Select Size</Form.Label>
          <Form.Group>
            {" "}
            <Select
            // value={selectedOption}
            // onChange={this.handleChange}
            // options={options}
            />
          </Form.Group>
          <div className={"d-flex justify-content-center pt-3"}>
            <Button onClick={increamentCount}>+</Button>
            <span
              className={"p-2"}
              style={{
                fontSize: "18px",
                fontStyle: "bolder",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              {count}
            </span>
            <Button onClick={decreamentCount}>-</Button>
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            startIcon={<MdAddShoppingCart />}
            type={"submit"}
            // onClick={handleClose}
            style={{ backgroundColor: "#e13340", color: "white" }}
          >
            Add
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleProduct;
