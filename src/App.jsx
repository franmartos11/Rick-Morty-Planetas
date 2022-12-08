
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";
import {Routes, Route} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {
  return (
      <div className="App">
        <ContextProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/favs" element={<Favs/>}></Route>           
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="favs/detail/:id" element={<Detail/>}></Route>
          </Routes>
          <Footer/>
          </ContextProvider>
      </div>
  );
}

export default App;
