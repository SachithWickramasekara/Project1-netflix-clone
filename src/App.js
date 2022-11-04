import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route,Routes} from 'react-router-dom'
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from './pages/Signup'
import Editor from "./pages/Editor";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={
      <ProtectedRoute>
        <Account/>
      </ProtectedRoute>}/>
      <Route path='/editor' element={<Editor/>}/>
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
