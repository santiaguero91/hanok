import React, { useState } from "react";
import { TextField, FormControl, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MainDiv, StyldTextField } from "./ModalInputStyle";
import { typoh3bold } from "../../../utils/Fonts";

const ModalInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);
    setDescriptionError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }
    if (description == "") {
      setPasswordError(true);
    }

    if (email && password && description) {
      console.log(email, password, description);
    }
  };

  return (
    <MainDiv>
      <form autoComplete="off">
        <Typography variant="h5" style={typoh3bold}>
          Form
        </Typography>
        <TextField
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
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <StyldTextField
          label="Agregar Descripción"
          id="inputname"
          type="text"
          value={description}
          error={descriptionError}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          title="description"
          multiline
          rows={8}
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
