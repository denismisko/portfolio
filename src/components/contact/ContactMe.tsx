import "./Contact.scss";
import DarkMode from "../../util/DarkMode";
import { useForm } from "@formspree/react";

function ContactMe() {
  DarkMode();

  const [state, handleSubmit] = useForm("meqdbzpv");
  if (state.succeeded) {
    return (
      <p className="text-center alert">
        Thanks for message I will message you back ASAP!{" "}
        <a href="/" className="homepage-link">
          Home
        </a>
      </p>
    );
  }

  return (
    <section className="settings">
      <div className="container flexbox-contact">
        <span>
          <a href="/" rel="noopener noreferrer">
            &#8594;
          </a>
        </span>
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Let's stay connected.</h3>

          <input type="hidden" name="_subject" value="New message!" />

          <div className="input-group">
            <input
              type="text"
              placeholder="Full name"
              id="contact-name"
              name="name"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              pattern="^(\+421|00421|0)(\d{3})(\d{3})(\d{3})|^(\+1|001|1)(\d{3})(\d{3})(\d{4})$"
              placeholder="Tel. number"
              name="phone"
              required
              id="contact-phone"
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              id="contact-email"
              name="email"
              required
            />
          </div>

          <div className="input-group">
            <textarea
              rows={5}
              placeholder="Message"
              id="contact-message"
              name="message"
              required
            ></textarea>
          </div>

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
