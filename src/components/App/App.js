import '../../App.css';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Welcome from '../Welcome/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>

      <Routes>
          <Route path='/'        element={<Landing/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/login'   element={<Login/>}/>
          <Route path='/signup'  element={<SignUp/>}/>
          <Route path='*'        element={<ErrorPage/>}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
