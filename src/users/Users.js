import React from "react";

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
      <>
        <ul>
          {this.state.isAuth ? (
            this.state.users.map((user, index) => {
              if (user.isAdmin) {
                return <li key={index}>{user.name}</li>;
              }
            })
          ) : (
            <h1>please login first</h1>
          )}
        </ul>
      </>
    );
  }
}
