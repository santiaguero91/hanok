import { Typography } from "@mui/material";
import { MainDiv } from "./SectionStyle";
import { SectionsBtn } from "../SectionsStyle";


const Section = ({img}) => {

  return (
    <MainDiv>
        <img width="400px" height="350px" src={img}/>
        <Typography variant="h6">Clases</Typography>
        <SectionsBtn>Me interesa</SectionsBtn>
    </MainDiv> 
  );
};

export default Section;