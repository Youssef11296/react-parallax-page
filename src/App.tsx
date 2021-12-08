// modules
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import HeaderComponent from "./components/AppComponents/Header/Header";
import { getPosts } from "./context/actions";
import { MainContext } from "./context/mainContext";
// pages
import HomePage from "./pages/Home";
// styles
import "./styles/App.scss";
import posts from "./utils/posts.json";

const App = () => {
  const value: any = useContext(MainContext);
  const { dispatch } = value;

  useEffect(() => {
    dispatch(getPosts([...posts.collection_one]));
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <div id="cursor"></div>
        <div className="overlay bg" data-speed="5"></div>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
