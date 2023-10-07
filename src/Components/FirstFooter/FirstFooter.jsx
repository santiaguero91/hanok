import { Typography } from "@mui/material";
import {
  ContactRowDiv,
  ContactMeDiv,
  FooterIcons,
  MainDiv,
  RowDiv,
} from "./FirstFooterStyle";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { typoFooter } from "../../utils/Fonts";

const FirstFooter = () => {
  return (
    <MainDiv>
      <RowDiv>
        <ContactMeDiv>
          <ContactRowDiv>
            <AiOutlineMail size={"2rem"} className="footerIcon" />
            <Typography variant="h3" style={typoFooter}>
            Contact Me
          </Typography>
          </ContactRowDiv>
          <Typography variant="h3" style={typoFooter}>
            hanockclub@gmail.com
          </Typography>
        </ContactMeDiv>

        <FooterIcons>
          <BsInstagram size={"2rem"} className="footerIcon" />{" "}
          <BsWhatsapp size={"2rem"} className="footerIcon" />{" "}
          <BsFacebook size={"2rem"} className="footerIcon" />
        </FooterIcons>
      </RowDiv>

      {/*       <RowDiv>
        <ColumnDiv>
          <AiOutlineMail size={"2rem"} className="footerIcon" />
          <ContactMeDiv>
            <h2 className="footerIcon">Contact Me</h2>
            <h4>hanockclub@gmail.com</h4>
          </ContactMeDiv>
        </ColumnDiv>
        <FooterIcons>
          <BsInstagram size={"2rem"} className="footerIcon" />{" "}
          <BsWhatsapp size={"2rem"} className="footerIcon" />{" "}
          <BsFacebook size={"2rem"} className="footerIcon" />
        </FooterIcons>
      </RowDiv> */}
    </MainDiv>
  );
};

export default FirstFooter;
