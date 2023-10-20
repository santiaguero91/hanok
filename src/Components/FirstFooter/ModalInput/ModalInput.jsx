import React, { useState } from "react";
import { Typography } from "@mui/material";
import {
  CoverDiv,
  LettersBkg,
  MainDiv,
  ModalBtn,
  PicBkg,
  StyldTextField,
} from "./ModalInputStyle";
import { Typh3bold, typoh3bold } from "../../../utils/Fonts";
import { motion } from "framer-motion";

import toast, { Toaster, ToastBar } from "react-hot-toast";

const ModalInput = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  //toast
  const notify = () =>
    toast("Gracias por tu mensaje, te escribire aprenas lo vea!" + "👏", {
      duration: 4000,
      position: "top-center",

      // Styling
      style: {
        width: "20vw",
      },
      className: "",

      // Custom Icon
      icon: "👏",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError(false);
    setNameError(false);
    setDescriptionError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (name == "") {
      setNameError(true);
    }
    if (description == "") {
      setPasswordError(true);
    }

    if (email && name && description) {
      console.log(email, name, description);
      setDescription("");
      setName("");
      setEmail("");
      notify();
    }
  };

  return (
    <MainDiv
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 1 }}
    >
      <CoverDiv>
        <form autoComplete="off">
          <StyldTextField
            id="mail"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            value={email}
            error={emailError}
          />
          <StyldTextField
            id="name"
            label="Nombre"
            onChange={(e) => setName(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            value={name}
            error={nameError}
            fullWidth
            sx={{ mb: 3 }}
          />
          <StyldTextField
            label="Message"
            id="Mensaje"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            required
            variant="outlined"
            color="secondary"
            value={description}
            error={descriptionError}
            name="description"
            multiline
            fullWidth
            rows={8}
            sx={{ mb: 3 }}
            // placeholder={input.link}
            /*           InputProps={{
            style: { color: "black" },
          }}
          InputLabelProps={{
            style: { color: "black" },
          }} */
          ></StyldTextField>
        </form>
        <Typography variant="subtitle1" style={typoh3bold}>
          Los siguientes datos seran enviados a : hanockclub@gmail.com
        </Typography>
        <ModalBtn
          variant="outlined"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
          component={motion.div}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Send
        </ModalBtn>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </CoverDiv>
      <LettersBkg />
      <PicBkg />
    </MainDiv>
  );
};

export default ModalInput;
