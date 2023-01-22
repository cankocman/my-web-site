import emailjs from "emailjs-com";
import { useState } from "react";
const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = e => setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0 || subject.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_kxg7z8m", // service id
          "template_bzwjzhr", // template id
          mailData,
          "ZhWCyJ21BVB4aegBS" // public api
        )
        .then(
          response => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          err => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg">
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>What’s your story? Get in touch!</h4>
              <p>Always available for Web3.0 projects! Feel free to contact me.</p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">Bebek, 34342 Beşiktaş/İstanbul, Turkey</span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">cankocman3@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+90 551 241 61 00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form id="contact-form" method="POST" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                        onChange={onChange}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                        onChange={onChange}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                        onChange={onChange}
                        value={subject}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                        className="form-control"
                        defaultValue={""}
                        onChange={onChange}
                        value={message}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button className="px-btn px-btn-theme" type="submit" value="Send">
                        {" "}
                        send message
                      </button>
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: error == false ? "block" : "none" }}>
                      <br />
                      Message Sent Successfully
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={{ display: !error ? "none" : "block" }}>
                      <br />
                      Message Sending Failed
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
