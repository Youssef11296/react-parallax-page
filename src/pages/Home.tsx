// modules
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
// components
import AddPostForm from "../components/HomeComponents/AddPost/AddPost";
import PostsComponent from "../components/HomeComponents/Posts/Posts";
// styles
import "../styles/HomeStyles/Home.scss";

const HomePage = () => {
  const value: any = useContext(MainContext);
  const { state } = value;

  return (
    <div className="home" style={{ zIndex: state.isActiveNav ? -1 : 1 }}>
      <div className="home__wrapper">
        <div
          className="slider"
          style={{
            transform: state.isActiveForm
              ? "translate3d(-100%, 0px, 0px)"
              : "translate3d(0%, 0px, 0px)",
          }}
        >
          <div className="slides">
            <div className="slide slide__one">
              <PostsComponent />
            </div>
            <div className="slide slide__two">
              <AddPostForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
