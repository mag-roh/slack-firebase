import React from "react";
import "./Message.css";
const Message = ({ message, timestamp, user, userImage }) => {
  const formattedDate = timestamp
    ?.toDate()
    .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>
          {user} <span className="message__timestamp">{formattedDate}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default Message;
