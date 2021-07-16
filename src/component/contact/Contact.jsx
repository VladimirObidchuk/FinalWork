import React, { Component } from 'react';
import "./Contact.scss";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact" id="contact" >
                <div className="contact__main">
                    <h3 className="contact__title">CONTACT US</h3>
                    <div className="contact__body">
                        <form action="#" className="contact__form" id="contact__form">
                            <input
                                type="text"
                                name="contact__name"
                                className="contact__name contact__style"
                                id="contact__name"
                                placeholder="Name"
                            />
                            {/* <span class="error__email">This field is required</span> */}
                            <input
                                type="tel"
                                name="contact__tel"
                                className="contact__tel contact__style"
                                id="contact__tel"
                                placeholder="Phone"
                            />
                            {/* <span class="error__email">This field is required</span> */}
                            <input
                                type="email"
                                name="contact__mail"
                                className="contact__mail contact__style"
                                id="contact__mail"
                                placeholder="Email"
                            />
                            {/* <span class="error__email">This field is required</span> */}
                            <textarea
                                name="contact__text"
                                className="contact__text"
                                id="contact__text"
                                cols="30"
                                rows="10"
                                placeholder="Name"
                            ></textarea>
                            <input type="submit" value="Submit" className="contact__button" />
                        </form>
                        <div className="contact__image"></div>
                    </div>
                    <div className="contact__footer">
                        <button type="submit" className="email contact__connect">
                            <img
                                src="./email.svg"
                                alt=""
                                className="contact__img img__email"
                            />email@mail.ru
                        </button>
                        <button type="submit" className="tel contact__connect">
                            <img src="./tel.svg" alt="" className="contact__img tel__email" />4439
                            2344 1233
                        </button>
                        <button type="submit" className="adress contact__connect">
                            <img
                                src="./adress.svg"
                                alt=""
                                className="contact__img adress__email"
                            />Adress, Moscow
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};
export default Contact;