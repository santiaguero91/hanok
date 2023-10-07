import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MainDiv } from "./ModalInputStyle";

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
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Form</h2>
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
        <TextField
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
        ></TextField>
        <Button variant="outlined" color="secondary" type="submit">
          Send
        </Button>
      </form>
    </MainDiv>
  );
};

export default ModalInput;
