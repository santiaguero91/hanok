import React, { useState } from "react";
import { TextField, FormControl, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MainDiv, StyldTextField } from "./ModalInputStyle";
import { typoh3bold } from "../../../utils/Fonts";

const ModalInput = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

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
    }
  };

  return (
    <MainDiv>
      <form autoComplete="off">
        <Typography variant="h5" style={typoh3bold}>
          Form
        </Typography>
        <TextField
          label="Your Email"
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
        <TextField
          label="Your Name"
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
          id="inputname"
          type="text"
          required
          variant="outlined"
          color="secondary"
          value={description}
          error={descriptionError}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
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
      <Button
        variant="outlined"
        color="secondary"
        type="submit"
        onClick={handleSubmit}
      >
        Send
      </Button>
    </MainDiv>
  );
};

export default ModalInput;
