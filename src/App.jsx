import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";
import NavItem from "./Components/NavItem";
import Phone from "./Components/Phone";
import PIChart from "./Components/PIChart";
import Rechart from "./Components/Rechart";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <NavItem></NavItem>
      <Home></Home>
      <Rechart></Rechart>
      <PIChart></PIChart>
      <Phone></Phone>
    </>
  );
}

export default App;
