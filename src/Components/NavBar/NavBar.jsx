import { MainDiv } from "./NavBarStyle";
import ClasesBtn from "./Botones/ClasesBtn";
import TraduccionesBtn from "./Botones/TraduccionesBtn";
import ActividadesBtn from "./Botones/ActividadesBtn";
import OpinionesBtn from "./Botones/OpinionesBtn";

const NavBar = ({ inSight }) => {
  return (
    <MainDiv> 
       <ClasesBtn inSight={inSight} />
      <ActividadesBtn inSight={inSight} />
      <TraduccionesBtn inSight={inSight} />
      <OpinionesBtn inSight={inSight} />
    </MainDiv>
  );
};

export default NavBar;


