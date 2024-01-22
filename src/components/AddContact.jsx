import React, { useContext, useState } from "react";
import { contactContext } from "../context/ContactContextProvider";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const AddContact = () => {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "20px auto",
    backgroundColor: "white",
    opacity: "0.6",
  };
  const { addContact } = useContext(contactContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const handelClick = () => {
    if (!name.trim() && !phone.trim() && !email.trim() && !img.trim()) {
      return;
    }
    let newObj = {
      todoName: name,
      todoPhone: phone,
      todoEmail: email,
      todoImg: img,
    };
    addContact(newObj);
    setName("");
    setPhone("");
    setEmail("");
    setImg("");

    navigate("/");
  };

  return (
    <div style={formStyle}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Img"
        variant="outlined"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <Button
        onClick={handelClick}
        variant="contained"
        style={{ backgroundColor: "darkGrey" }}
      >
        Add Contact
      </Button>
    </div>
  );
};

export default AddContact;
