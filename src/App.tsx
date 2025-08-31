// import Footer from "./common/Footer"
// import Header from "./common/Header"
// import Home from "./component/Home"

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./common/Footer"
import Header from "./common/Header"
import Home from "./component/Home"
import Strength from "./component/Strength"

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Profile -> Strength Page */}
        <Route path="/strength" element={<Strength />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
