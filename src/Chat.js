import React, { useState, useEffect } from "react";
import "./Chat.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useParams } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
const Chat = () => {
  const { roomId } = useParams(); //to pull the roomId from the url
  const [roomDetails, setRoomDetails] = useState("");
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    //getting the messages in the body of the page from the collections and ordering them in ascending order according to the timestamp
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails);
  console.log(roomMessages);
  return (
    <div className="chat">
      {/*<h1>You are in the {roomId} room</h1>*/}
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {/*<Message/>*/}
        {roomMessages.map(({ message, timestamp, username, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={username}
            userImage={userImage}
            key={timestamp}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};
export default Chat;
