import { Typography } from "@mui/material";
import { MainDiv, TextDiv } from "./SectionStyle";
import { SectionsBtn } from "../SectionsStyle";
import { typoh5bold } from "../../../utils/Fonts";
import { Link } from "react-scroll";


const Section = ({img, title,link}) => {

  return (
    <MainDiv>
        <img width="400px" height="350px" src={img}/>
        <TextDiv>
        <Typography variant="h5" style={typoh5bold} >{title}</Typography>
        </TextDiv>
        <Link to={link} spy={true} smooth={true} offset={-50} duration={1000}>
        <SectionsBtn>Saber mas</SectionsBtn>
        </Link>

    </MainDiv> 
  );
};

export default Section;