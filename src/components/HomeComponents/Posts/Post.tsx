// modules
import { motion } from "framer-motion";
// styles
import "../../../styles/PostsStyles/PostItem.scss";
import Tilt from "../../../ui/cardAnimation";

// props
interface Props {
  post: Post;
  index: number;
}

const PostItem: React.FC<Props> = ({ post, index }) => {
  const options = {
    speed: 2000,
    max: 30,
  };
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "110%" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, delay: index === 0 ? 0 : index * 0.25 }}
    >
      <Tilt options={options} className="postItem animate">
        <span></span>
        <div className="postItem__wrapper animate">
          <div
            className="postItem__image"
            style={{ background: `url(${post.imageUrl})` }}
          ></div>
          <div className="postItem__title">{post.title}</div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default PostItem;
