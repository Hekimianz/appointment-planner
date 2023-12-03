import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [currName, setCurrName] = useState("");
  const [currPhone, setCurrPhone] = useState("");
  const [currEmail, setCurrEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      alert("Name is already in contacts list");
      return;
    }
    addContact(currName, currPhone, currEmail);
    setCurrName("");
    setCurrPhone("");
    setCurrEmail("");
  };

  useEffect(() => {
    if (contacts.filter((contact) => contact.name === currName)) {
      setIsDuplicate(true);
    }
    console.log(currName);
  }, [currName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currName}
          phone={currPhone}
          email={currEmail}
          nameSetter={setCurrName}
          phoneSetter={setCurrPhone}
          emailSetter={setCurrEmail}
          submitHandler={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
