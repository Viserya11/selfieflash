import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar";
import MyJumbo from "./components/jumbotron";
import Packages from "./components/packages";
import './style.css'
import Introduction from "./components/intro";
import Borders from "./components/borders";
import CarouselOne from "./components/carousel";
import Reservation from "./components/reservation";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyJumbo />
      <Introduction/>
      <CarouselOne/>
      <Borders/>
      <Packages />
      <Reservation/>
      <Footer/>
    </div>
  );
}

export default App;
