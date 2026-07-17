import Navbar from './navbar/navbar'; 
import Users from './users/Users';
import UsersFunctional from './users/UserFunction';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Welcome to React (app file -all com-)</h1>
        <Navbar />
        <h3>this is class component </h3>
        <h6 style={{ color: "magenta" }}> (this users are admin && logged in -isAuth-) </h6>
        <Users />
      </div>
      <div>
        <h3>this is functional component </h3>
        <h6 style={{ color: "red" }}> (this users are admin && logged in -isAuth-) </h6>
        <UsersFunctional />
      </div>
    </>
  );
}

export default App;