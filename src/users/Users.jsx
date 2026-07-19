import React from "react";
import "./users.css";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuth: true,
      users: [
        { name: "mohamed", age: 20, isAdmin: true },
        { name: "saad", age: 22, isAdmin: true },
        { name: "hamed", age: 26, isAdmin: false },
      ],
    };
  }

  render() {
    return (
      <div className="users">
        <ul className="users__list">
          {this.state.isAuth ? (
            this.state.users
              .filter((user) => user.isAdmin)
              .map((user, index) => {
                return <li key={index} className="users__item">{user.name}</li>;
              })
          ) : (
            <h4 className="users__message">please login first</h4>
          )}
        </ul>
      </div>
    );
  }
}
