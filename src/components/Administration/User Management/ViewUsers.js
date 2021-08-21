import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, IconButton, Tooltip } from "@material-ui/core";
import Modal from "./Modal";
import "../../../stylesheets/formTitle.css";
import { Card, Container, Table } from "react-bootstrap";
import {
  FaEdit,
  FaEye,
  FaTrash,
  IoMdAddCircleOutline,
  MdEmail,
} from "react-icons/all";
function ViewUsers(props) {
  const [showPop, setShowPop] = useState(false);
  const openPop = () => {
    setShowPop((prev) => !prev);
  };
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
              <tbody>
                <tr>
                  <td className={"table-data"}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className={"table-avatar"}
                    />
                  </td>
                  <td className={"table-data"}>Sandaruwan</td>
                  <td className={"table-data"}>Admin</td>
                  <td>
                    {" "}
                    <Tooltip
                      title="Edit"
                      className="table-icon"
                      style={{
                        color: "red",
                      }}
                    >
                      <Link to={"/admin/update-user"}>
                        <FaEdit color={"white"} />
                      </Link>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <FaTrash className="table-icon" />
                    </Tooltip>
                    <Tooltip title="View">
                      <FaEye className="table-icon" />
                    </Tooltip>
                    <Tooltip title="Contact">
                      <MdEmail className="table-icon" href={"/"} />
                    </Tooltip>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ViewUsers;
