import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact  from "./Components/Contact";
import Services from "./Components/Services";
import "./styles/footer.scss"
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/color.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
import "./styles/services.scss";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>


    </div>
  );
}

export default App;
