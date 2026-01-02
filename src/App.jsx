function App() {
  return (
    <main>
      <h1>Contact Us</h1>

      <form>
        <div className="personal-info">
          <label htmlFor="name">First Name *</label>
          <input type="text" name="name" id="name"/>

          <label htmlFor="last-name">Last Name *</label>
          <input type="text" name="last-name" id="last-name" />
        </div>

        <div className="email">
          <label htmlFor="email">Email Address *</label>
          <input type="email" name="email" id="email" />
        </div>

        <span>Query Type *</span>
        <div className="query">
            <input type="radio" name="query" id="general"/>
            <label htmlFor="general">General Enquiry</label>

            <input type="radio" name="query" id="support"/>
            <label htmlFor="support">Support Request</label>
        </div>

        <div className="send-message">
          <label htmlFor="message">Message *</label>
          <textarea name="message" id="message" ></textarea>
        </div>

        <div className="terms">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">I consent to being contacted by the team *</label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </main>
  )
}

export default App
