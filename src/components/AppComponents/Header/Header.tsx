// components
import HeaderOptions from "./HeaderOptions";
import Nav from "./HeaderNav";
// styles
import "../../../styles/HeaderStyles/Header.scss";

const HeaderComponent = () => {
  return (
    <header>
      <HeaderOptions />
      <Nav />
    </header>
  );
};

export default HeaderComponent;
