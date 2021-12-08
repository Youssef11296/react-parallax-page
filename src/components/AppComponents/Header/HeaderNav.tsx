// modules
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../../context/mainContext";

const Nav = () => {
  const value: any = useContext(MainContext);
  const { state, dispatch } = value;

  const toggleHandler = (payload: boolean) =>
    dispatch({ type: "TOGGLE_FORM", payload });

  return (
    <nav className={`${state.isActiveNav && "active"}`}>
      <div className="nav__content">
        <ul>
          <li onClick={() => toggleHandler(false)}>
            <Link to="/" className="btn nav__option" data-text="Home">
              Home
            </Link>
          </li>
          <li onClick={() => toggleHandler(true)}>
            <Link to="/" className="btn nav__option" data-text="Add Post">
              Add Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
