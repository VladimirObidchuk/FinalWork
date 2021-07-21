import "./Contact.scss";
import { ReactComponent as EmailIcon } from "./icons/email.svg";
import { ReactComponent as AddressIcon } from "./icons/address.svg";
import { ReactComponent as TelIcon } from "./icons/tel.svg";
import Modal from "../modalWin/ModalWin";
import ModalText from "../modalText/ModalText";
import { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleChange();
    // if (handleChange() === false)

    if (error || !text) {
      return setError(true);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
      setMessage(true);
    }, 3000);
    setTimeout(() => {
      setMessage(false);
    }, 8000);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (!value) {
      setError("This field is required");
    } else {
      setError(null);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact__main">
        <h3 className="contact__title">CONTACT US</h3>
        <div className="contact__body">
          <form
            action="#"
            className="contact__form"
            id="contact__form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="contact__name"
              className="contact__name contact__style"
              id="contact__name"
              placeholder="Name"
              onChange={handleChange}
            />
            {error && <span className="error__email">{error}</span>}
            <input
              type="tel"
              name="contact__tel"
              className="contact__tel contact__style"
              id="contact__tel"
              placeholder="Phone"
              onChange={handleChange}
            />
            {error && <span className="error__email">{error}</span>}
            <input
              type="email"
              name="contact__mail"
              className="contact__mail contact__style"
              id="contact__mail"
              placeholder="Email"
              onChange={handleChange}
            />
            {error && <span className="error__email">{error}</span>}
            <textarea
              name="contact__text"
              className="contact__text"
              id="contact__text"
              cols="30"
              rows="10"
              placeholder="Name"
            ></textarea>
            <input type="submit" value="Submit" className="  contact__button" />
            {loading && <Modal />}
            {message && (
              <ModalText value=" Thank you for your letter! We will get back to you soon." />
            )}
          </form>
          <div className="contact__image"></div>
        </div>
        <div className="contact__footer">
          <button type="submit" className="email contact__connect">
            <EmailIcon className="contact__img img__email" />
            email@mail.ru
          </button>
          <button type="submit" className="tel contact__connect">
            <TelIcon className="contact__img tel__email" />
            4439 2344 1233
          </button>
          <button type="submit" className="adress contact__connect">
            <AddressIcon className="contact__img adress__email" />
            Adress, Moscow
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
