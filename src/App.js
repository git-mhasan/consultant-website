import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Checkout from './components/Pages/Checkout/Checkout';
import Blogs from './components/Pages/Blogs/Blogs';
import About from './components/Pages/About/About';
import NotFound from './components/Shared/NotFound/NotFound';
import Login from './components/Pages/Login/Login/Login';
import SignUp from './components/Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
