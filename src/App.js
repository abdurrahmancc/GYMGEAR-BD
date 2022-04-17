import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";
import About from "./Components/Pages/About/About";
import Blogs from "./Components/Pages/Blogs/Blogs";
import NotFound from "./Components/Pages/NOtFound/NotFound";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import RequierAuth from "./Components/RequierAuth/RequierAuth";
import Loading from "./Components/Shared/Loading/Loading";
import { Toaster } from "react-hot-toast";
import ProccedCheckOut from "./Components/Pages/ProccedCheckOut/ProccedCheckOut";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/blog"
          element={
            <RequierAuth>
              <Blogs></Blogs>
            </RequierAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkout/:id" element={<ProccedCheckOut></ProccedCheckOut>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
