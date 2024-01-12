import React from "react";
import styled from "styled-components";

const ContactPage = () => {
  return (
    <Contact>
      <section className="container">
        <section className="max">
          <div className="cen">
            <strong>Get In Touch</strong>
            <h1>Contact me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit
              suscipit molestiae accusantium.
            </p>
          </div>

          <form action="">
            <div className="contact">
              <div className="name">
                <label htmlFor="text">First name</label>
                <input type="text" />
              </div>
              <div className="name">
                <label htmlFor="text">Last name</label>
                <input type="text" />
              </div>
            </div>
            <div className="contact">
              <div className="name">
                <label htmlFor="text">Email</label>
                <input type="text" placeholder="samsonanu@yahoo.com" />
              </div>
              <div className="name">
                <label htmlFor="text">Phone Number</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="Topic">Choose a topic</label>
              <select name="Select one..." id="Select one..">
                <option value="select one...">Select one..</option>
                <option value="communication">Communication</option>
                <option value="technology">Technology</option>
                <option value="information">Information</option>
              </select>
            </div>
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type your message..."
            ></textarea>
            <div className="checkbox">
              <input className="check" type="checkbox" />
              <label htmlFor="">I accept the terms</label>
            </div>

            <button>Submit</button>
          </form>
        </section>
      </section>
    </Contact>
  );
};

export default ContactPage;

let Contact = styled.div`
  .cen {
    text-align: center;
  }
  h1 {
    font-size: 40px;
    padding: 20px 0;
  }
  p {
    padding-bottom: 40px;
  }
  input,
  select {
    width: 95%;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 30px;
    border: 1px solid #5e3bee;
    margin-top: 15px;
  }

  label {
    display: block;
  }
  .name {
    display: block;
  }
  select {
    width: 101%;
  }
  textarea {
    width: 95%;
    padding: 15px;
    margin-top: 15px;
  }
  .check {
    width: 40px;
    height: 20px;
  }
  .checkbox {
    display: inline-block;
    margin-left: -10px;
  }
  .checkbox label {
    display: inline-block;
  }
  .checkbox input {
    margin-bottom: 0;
    margin-top: 5px;
    position: relative;
    top: 3px;
  }
  button {
    display: block;
    padding: 20px 30px;
    background-color: #5e3bee;
    color: white;
    border: 1px solid;
    border-radius: 10px;
    margin: 30px auto;
  }
  .max {
    max-width: 900px;
    margin: 0 auto;
    padding: 80px 0;
  }

  @media (min-width: 700px) {
    .contact {
      display: flex;
      justify-content: space-between;
    }
    .name {
      width: 48%;
    }

    textarea {
      width: 98%;
      padding: 15px;
      margin-top: 15px;
    }
  }
`;
