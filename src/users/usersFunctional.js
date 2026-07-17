import { useState ,useEffect} from "react";

export default function UsersFunctional() {
  const [users, setUsers] = useState([
    { name: "hend", age: 20, isAdmin: true },
    { name: "ali", age: 22, isAdmin: true },
    { name: "mohamed", age: 26, isAdmin: false },
  ]);

  const [isAuth, setIsAuth] = useState(false);

  const handleToggleUsers = () => {
    setIsAuth(!isAuth);
  };

  useEffect(()=>{//componentDidmount

   console.log("from didmount")

   return ()=>{//willunmount

    console.log("from unmount")

   }
  },[])


  useEffect(()=>{//componentDidupdate

  console.log("from didUpdate")
  },[isAuth,users])



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
        toggle
      </button>
    </>
  );
}
