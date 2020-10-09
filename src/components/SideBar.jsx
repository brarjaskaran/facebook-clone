import React from "react";
import "./SideBar.css";
import SidebarRow from "./SidebarRow";
import MessageIcon from "@material-ui/icons/Message";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import EmojiFlagsOutlinedIcon from "@material-ui/icons/EmojiFlagsOutlined";
import { LocalHospital, StorefrontOutlined } from "@material-ui/icons";
function SideBar() {
  return (
    <div className="sideBar">
      <SidebarRow title="Jaskran Brar" src="" />
      <SidebarRow title="Covid-19 Information Center" Icon={LocalHospital} />
      <SidebarRow title="Pages" Icon={EmojiFlagsOutlinedIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messanger" Icon={MessageIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontOutlined} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Marketplace" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default SideBar;
