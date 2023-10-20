import React, { useState } from "react";
import { FormControlLabel, FormLabel, Radio, Typography } from "@mui/material";
import {
  CoverDiv,
  LettersBkg,
  MainDiv,
  ModalBtn,
  PicBkg,
  StylRadioGroup,
  StyldTextField,
} from "./ModalClasesStyle";
import { typoh3bold } from "../../../utils/Fonts";
import { motion } from "framer-motion";

import toast, { Toaster } from "react-hot-toast";

const ModalClases = () => {
  //inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");

  //errors
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [levelError, setLevelError] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

const handleChange = (e) => {
  setLevel(e.target.value)
}
  //toast
  const notify = () =>
    toast("Gracias por tu mensaje, te escribire lo mas pronto posible" + "👏", {
      duration: 4000,
      position: "top-center",

      // Styling
      style: {
        width: "80%",
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
    setLevelError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (name == "") {
      setNameError(true);
    }
    if (description == "") {
      setDescriptionError(true);
    }
    if (level == "") {
      setLevelError(true);
    }

    if (email && name && description && level) {
      setDescription("");
      setName("");
      setEmail("");
      setLevel("");
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
          <div>
          <FormLabel /* className={!level ? "levelError" : "levelOk"}  */  >¿Cuál es tu nivel de coreano?</FormLabel>
          <StylRadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            required
            onChange={handleChange}
          >
            <FormControlLabel
              value="Básico"
              control={<Radio />}
              label="Básico"
              required
            />
            <FormControlLabel value="Intermedio" control={<Radio />} label="Intermedio" />
            <FormControlLabel value="Avanzado" control={<Radio />} label="Avanzado" />
          </StylRadioGroup>
          </div>
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
            rows={6}
            sx={{ mb: 3 }}
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

export default ModalClases;
