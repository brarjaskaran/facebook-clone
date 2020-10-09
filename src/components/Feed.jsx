import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";

import Post from "./Post";
import db from "../firebase";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timeStamp={""}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      <Post
        profilePic="https://www.credit.com/blog/wp-content/uploads/2011/04/shallow-focus-photography-of-a-man-in-white-collared-dress-804065.jpg"
        message="wow its amazing!!"
        timeStamp="This is timestamp"
        username="Jaskaran Brar"
      />
      {/* <Post profilePic="" message={message} timeStamp={} username={} image={} /> */}

      {/*  */}
    </div>
  );
}

export default Feed;
