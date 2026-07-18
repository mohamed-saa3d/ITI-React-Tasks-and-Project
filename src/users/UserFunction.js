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

    // ---------------------------------------

    return (
        <>
            <ul>
                {isAuth ? (
                    users.map((user, index) => {
                        if (user.isAdmin) {
                            return <li key={index}>{user.name}</li>;
                        }
                    })
                ) : (
                    <h1>please login first</h1>
                )}
            </ul>

            <button
                className="btn btn-success"
                onClick={() => {
                    handleToggleUsers();
                }}
            >
                switch users from login to logout or Opposite
            </button>
        </>
    );
}
