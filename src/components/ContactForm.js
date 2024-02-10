import React, { useState } from "react";
import { validateText, validateEmail } from "../utils/helpers";
import "../styles/Contact.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
      if (!validateText(inputValue)) {
        setErrorMessage("Name required.");
      } else {
        setErrorMessage("");
      }
    }

    if (inputType === "email") {
      setEmail(inputValue);
      if (!validateEmail(inputValue)) {
        setErrorMessage("Enter a vaild Email.");
      } else {
        setErrorMessage("");
      }
    }

    if (inputType === "message") {
      setMessage(inputValue);
      if (!validateText(inputValue)) {
        setErrorMessage("Message required.");
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage("Name, email, or message is invalid");
      return;
    }
    alert(`Message Sent`);

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="contact-form" id="contact">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
            <h1 className="mb-4">
              Contact Me
            </h1>
          </div>
        </div>
      <div className="contact-left mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
        <form className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
          <div className="mb-4">
            <label className="text mb-2 block font-medium" for="email">
              Name:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium" for="subject">
              Email:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium" for="message">
              Message:
            </label>
            <textarea
              className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex items-center">
            <div className="flex-1"></div>
            <button
              type="button"
              onClick={handleFormSubmit}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text inputTitle">{errorMessage}</p>
            </div>
          )}
        </form>

        <div className="contact-right mt-10 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
          <div className="">
            <p className="mb-4 font-medium border-b  pb-2">Jonathan Chen</p>
            Email:
            <a href="mailto:09.chen@gmail.com"> 09.chen@gmail.com</a>
            <p className="mb-4">Phone: 415-613-9339</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
