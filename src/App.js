
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home";
import New from "./pages/New";
import Contact from "./pages/Contact";


function App() {

  return ( 
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<New />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    );
}

export default App;
