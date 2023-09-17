import React from "react";
import "./Contact.scss";

const Contact = ({ languageData }) => {
  const copyToClipboard = (e) => {
    const el = e.currentTarget;
    const text = el.textContent;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const message = el.nextElementSibling;
        message.textContent = languageData.copyMessage;
        message.classList.add("visible");

        setTimeout(() => {
          message.classList.remove("visible");
        }, 2000);
      })
      .catch((err) => console.log("Failed to copy", err));
  };

  return (
    <section className="container contact">
      <h2 className="section-title">{languageData.contactTitle}</h2>
      <div className="contact__btns">
        <button className="contact__btn">
          <i className="bi bi-envelope"></i>
          <h4 onClick={(e) => copyToClipboard(e)}>
            mateusz.michalec.pl@gmail.com{" "}
            <i className="bi bi-files copy-icon"></i>
          </h4>
          <p className="copy-message"></p>
        </button>
        <button className="contact__btn">
          <i className="bi bi-telephone"></i>
          <h4 onClick={(e) => copyToClipboard(e)}>
            579 965 435 <i className="bi bi-files copy-icon"></i>
          </h4>
          <p className="copy-message"></p>
        </button>
        <button className="contact__btn">
          <a href="https://github.com/Mateusz-Michalec" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <h4 onClick={(e) => copyToClipboard(e)}>
            Mateusz-Michalec <i className="bi bi-files copy-icon"></i>
          </h4>
          <p className="copy-message"></p>
        </button>
      </div>
    </section>
  );
};

export default Contact;
