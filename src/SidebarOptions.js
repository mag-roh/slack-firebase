import React from "react";
import "./SidebarOptions.css";
import { useNavigate } from "react-router-dom"; //pushes the pages into the history for easy access
import db from "./firebase";
const SidebarOptions = ({ Icon, title, id, addChannelOption }) => {
  const history = useNavigate();
  const selectChannel = () => {
    if (id) {
      history(`/room/${id}`);
    } else {
      history(title);
    }
  };
  //adding a new channel to the sidebar and the database
  const addChannel = () => {
    const channelName = prompt("Please enter a channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOptions"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOptions__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOptions__channel">
          <span className="sidebarOptions__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOptions;
