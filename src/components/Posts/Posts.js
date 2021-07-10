import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/postAction";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  console.log(posts)
  const dispatch = useDispatch();

  useEffect(() => {
      if(posts.length == 0) {
        dispatch(getPosts());
      }
  }, [])

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
