import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";

import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://pbs.twimg.com/profile_images/903757587341910016/8UcSpg60.jpg"
        message="wow its amazing!!"
        timeStamp="This is timestamp"
        username="Jaskaran Brar"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeiifeHXAYOoHhouze49VVsMD397dvKAiIlg&usqp=CAU"
      />
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
