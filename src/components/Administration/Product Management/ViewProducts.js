import React, {useEffect, useState} from 'react'
import {
    Card,
    Button,
    Container,
    Row,
    Col,
    Badge,
    Form,
    Dropdown
} from "react-bootstrap";
import "../../../stylesheets/ViewProduct.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
function ViewProducts(props) {

    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8070/products").then(res => {
            setProducts(res.data);
        }).catch((err) => {
            console.log("error=>", err)
        })
    }, [])

    const filterByCategory = (status) => {
        axios.get(`http://localhost:8070/products/filter/${status}`).then(res => {
            setProducts(res.data);
        }).catch((err) => {
            console.log("error=>", err)
        })
    }


    const addNewProduct = () => {
        window.location = "/admin/add-product";
    }

    const removeProduct = (id) => {
        axios.delete(`http://localhost:8070/products//remove/${id}`).then(res => {
            window.location = "/admin/view-products";
            alert("Product Deleted Successfuly");
        }).catch((err) => {
            console.log("error=>", err)
        })
    }


    const viewAll = () => {
        axios.get("http://localhost:8070/products").then(res => {
            setProducts(res.data);
        }).catch((err) => {
            console.log("error=>", err)
        })
    }

    const updateTheProduct = (product) => {
        history.push({
                pathname: `/admin/update-product/${
                product._id
            }`,
            state: {
                product: product
            }
        });
    }

    if (products.length > 0) {
        return (
            <div>

                <Container className="pt-3">
                    <Card className={"p-5 mb-3"}>
                        <Button className="btn-add" variant="primary"
                            onClick={addNewProduct}>Add</Button>
                        <Row className="mb-3">

                            <Form.Group as={Col}
                                controlId="formGridState">
                                <Form.Label>Filter By Category</Form.Label>
                            </Form.Group>

                            <Dropdown className="drop"
                                as={Col}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Filter The Products
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={viewAll}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={
                                        filterByCategory.bind(this, 'favorite')
                                    }>FAVORITE</Dropdown.Item>
                                    <Dropdown.Item onClick={
                                        filterByCategory.bind(this, 'thin crust')
                                    }>THIN CRUST</Dropdown.Item>
                                    <Dropdown.Item onClick={
                                        filterByCategory.bind(this, 'signature')
                                    }>SIGNATURE</Dropdown.Item>
                                    <Dropdown.Item onClick={
                                        filterByCategory.bind(this, 'classic')
                                    }>CLASSIC</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                        </Row>

                        {

                        products.map((product, index) => {
                            return (
                                <div key={index}>

                                    <Card style={
                                        {width: '18rem'}
                                    }>
                                        <Card.Img variant="top"
                                            src={
                                                `http://localhost:3000/images/${
                                                    product.image
                                                }`
                                            }/>
                                        <Card.Body>
                                            <Row className="mb-3">
                                                <Card.Title>{
                                                    product.Title
                                                }</Card.Title>
                                                <Badge bg="secondary">9</Badge>
                                            </Row>
                                            <Card.Text> {
                                                product.title
                                            } </Card.Text>

                                            <Card.Text> {
                                                product.description
                                            } </Card.Text>

                                            <Card.Text>
                                                Rs. {
                                                product.prices.regular
                                            }.00
                                            </Card.Text>
                                            <Row className="mb-3">
                                                <Button className="btn-edit"
                                                    as={Col}
                                                    variant="primary"
                                                    onClick={
                                                        updateTheProduct.bind(this, product)
                                                }>Edit</Button>
                                                <Button className="btn-delete"
                                                    as={Col}
                                                    variant="primary"
                                                    onClick={
                                                        removeProduct.bind(this, product._id)
                                                }>Delete</Button>
                                            </Row>
                                        </Card.Body>
                                    </Card>

                                </div>

                            );

                        })
                    } </Card>
                </Container>
            </div>
        );
    } else {
        return (
            <div>
                <Container className="pt-3">
                    <Card className={"p-5 mb-3"}>
                        <Button className="btn-add" variant="primary"
                            onClick={addNewProduct}>Add</Button>
                        <Row className="mb-3">

                            <Form.Group as={Col}
                                controlId="formGridState">
                                <Form.Label>Filter By Category</Form.Label>
                            </Form.Group>

                            <Dropdown className="drop"
                                as={Col}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Filter The Products
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={viewAll}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={
                                        filterByCategory.bind(this, 'favorite')
                                    }>FAVORITE</Dropdown.Item>
                                    <Dropdown.Item onClick={
                                        filterByCategory.bind(this, 'thin crust')
                                    }>THIN CRUST</Dropdown.Item>
                                    <Dropdown.Item onClick={
                                        filterByCategory.bind(this, 'signature')
                                    }>SIGNATURE</Dropdown.Item>
                                    <Dropdown.Item onClick={
                                        filterByCategory.bind(this, 'classic')
                                    }>CLASSIC</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                        </Row>

                    </Card>
                </Container>
                <h1>
                    There Are No Items To Display In This Category
                </h1>

            </div>
        );
    }

}

export default ViewProducts;
