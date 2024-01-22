import React, { useContext, useEffect } from "react";
import { contactContext } from "../context/ContactContextProvider";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { getContact, deleteContact, contacts } = useContext(contactContext);
  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      {contacts.map((elem) => (
        <ContactItem
          {...elem}
          key={elem.id}
          onDelete={() => deleteContact(elem.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
