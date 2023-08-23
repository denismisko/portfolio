import "./Contact.scss";
import DarkMode from "../../util/DarkMode";
import { useForm, ValidationError } from "@formspree/react";

function ContactMe() {
  DarkMode();

  const [state, handleSubmit] = useForm("meqdbzpv");
  if (state.succeeded) {
    return (
      <p className="text-center submit-alert">
        Thanks for message I will message you back ASAP!{" "}
        <a href="/" className="homepage-link">
          Home
        </a>
      </p>
    );
  }

  return (
    <section className="settings hidden">
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
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder="Tel. number"
              name="phone"
              required
              id="contact-phone"
            />
            <ValidationError
              prefix="phone"
              field="phone"
              errors={state.errors}
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
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
