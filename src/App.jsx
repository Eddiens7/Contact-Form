import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !message ||
      !query ||
      !terms
    ) {
      alert("Please complete all required fields before submitting.");
      return;
    }

    alert("Form submitted successfully!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setQuery("");
    setTerms(false);
    setSubmitted(false);
  }

  return (
    <main>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div className="personal-info">
          <div className="name">
            <label htmlFor="name">First Name *</label>
            <input
              type="text"
              id="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={submitted && !firstName ? "not-checked" : ""}
            />
          </div>

          <div className="last-name">
            <label htmlFor="last-name">Last Name *</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={submitted && !lastName ? "not-checked" : ""}
            />
          </div>
        </div>

        <div className="email">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={submitted && !email ? "not-checked" : ""}
          />
        </div>

        <span>Query Type *</span>
        <div className={`query ${submitted && !query ? "not-checked" : ""}`}>
          <input
            type="radio"
            name="query"
            id="general"
            value="general"
            onChange={(e) => setQuery(e.target.value)}
          />
          <label htmlFor="general">General Enquiry</label>

          <input
            type="radio"
            name="query"
            id="support"
            value="support"
            onChange={(e) => setQuery(e.target.value)}
          />
          <label htmlFor="support">Support Request</label>
        </div>

        <div className="send-message">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={submitted && !message ? "not-checked" : ""}
          ></textarea>
        </div>

        <div className="terms">
          <input
            type="checkbox"
            id="terms"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className={submitted && !terms ? "not-checked" : ""}
          />
          <label htmlFor="terms">
            I consent to being contacted by the team *
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </main>
  )
}

export default App;
