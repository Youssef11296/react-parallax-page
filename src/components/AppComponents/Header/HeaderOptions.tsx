// modules
import { useContext } from "react";
import { Link } from "react-router-dom";
// context
import { toggleNav } from "../../../context/actions";
import { MainContext } from "../../../context/mainContext";
// images
import Logo from "../../../assets/public-images/logo.png";

const HeaderOptions = () => {
  const value: any = useContext(MainContext);
  const { dispatch } = value;
  return (
    <div className="header__options">
      <div className="header__logo" data-tilt>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__menuIcon" onClick={() => dispatch(toggleNav())}>
        <span className={`${value.state.isActiveNav && "close"}`}></span>
      </div>
    </div>
  );
};

export default HeaderOptions;
