import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Profile from './components/Profile';
import Forgetpass from './components/ForgetPass';
import Create from "./components/Create";
import Admin from "./components/Adminuser";
import Form from "./components/Form";
import Editor from "./components/editor";
import Dash  from './components/dash';
import Tableau from './components/tableau';
import Error from './components/patherror';




function App() {
  return (
    <>

      <BrowserRouter>
        <div>
          <Routes>

          <Route path="/form" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={ <Dash></Dash>} />
            <Route path="/user_table" element={<Tableau />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/forgot" element={<Forgetpass />} />
            <Route path="/error" element={<Error />} />
            <Route path="/create" element={<Create />} />
            <Route path="/admin_user" element={< Admin />} />
            <Route path="/generate" element={ < Editor />  } /> 
            <Route path="/statistique" element={<Create />} />
          </Routes>


        </div>
      </BrowserRouter>

    </>
  );
};

export default App;
