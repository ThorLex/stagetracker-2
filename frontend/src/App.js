import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from "./components/Login"
import Home from './components/Home';
import Container from './components/Container';
import Profile from './components/Profile';
import Forgetpass from './components/ForgetPass';
import Createaccount from './components/Createaccount';
import Create from "./components/Create";
import Navbar from './components/Navbar';
import Bar from './components/Bar';
import Side from'./components/Side'
import ColorSchemesExample from "./components/Navbar"
import Form from "./components/Form"




function App() {
  return (
    <div className="App  ">

      <BrowserRouter>
        <div >



          <Routes>

          <Route path="/form" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/me" element={<Container />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot" element={<Forgetpass />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/create" element={<Create />} />
            <Route path="/bar" element={<Bar />} />
          </Routes>


        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
