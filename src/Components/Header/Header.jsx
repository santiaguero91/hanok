import { DivIcons, DivImg, MainDiv } from "./HeaderStyle";
import hanokHouse from "../../assets/hanockHouse.jpeg";
import { NavLink } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({
    top: 0,
  });
};

const Header = () => {
  return (
    <div>
      <MainDiv>
        <DivImg>
          <NavLink to="/" onClick={handleClick}>
            <img src={hanokHouse} width="65px" />
          </NavLink>
        </DivImg>
        <DivIcons>
          <img
            width="30px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png?20230822013318"
          />
          <img
            width="30px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
          />
          <img
            width="30px"
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          />
        </DivIcons>
      </MainDiv>
    </div>
  );
};

export default Header;
