import Homepage from './homepage';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Dining from './Dining'
import { Routes, Route } from "react-router-dom";
import BookNow from './BookNow';
import Blogs from './Blogs'
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import RoomsList from './RoomsList.jsx'
import RoomDetail from './RoomDetail.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/dining' element={<Dining/>}/>
      <Route path='/book-now' element={<BookNow/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/rooms' element={<RoomsList/>}/>
      <Route path="/rooms/:slug" element={<RoomDetail />} />

    </Routes>
    </>
  );
}

export default App;
