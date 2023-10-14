import { Modal } from "@mui/material";
import {
  ContactRowDiv,
  ContactMeDiv,
  FooterIcons,
  MainDiv,
  RowDiv,
} from "./FirstFooterStyle";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Typh5 } from "../../utils/Fonts";
import { useState } from "react";
import ModalInput from "./ModalInput/ModalInput";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FirstFooter = ({ sectionFooter }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  const whsatappClick = () => {
    window.open("https://wa.me/1137994696", "_blank");
  };
  const [refanimmail, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refInstag, inViewInstag] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refWhatsapp, inViewWhatsapp] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MainDiv id="Footer" ref={sectionFooter}>
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalInput />
      </Modal>

      <RowDiv>
        <ContactMeDiv
          component={motion.div}
          ref={refanimmail}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 1.5 }}
        >
          <div onClick={openModal} className="footerIcon">
            <ContactRowDiv>
              <AiOutlineMail size={"2rem"} />
              <Typh5 variant="h3">
                Contact Me
              </Typh5>
            </ContactRowDiv>
          </div>
          <Typh5 variant="h3">
            hanockclub@gmail.com
          </Typh5>
        </ContactMeDiv>

        <FooterIcons>
          <a href="https://www.instagram.com/thehanokclub/" target="_blank">
            <motion.div
              ref={refInstag}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: inViewInstag ? 1 : 0,
                y: inViewInstag ? 0 : 100,
              }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <BsInstagram size={"2rem"} className="footerIcon" />
            </motion.div>
          </a>
          <motion.div
            ref={refWhatsapp}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: inViewWhatsapp ? 1 : 0,
              y: inViewWhatsapp ? 0 : 100,
            }}
            transition={{ duration: 1.5, delay: 2 }}
            onClick={() => whsatappClick()}
          >
            <BsWhatsapp size={"2rem"} className="footerIcon" />
          </motion.div>
        </FooterIcons>
      </RowDiv>
    </MainDiv>
  );
};

export default FirstFooter;
