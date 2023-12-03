import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  currName,
  contact,
  contacts,
  date,
  time,
  setCurrName,
  setContact,
  setDate,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="date"
        placeholder="Date (dd-mm-yyyy)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <ContactPicker
        contacts={contacts}
        changeHandler={(e) => {
          setContact(e.target.value);
        }}
        value={contact.name}
        name=""
      />
      <input type="submit" />
    </form>
  );
};
