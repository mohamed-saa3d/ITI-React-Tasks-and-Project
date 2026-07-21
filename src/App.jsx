import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './header/header';
import Navbar from './navbar/Navbar';

import Home from './home/home';
import About from './about/about';
import Products from './products/products';
import Contact from './contact/contact';
import Users from './users/Users';
import UsersFunctional from './users/UsersFunctional';
import AddUser from './users/AddUser';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products/:id/:name" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users-functional" element={<UsersFunctional />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
