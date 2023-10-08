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
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FirstFooter = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    console.log("ouch!");
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  const [refanim, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <MainDiv>
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
        <ContactMeDiv
        component={motion.div}
        ref={refanim}
        initial={{ opacity: 0 , y: 100, x: -150}}
        animate={{ opacity: inView ? 1 : 0 , y: inView ? 0 : 100, x : inView ? 0 : -150 }}
        transition={{ duration: 1.5 }}
        >
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
