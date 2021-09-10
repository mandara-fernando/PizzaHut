import React, { useEffect, useState } from "react";
import "../../../stylesheets/adminbar.css";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineUserAdd,
  CgReorder,
  FaClipboardList,
  FaEye,
  FaShuttleVan,
  FaSignOutAlt,
  FaUserMd,
  FaUsers,
  GiHamburgerMenu,
  GiPayMoney,
  MdDashboard,
  MdLibraryAdd,
  SiPrometheus,
} from "react-icons/all";
import { InputBase } from "@material-ui/core";

function AdminSideBar(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    props.onCollapse(active);
  }, [active]);

  function toggleMenu() {
    if (!active) {
      setActive(true);
    }
    if (active) {
      setActive(false);
    }
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }

  function toggleDrop() {
    let dropdown = document.getElementsByClassName("drop-btn");
    let i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }
  return (
    <div className="sidebar-container">
      <div className="navigation">
        <ul>
          <li>
            <a href={"#"}>
              <span className="icon"></span>
              <div className="portal-image ">
                <img src="/PizzaHut.png" />
              </div>
            </a>
          </li>
          <li>
            <a href={"/admin/dashboard"}>
              <span className="icon">
                <MdDashboard />
              </span>
              <span className="title"> Dashboard</span>
            </a>
          </li>

          <li>
            <a onClick={toggleDrop} className="drop-btn">
              <span className="icon">
                <FaUserMd />
              </span>
              <span className="title">User Management</span>
              <span className="icon-end">
                <AiFillCaretDown />
              </span>
              <span className="icon-end-up">
                <AiFillCaretUp />
              </span>
            </a>
            <div className="dropdown-container">
              <a href={"/admin/view-users"} className="list-item">
                <span className="sub-icon">
                  <FaEye className="ic" />
                </span>
                <span className="subtitle"> View Users</span>
              </a>

              <a href={"/admin/add-user"} className="list-item">
                <span className="sub-icon">
                  <AiOutlineUserAdd className="ic" />
                </span>
                <span className="subtitle"> Add User</span>
              </a>
            </div>
          </li>

          <li>
            <a onClick={toggleDrop} className="drop-btn">
              <span className="icon">
                <FaUsers className="ic" />
              </span>
              <span className="title"> Employee Management</span>
              <span className="icon-end">
                <AiFillCaretDown />
              </span>
              <span className="icon-end-up">
                <AiFillCaretUp />
              </span>
            </a>
            <div className="dropdown-container">
              <a href={"/admin/view-employees"} className="list-item">
                <span className="sub-icon">
                  <FaEye className="ic" />
                </span>
                <span className="subtitle"> View Employees</span>
              </a>

              <a href={"/admin/add-employee"} className="list-item">
                <span className="sub-icon">
                  <AiOutlineUserAdd className="ic" />
                </span>
                <span className="subtitle"> Add Employees</span>
              </a>
            </div>
          </li>

          <li>
            <a onClick={toggleDrop} className="drop-btn">
              <span className="icon">
                <FaClipboardList />
              </span>
              <span className="title"> Product Management</span>
              <span className="icon-end">
                <AiFillCaretDown />
              </span>
              <span className="icon-end-up">
                <AiFillCaretUp />
              </span>
            </a>
            <div className="dropdown-container">
              <a href={"/admin/view-products"} className="list-item">
                <span className="sub-icon">
                  <FaEye className="ic" />
                </span>
                <span className="subtitle"> View Products</span>
              </a>

              <a href={"/admin/add-product"} className="list-item">
                <span className="sub-icon">
                  <MdLibraryAdd className="ic" />
                </span>
                <span className="subtitle"> Add Products</span>
              </a>
            </div>
          </li>
          <li>
            <a onClick={toggleDrop} className="drop-btn">
              <span className="icon">
                <CgReorder />
              </span>
              <span className="title"> Order Management</span>
              <span className="icon-end">
                <AiFillCaretDown />
              </span>
              <span className="icon-end-up">
                <AiFillCaretUp />
              </span>
            </a>
            <div className="dropdown-container">
              <a href={"/admin/orders"} className="list-item">
                <span className="sub-icon">
                  <FaEye className="ic" />
                </span>
                <span className="subtitle"> View Orders</span>
              </a>
            </div>
          </li>

          <li>
            <a onClick={toggleDrop} className="drop-btn">
              <span className="icon">
                <FaShuttleVan />
              </span>
              <span className="title"> Delivery Management</span>
              <span className="icon-end">
                <AiFillCaretDown />
              </span>
              <span className="icon-end-up">
                <AiFillCaretUp />
              </span>
            </a>
            <div className="dropdown-container">
              <a href={"/admin/delivery"} className="list-item">
                <span className="sub-icon">
                  <FaEye className="ic" />
                </span>
                <span className="subtitle"> View Orders</span>
              </a>
            </div>
          </li>
          <li>
            <a onClick={toggleDrop} className="drop-btn">
              <span className="icon">
                <GiPayMoney />
              </span>
              <span className="title"> Payment Management</span>
              <span className="icon-end">
                <AiFillCaretDown />
              </span>
              <span className="icon-end-up">
                <AiFillCaretUp />
              </span>
            </a>
            <div className="dropdown-container">
              <a href={"/admin/payments"} className="list-item">
                <span className="sub-icon">
                  <FaEye className="ic" />
                </span>
                <span className="subtitle"> View Payments</span>
              </a>
            </div>
          </li>
          <li>
            <a onClick={toggleDrop} className="drop-btn">
              <span className="icon">
                <SiPrometheus />
              </span>
              <span className="title"> Promotion Management</span>
              <span className="icon-end">
                <AiFillCaretDown />
              </span>
              <span className="icon-end-up">
                <AiFillCaretUp />
              </span>
            </a>
            <div className="dropdown-container">
              <a href={"/admin/view-promos"} className="list-item">
                <span className="sub-icon">
                  <FaEye className="ic" />
                </span>
                <span className="subtitle"> View Promotions</span>
              </a>

              <a href={"/admin/add-promo"} className="list-item">
                <span className="sub-icon">
                  <MdLibraryAdd className="ic" />
                </span>
                <span className="subtitle"> Add Promotions</span>
              </a>
            </div>
          </li>
          <li>
            <a href={"#"}>
              <span className="icon">
                <FaSignOutAlt />
              </span>
              <span className="title"> Sign Out</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={"main"}>
        <div className={"top-bar"}>
          <div className={"toggle"}>
            {" "}
            <GiHamburgerMenu className={"icon"} onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
