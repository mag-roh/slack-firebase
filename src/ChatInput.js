import React from "react";
import "./ChatInput.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          type="text"
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
};
export default ChatInput;
