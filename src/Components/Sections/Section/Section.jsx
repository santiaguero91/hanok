import { Typography } from "@mui/material";
import { MainDiv, TextDiv } from "./SectionStyle";
import { SectionsBtn } from "../SectionsStyle";
import { typoh5bold } from "../../../utils/Fonts";


const Section = ({img, title}) => {

  return (
    <MainDiv>
        <img width="400px" height="350px" src={img}/>
        <TextDiv>
        <Typography variant="h5" style={typoh5bold} >{title}</Typography>
        </TextDiv>
        <SectionsBtn>Me interesa</SectionsBtn>
    </MainDiv> 
  );
};

export default Section;