import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./common/Footer"
import Header from "./common/Header"
import Home from "./component/Home"
import Strength from "./component/Strength"
import Gallery from "./component/Gallery"
import Projects from "./component/Projects"
import ContactUs from "./component/ContactUs"
import ScrollToTop from "./common/ScrollToTop"   // ✅ import it

const App = () => {
  return (
    <Router>
      <ScrollToTop />   {/* ✅ ensure scroll resets on route change */}
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Profile -> Strength Page */}
        <Route path="/strength" element={<Strength />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
