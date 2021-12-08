// modules
import { useState } from "react";
// styles
import "../../../styles/PostsStyles/AddPost.scss";

const AddPostForm = () => {
  const initialPost = { title: "", imageUrl: "" };

  const [postData, setPostData] = useState(initialPost);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const createPostHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPostData(initialPost);
  };
  return (
    <div className="addPost">
      <form onSubmit={createPostHandler}>
        <div className="inputField">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            placeholder="Enter Title"
            onChange={changeHandler}
          />
        </div>
        <div className="inputField">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            name="imageUrl"
            value={postData.imageUrl}
            placeholder="Enter Image Url"
            onChange={changeHandler}
          />
        </div>
        <button className="btn" data-text="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
