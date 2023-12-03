import React from "react";

export const ContactPicker = ({ contacts, changeHandler, value, name }) => {
  const options = contacts.map((contact) => {
    return (
      <option key={contact.name} value={contact.name}>
        {contact.name}
      </option>
    );
  });
  return (
    <select
      onChange={changeHandler}
      value={value}
      defaultValue="default"
      name={name}
    >
      <option value="default">No Contact Selected</option>
      {options}
    </select>
  );
};
