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


import Chat from './components/chat'
import Error from "./components/patherror"
import Errorr from "./components/welcome"





function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
          <Route  exact path="/chat" element={<Chat/>} />
          <Route  exactpath="/form" element={<Form />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={ <Dash></Dash>} />
            <Route exact path="/user_table" element={<Tableau />} />
            <Route exact path="/profil" element={<Profile />} />
            <Route exact path="/forgot" element={<Forgetpass />} />
            <Route exact path="/error" element={<Error />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/admin_user" element={< Admin />} />
            <Route exact path="/generate" element={ < Editor />  } /> 
            <Route exact path='*' element={<Error/>}/>
          
            <Route exact path='/' element={<Errorr/>}/>
           
          
          </Routes>


        </div>
      </BrowserRouter>

    </>
  );
};

export default App;
