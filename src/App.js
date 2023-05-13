import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar";
import MyJumbo from "./components/jumbotron";
import Packages from "./components/packages";
import './style.css'
import Introduction from "./components/intro";
import Borders from "./components/borders";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyJumbo />
      <Introduction/>
      <Borders/>
      <Packages />
      
    </div>
  );
}

export default App;
