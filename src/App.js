import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route
            path="/page1"
            element={() => (
              <Routes>
                <Route exact path="/page1" element={<Page1 />}>
                </Route>
                <Route  path="/page1/detailA" >
                  <Page1DetailA/>
                </Route>
                <Route path="/page1/detailB" >
                  <Page1DetailB />
                </Route>
              </Routes>
            )}
          ></Route>

          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
