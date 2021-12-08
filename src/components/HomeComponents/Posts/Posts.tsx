// modules
import { motion } from "framer-motion";
import posts from "../../../utils/posts.json";
// contexts
import { useContext } from "react";
import { MainContext } from "../../../context/mainContext";
import { getPosts } from "../../../context/actions";
// components
import PostItem from "./Post";
// styles
import "../../../styles/PostsStyles/Posts.scss";

const PostsComponent = () => {
  const value: any = useContext(MainContext);
  const { state, dispatch } = value;

  console.log({ posts: state.posts });

  const fetchPosts = () => {
    if (state.posts.length >= 9) return;
    if (state.posts.length === 3) {
      dispatch(getPosts(posts.collection_two));
      return;
    }
    if (state.posts.length === 6) {
      dispatch(getPosts(posts.collection_three));
      return;
    }
    console.log("FETC");
  };

  return (
    <div className="posts">
      <div className="posts__container">
        {state.posts.map((post: Post, index: number) => (
          <PostItem post={post} index={index} />
        ))}
      </div>
      <motion.div
        className="posts__options"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.7 }}
      >
        <button className="btn" data-text="Learn More..." onClick={fetchPosts}>
          Learn More...
        </button>
      </motion.div>
    </div>
  );
};

export default PostsComponent;
