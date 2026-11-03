import klcc from "../images/klcc.png";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [errorMessage, setErrorMessage] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Dynamic error clearing on user typing
    if (errorMessage[name]) {
      setErrorMessage((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (e) => {
    const newErrors = {};

    // 1. Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required!";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least two characters long!";
    }

    // 2. Email Validation with Regular Expressions
    const email_Reg_Ex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!email_Reg_Ex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email (Exp: adrian@gmail.com)";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      // Displays any validation errors if fields are invalid
      setErrorMessage(validationErrors);
      setIsSubmitted(false);
    } else {
      // Validation is passed
      setErrorMessage({});
      setIsSubmitted(true);

      // Reset the form input state to empty fields
      setFormData({
        name: "",
        email: "",
        feedback: "",
      });

      // The system will close the validation successful message after 10 seconds
    }
  };

  return (
    <div className="contact_card_container">
      {/* Confirmation Banner */}
      {isSubmitted && (
        <div className="success_banner">
          <span style={{ fontSize: "2rem" }}>✅</span>
          <div>
            <strong style={{ fontSize: "1.5rem", margin: "0" }}>
              Thank you for reaching out with Explore Malaysia!
            </strong>
            <p style={{ fontSize: "1rem", margin: "0" }}>
              Your submission is successful! We will get back you you soon!
            </p>
          </div>
        </div>
      )}

      <div className="contact_card_grid">
        {/* Left Column KL Image */}
        <div className="contact_card_left">
          <img src={klcc} alt="KLCC" className="contact_card_left_image" />
        </div>

        {/* Right Column Form Input */}
        <div className="contact_card_right">
          <h1 className="contact_card_title">Contact Us!</h1>

          {/* Actual form element */}
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            {/* Name Input */}
            <div className="form_element">
              <label htmlFor="name" className="form_element_label">
                Name:
              </label>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  autoComplete="one-time-code"
                  onChange={handleChange}
                  className={`form_input ${errorMessage.name ? "is_invalid" : ""}`}
                />
                {errorMessage.name && (
                  <div className="error_Message">
                    Error: {errorMessage.name}
                  </div>
                )}
              </div>
            </div>

            {/* Email Input */}
            <div className="form_element">
              <label htmlFor="email" className="form_element_label">
                Email:
              </label>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  autoComplete="one-time-code"
                  onChange={handleChange}
                  className={`form_input ${errorMessage.email ? "is_invalid" : ""}`}
                />
                {errorMessage.email && (
                  <div className="error_Message">
                    Error: {errorMessage.email}
                  </div>
                )}
              </div>
            </div>

            {/* Feedback Input */}
            <div className="form_element">
              <label htmlFor="feedback" className="form_element_label">
                Feedback:
              </label>
              <div>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows="4"
                  value={formData.feedback}
                  autoComplete="one-time-code"
                  onChange={handleChange}
                  className={`form_input ${errorMessage.feedback ? "is_invalid" : ""}`}
                ></textarea>
                {errorMessage.feedback && (
                  <div className="error_Message">
                    Error: {errorMessage.feedback}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="contact_form_submit_button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
