// import './App.css';
// import Header from './Components/Headers';
// import LaunchDate from './Components/LaunchDate';
// import Footer from './Components/Footer';
// import SideBar from './Components/SideBar';
import {Route, Routes, useLocation, useParams, BrowserRouter} from "react-router-dom";
import Subscribe from "./Components/Subscribe";
import Home from "./Pages/Home";
function App() {
  // const location = useLocation();
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = "/subscribe" element = {<Subscribe />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
