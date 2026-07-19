import Navbar from './navbar/Navbar'; 
import Users from './users/Users';
import AddUser from './users/AddUser';
import UsersFunctional from './users/UsersFunctional';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <div className="app__section">
        <h3 className="app__section-title">this is class component</h3>
        <h6 className="app__section-subtitle">(this users are admin && logged in -isAuth-)</h6>
        <Users />
      </div>

      <div className="app__section">
        <h3 className="app__section-title">this is functional component</h3>
        <h6 className="app__section-subtitle">(this users are admin && logged in -isAuth-)</h6>
        <UsersFunctional />
      </div>

      <div className="app__section">
        <h3 className="app__section-title">this is add user form</h3>
        <h6 className="app__section-subtitle">(this users are admin && logged in -isAuth-)</h6>
        <AddUser />
      </div>
    </div>
  );
}

export default App;
