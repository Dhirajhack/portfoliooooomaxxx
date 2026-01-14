import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <p>
        Have a project, idea, or opportunity?  
        Let’s build something powerful together.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
