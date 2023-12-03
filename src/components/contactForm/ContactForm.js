import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  nameSetter,
  phoneSetter,
  emailSetter,
  submitHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => nameSetter(e.target.value)}
        required
      />
      <input
        placeholder="Phone"
        type="tel"
        value={phone}
        onChange={(e) => phoneSetter(e.target.value)}
        required
      />
      <input
        placeholder="email"
        type="text"
        value={email}
        onChange={(e) => emailSetter(e.target.value)}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
