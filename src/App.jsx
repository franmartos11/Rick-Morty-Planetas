
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/favs" element={<Favs/>}></Route>
            <Route path="/detail" element={<Detail/>}></Route>
            <Route path="/detail/:odontologoid" element={<Detail/>}></Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
