import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../context/ContactContextProvider";

const EditContact = () => {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "20px auto",
    backgroundColor: "white",
    opacity: "0.6",
  };
  const { contacts, updateContact } = useContext(contactContext);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const contactToEdit = contacts.find(
      (contact) => contact.id === parseInt(id, 10)
    );
    if (contactToEdit) {
      setName(contactToEdit.todoName || "");
      setPhone(contactToEdit.todoPhone || "");
      setEmail(contactToEdit.todoEmail || "");
      setImg(contactToEdit.todoImg || "");
    }
  }, [id, contacts]);
  const handleEdit = () => {
    try {
      const updatedContact = {
        id: parseInt(id, 10),
        todoName: name,
        todoPhone: phone,
        todoEmail: email,
        todoImg: img,
      };
      updateContact(updatedContact);
      navigate("/");
    } catch (error) {
      console.error("Error during handleEdit:", error);
    }
  };

  return (
    <div style={formStyle}>
      <TextField
        id="outlined-name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        id="outlined-phone"
        label="Phone"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <TextField
        id="outlined-email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        id="outlined-img"
        label="Img"
        variant="outlined"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <Button
        onClick={handleEdit}
        variant="contained"
        style={{ marginTop: "10px", backgroundColor: "darkgray" }}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default EditContact;
