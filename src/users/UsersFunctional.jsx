import { useState, useEffect } from "react";
import "./users.css";

export default function UsersFunctional() {
    const [users, setUsers] = useState([
        { name: "mohamed", age: 20, isAdmin: true },
        { name: "saad", age: 22, isAdmin: false },
        { name: "hamed", age: 26, isAdmin: false },
    ]);

    const [isAuth, setIsAuth] = useState(false);

    const handleToggleUsers = () => {
        setIsAuth(!isAuth);
    };

    // ---------------------------------
    /**
       * Effect for Lifecycle: ComponentDidMount & ComponentWillUnmount
       * 1. Empty array [] ensures this runs only once when component is first added to DOM.
       * 2. The returned function is the "Cleanup function" which runs when component is removed (Unmount).
       */
    useEffect(() => {
        console.log("from didmount");

        return () => {
            console.log("from unmount");
        };
    }, []);

    /**
     * Effect for Lifecycle: ComponentDidUpdate
     * 1. This runs every time 'isAuth' or 'users' state changes.
     * 2. It compares the current value with the previous one to decide whether to run.
     */
    useEffect(() => {
        console.log("from didUpdate");
    }, [isAuth, users]);

    // ---------------------------------------

    return (
        <div className="users">
            <ul className="users__list">
                {isAuth ? (
                    users
                        .filter((user) => user.isAdmin)
                        .map((user, index) => {
                            return <li key={index} className="users__item">{user.name}</li>;
                        })
                ) : (
                    <h4 className="users__message">please login first</h4>
                )}
            </ul>

            <button
                className="users__button"
                onClick={() => {
                    handleToggleUsers();
                }}
            >
                switch users from login to logout or Opposite
            </button>
        </div>
    );
}
