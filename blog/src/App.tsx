import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { NewPost } from "./components/NewPost";
import { EditPost } from "./components/EditPost";

export function App() {

  return (
    //O roteamento da aplicação abrange todo o que está no Router
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<NewPost />} />
            <Route path="/edit" element={<EditPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
