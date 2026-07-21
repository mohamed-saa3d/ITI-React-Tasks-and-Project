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
      <div className="users-container">
        <div className="users-header">
          <h1 className="users-title">Class Component Users</h1>
          <p className="users-subtitle">Showing only admin users</p>
        </div>
        
        <div className="card users-card">
          <ul className="users-list">
            {this.state.isAuth ? (
              this.state.users
                .filter((user) => user.isAdmin)
                .map((user, index) => {
                  return (
                    <li key={index} className="user-item">
                      <div className="user-avatar user-avatar-indigo">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="user-info">
                        <p className="user-name">{user.name}</p>
                        <p className="user-meta">Admin Role • Age: {user.age}</p>
                      </div>
                    </li>
                  );
                })
            ) : (
              <div className="user-message-error">
                Please login first
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
