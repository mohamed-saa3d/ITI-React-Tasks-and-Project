import { useState, useEffect } from "react";

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

    return (
        <div className="users-container">
            <div className="users-header">
                <h1 className="users-title">Functional Users</h1>
                <p className="users-subtitle">Managing authentication state</p>
            </div>

            <div className="card users-card">
                <ul className="users-list mb-4">
                    {isAuth ? (
                        users
                            .filter((user) => user.isAdmin)
                            .map((user, index) => {
                                return (
                                    <li key={index} className="user-item">
                                        <div className="user-avatar user-avatar-emerald">
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
                            Please login first to view users
                        </div>
                    )}
                </ul>

                <button
                    className={`btn btn-block ${isAuth ? 'btn-outline' : 'btn-primary'}`}
                    onClick={() => {
                        handleToggleUsers();
                    }}
                >
                    {isAuth ? "Logout" : "Login"} (Switch Auth State)
                </button>
            </div>
        </div>
    );
}
