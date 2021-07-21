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
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [mailError, setmailError] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const handleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
    if (!name) {
      setNameError(true);
    } else {
      setNameError(null);
    }
  };
  const handleChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
    if (!phone) {
      setPhoneError(true);
    } else {
      setPhoneError(null);
    }
  };
  const handleChangeMail = (e) => {
    const mail = e.target.value;
    setMail(mail);
    if (!mail) {
      setmailError(true);
    } else {
      setmailError(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return setNameError("Name is required");
    }
    if (!phone) {
      return setPhoneError("Phone  is required");
    }
    if (!mail) {
      return setmailError("Email  is required");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setMessage(true);
    }, 2000);
    setTimeout(() => {
      setMessage(false);
    }, 4000);
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
              onChange={handleChangeName}
            />
            {nameError && <span className="error__email">{nameError}</span>}
            <input
              type="tel"
              name="contact__tel"
              className="contact__tel contact__style"
              id="contact__tel"
              placeholder="Phone"
              onChange={handleChangePhone}
            />
            {phoneError && <span className="error__email">{phoneError}</span>}
            <input
              type="email"
              name="contact__mail"
              className="contact__mail contact__style"
              id="contact__mail"
              placeholder="Email"
              onChange={handleChangeMail}
            />
            {mailError && <span className="error__email">{mailError}</span>}
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
