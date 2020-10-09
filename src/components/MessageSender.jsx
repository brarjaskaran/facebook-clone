import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";
import { ImageSearchOutlined } from "@material-ui/icons";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [imgUrl, SetImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgUrl,
    });

    // some clever db stuff

    setInput("");
    SetImgUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imgUrl}
            onChange={(e) => SetImgUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <MoodIcon style={{ color: "orange" }} />
          <h3>Photo/Video</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
