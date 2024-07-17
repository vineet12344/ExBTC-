import {React} from "react";
import HomePage from "./components/HomePage";
import Starfield from "react-starfield";
import NavBar from "./components/NavBar";


function App() {


  return (
    <div className="App">
    <Starfield
    speedFactor={0.02}
    starCount={5500}
    backgroundColor='black'
    starColor={[255, 255, 255,255]}/>
    <NavBar/>
    <HomePage/>
    </div>
  );
}

export default App
