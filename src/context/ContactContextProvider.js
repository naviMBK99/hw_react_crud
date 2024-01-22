import React, { createContext, useState } from "react";
import { API } from "../helpers/const";
import axios from "axios";
export const contactContext = createContext();
const ContactContextProvider = ({ children }) => {
  const [contacts, setContact] = useState([]);

  //   ! CREATE
  const addContact = async () => {
    try {
      const response = await axios.post(
        API,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  //   ! READ
  const getContact = async () => {
    try {
      const { data } = await axios(API);
      setContact(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //   ! DELETE
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setContact((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  //   ! Update
  const updateContact = async (updatedContact) => {
    try {
      await axios.put(`${API}/${updatedContact.id}`, updatedContact, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setContact((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const values = {
    addContact,
    getContact,
    deleteContact,
    updateContact,
    contacts,
  };

  return (
    <contactContext.Provider value={values}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvider;
