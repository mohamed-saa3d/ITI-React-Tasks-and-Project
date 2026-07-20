import { useState } from "react";
import "./users.css";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "mohammedsaad.v7",
    email: "mohammedsaad.v7@gmail.com",
  });

  // 3. Add a new state for validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Validation functions returning error messages
  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required.";
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return "Email is invalid.";
    }
    return "";
  };

  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required.";
    }
    if (name.trim().length < 3) {
      return "Name must be at least 3 characters long.";
    }
    const nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(name)) {
      return "Name must contain letters and spaces only.";
    }
    return "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target; //destructuring to get name and value from the input
    setUser({
      ...user, // Keep the other properties unchanged
      [name]: value,
    });

    // Validate ONLY the edited field and update its error message immediately
    let errorMsg = "";
    if (name === "name") {
      errorMsg = validateName(value);
    } else if (name === "email") {
      errorMsg = validateEmail(value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  //submit handler function to don't let the page to reload when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate both fields
    const nameError = validateName(user.name);
    const emailError = validateEmail(user.email);

    // Update the errors state
    setErrors({
      name: nameError,
      email: emailError,
    });

    // If there is any validation error, prevent submission
    if (nameError || emailError) {
      return;
    }

    console.log(user);
  };

  return (
    <div className="add-user">
      <h2 className="add-user__title">Add User</h2>

      {/* Disable browser's default validation using noValidate */}
      <form className="add-user__form" onSubmit={handleSubmit} noValidate>
        <div className="add-user__group">
          <label htmlFor="name" className="add-user__label">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            className={`add-user__input ${errors.name ? "add-user__input--error" : ""}`}
          />
          <small className="text-danger">
            {errors.name}
          </small>
        </div>

        <div className="add-user__group">
          <label htmlFor="email" className="add-user__label">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            className={`add-user__input ${errors.email ? "add-user__input--error" : ""}`}
          />
          <small className="text-danger">
            {errors.email}
          </small>
        </div>

        <button type="submit" className="add-user__button">
          Save User
        </button>
      </form>

      {/* <div className="add-user__footer">
        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div> */}
    </div>
  );
}

/**
 * المستخدم يكتب في Input
        │
        ▼
المتصفح ينشئ Event
        │
        ▼
React يستقبل Event
        │
        ▼
onChange يستدعي handleChange(event)
        │
        ▼
event.target يشير إلى الـ Input الذي تغير
        │
        ▼
نقرأ منه:
name  → اسم الحقل (name أو email)
value → القيمة الجديدة
        │
        ▼
setUser({
   ...user,
   [name]: value
})
        │
        ▼
React تحفظ الـ State الجديدة
        │
        ▼
React تعمل Re-render
        │
        ▼
القيم الجديدة تظهر في الـ Inputs لأن `value` مربوط بالـ State
 */
