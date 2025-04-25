import './App.css';
import logo from './logo.svg';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/home/Index';
import ManageUsers from './pages/users/ManageUsers';
import AddUserPage from './pages/users/AddUserPage';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'reactstrap';
import EditUserPage from './pages/users/EditUserPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />      
      <NavbarComponent />
      <Container className="mt-4">        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/add-user" element={<AddUserPage />} />
            <Route path="/edit-user/:id" element={<EditUserPage />} />  
          </Routes>
      </Container>
    </div>
  );
}

export default App;
