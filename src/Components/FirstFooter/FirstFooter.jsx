import { Modal, Typography } from "@mui/material";
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
import { useState } from "react";
import ModalInput from "./ModalInput/ModalInput";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const FirstFooter = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    console.log("ouch!");
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <MainDiv>
      {/* Modal  */}
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalInput />
      </Modal>

      {/* NOT Modal  */}
      <RowDiv>
        <ContactMeDiv>
          <ContactRowDiv>
            <div onClick={openModal}>
              <AiOutlineMail size={"2rem"} className="footerIcon" />
            </div>
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
    </MainDiv>
  );
};

export default FirstFooter;
