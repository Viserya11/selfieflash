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
import { BrowserRouter } from "react-router-dom";
import Index from "./components/scrollup";
import ScrollUp from "./components/scrollup";
import PhotoBreak from "./components/photobreak";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
      <MyJumbo />
      <Introduction/>
      <PhotoBreak/>
      <Borders/>
      <Packages />
      <CarouselOne/>
      <Reservation/>
      <Footer/>
      </BrowserRouter>
      <ScrollUp/>
    </div>
  );
}

export default App;
