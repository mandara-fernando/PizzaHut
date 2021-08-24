import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, IconButton, Tooltip } from "@material-ui/core";
import Modal from "./Modal";
import "../../../stylesheets/formTitle.css";
import axios from "axios";

import { Card, Container, Table } from "react-bootstrap";
import {
  FaEdit,
  FaEye,
  FaTrash,
  IoMdAddCircleOutline,
  MdEmail,
} from "react-icons/all";


function ViewUsers(props) {
  
  const [Users, setUsers] = useState([]);
  
  const [showPop, setShowPop] = useState(false);
  const openPop = () => {
    setShowPop((prev) => !prev);
  };

useEffect(() => {
  axios
  .get("http://localhost:8070/api/user-management/display")
  .then((response) => {
    setUsers( response.data );

    console.log(response.data);
  })
  .catch(function (err) {
    console.log(err);
  });
},[]);
  


  return (
    <div>
      <Container className={"pt-3"}>
        <Card className={"p-5 mb-3"}>
          <div className="text-center mb-2">
            <h1 className="form-titles ">USER MANAGEMENT</h1>
            <hr className="divide" />
          </div>
          <div>
            <Table
              striped
              bordered
              hover
              variant="dark"
              className={"text-center"}
            >
              <thead>
                <tr>
                  <th className={"table-data"}>Profile</th>
                  <th className={"table-data"}>User Name</th>
                  <th className={"table-data"}>Role</th>
                  <th>
                    <Tooltip title="Add" placement="top">
                      <IconButton aria-label="delete" href={"/admin/add-user"}>
                        <IoMdAddCircleOutline color={"white"} />
                      </IconButton>
                    </Tooltip>
                  </th>
                </tr>
              </thead>
              {
                Users.map((data, key) => (
              
              <tbody>
                <tr>
                

                  <td className={"table-data"}>
                    <Avatar
                      style={{
                        width:'80px', height:'80px'
                      }}
                      alt="Remy Sharp"
                      src={`http://localhost:3000/Profile/${data.Profile}`}
                      className={"table-avatar"}
                    />
                  </td>
                  <td className={"table-data"}>{data.FirstName}</td>
                  <td className={"table-data"}>{data.Role}</td>
                  <td>
                    {" "}
                    <Tooltip
                      title="Edit"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link to={`/admin/update-user/${data._id}`}>
                        <FaEdit color={"white"} />
                      </Link>
                    </Tooltip>

                    <Tooltip
                      title="Delete"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link to={`/admin/update-user/${data._id}`}>
                        <FaTrash color={"white"} />
                      </Link>
                    </Tooltip>


                    <Tooltip
                      title="View"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link to={`/admin/view-user-details/${data._id}`}>
                        <FaEye color={"white"} />
                      </Link>
                    </Tooltip>

                    <Tooltip
                      title="Contact"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link to={`/admin/contact-user/${data._id}`}>
                        <MdEmail color={"white"} />
                      </Link>
                    </Tooltip>

                  </td>
                </tr>
              </tbody>
            ))}
            </Table>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ViewUsers;
