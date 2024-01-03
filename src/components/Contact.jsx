import React from "react";
import styled from "styled-components";

const ContactPage = () => {
  return (
    <Contact>
      <section className="container">
        <small>Get In Touch</small>
        <h1>Contact me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit
          suscipit molestiae accusantium. Magni perferendis cum ullam laudantium
          corrupti, commodi in culpa debitis quo nulla architecto saepe
          voluptatum. Autem, odio.
        </p>

        <form action="">
          <label htmlFor="text">First name</label> <br />
          <input type="text" /> <br />

          <label htmlFor="text">Last name</label> <br />
          <input type="text" /> <br />

          <label htmlFor="text">Email</label> <br />
          <input type="text" /> <br />

          <label htmlFor="text">Phone Number</label> <br />
          <input type="text" />
        </form>
      </section>
    </Contact>
  );
};

export default ContactPage;

let Contact = styled.div`
  form {
    width: 300px;
  }
`;
