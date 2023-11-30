import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    //Run this ONCE when the sidebar component loads
    //to go into the collection rooms and loop through the documents in the room and then map them to give the id of each document in rooms
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    ); //give the snapshot of the db whenever something changes
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Rohit</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />

      {/*Connect to the db and list all the channels */}
      {/*<SidebarOptions ..../>*/}
      {channels.map((channel) => (
        <SidebarOptions title={channel.name} id={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
