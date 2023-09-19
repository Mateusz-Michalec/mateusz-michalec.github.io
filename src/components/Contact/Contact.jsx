import React, { forwardRef } from "react";
import "./Contact.scss";

const Contact = forwardRef(({ languageData }, ref) => {
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
    <section ref={ref} className="container contact">
      <h2 className="section-title hidden-opacity">
        {languageData.contactTitle}
      </h2>
      <div className="contact__btns hidden-fadeIn-right">
        <button className="contact__btn ">
          <i className="bi bi-envelope"></i>
          <h4 className="contact__btn-text" onClick={(e) => copyToClipboard(e)}>
            mateusz.michalec.pl@gmail.com{" "}
            <i className="bi bi-files copy-icon"></i>
          </h4>
          <p className="copy-message"></p>
        </button>
        <button className="contact__btn">
          <i className="bi bi-telephone"></i>
          <h4 className="contact__btn-text" onClick={(e) => copyToClipboard(e)}>
            579 965 435 <i className="bi bi-files copy-icon"></i>
          </h4>
          <p className="copy-message"></p>
        </button>
        <button className="contact__btn">
          <a href="https://github.com/Mateusz-Michalec" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <h4 className="contact__btn-text" onClick={(e) => copyToClipboard(e)}>
            Mateusz-Michalec <i className="bi bi-files copy-icon"></i>
          </h4>
          <p className="copy-message"></p>
        </button>
      </div>
    </section>
  );
});

export default Contact;
