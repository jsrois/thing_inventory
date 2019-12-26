import * as React from "react";
import { NavLink } from "react-router-dom";
import { FaInbox as InboxIcon } from "react-icons/fa";
import { IoIosAddCircle as AddNewIcon } from "react-icons/io";

const SideMenu = (): JSX.Element => (
  <div className="sideMenu">
    <NavLink
      exact
      activeClassName="sideMenu__link--active"
      className="sideMenu__link"
      to="/"
    >
      <InboxIcon className="icon" />
    </NavLink>
    <NavLink
      exact
      activeClassName="sideMenu__link--active"
      className="sideMenu__link"
      to="/new"
    >
      <AddNewIcon className="icon" />
    </NavLink>
  </div>
);

export default SideMenu;
