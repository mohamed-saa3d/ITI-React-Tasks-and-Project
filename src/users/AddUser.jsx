import "./users.css";

export default function AddUser() {
  return (
    <div className="add-user">
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div>
        {/* <img
          alt="Your Company"
          // src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        /> */}
        <h2 className="add-user__title">Sign in to your account</h2>
      </div>

      <div>
        <form action="#" method="POST" className="add-user__form">
          <div className="add-user__group">
            <label htmlFor="email" className="add-user__label">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="add-user__input"
            />
          </div>

          <div className="add-user__group">
            <div className="add-user__group-header">
              <label htmlFor="password" className="add-user__label">
                Password
              </label>
              <a href="#" className="add-user__link">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="add-user__input"
            />
          </div>

          <div>
            <button type="submit" className="add-user__button">
              Sign in
            </button>
          </div>
        </form>

        <p className="add-user__footer">
          Not a member?{' '}
          <a href="#" className="add-user__link">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  )
}
