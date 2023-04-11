import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Class_components/Navbar";
import News from "./Class_components/News";
// import Navbar from './components/Navbar';
// import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar />
      <News /> */}

        <Navbar />
        <Routes>
          <Route
            exact
            path="/top-headlines"
            element={
              <News
                key="top-headlines"
                pageSize={5}
                country="us"
                category="top-headlines"
              />
            }
          ></Route>
          <Route
            exact
            path="/Business"
            element={
              <News
                key="Business"
                pageSize="5"
                country="us"
                category="Business"
              />
            }
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                key="Entertainment"
                pageSize="5"
                country="us"
                category="Entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/General"
            element={
              <News
                key="General"
                pageSize="5"
                country="us"
                category="General"
              />
            }
          ></Route>
          <Route
            exact
            path="/Health"
            element={
              <News key="Health" pageSize="5" country="us" category="Health" />
            }
          ></Route>
          <Route
            exact
            path="/Science"
            element={
              <News
                key="Science"
                pageSize="5"
                country="us"
                category="Science"
              />
            }
          ></Route>
          <Route
            exact
            path="/Sports"
            element={
              <News key="Sports" pageSize="5" country="us" category="Sports" />
            }
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News
                key="Technology "
                pageSize="5"
                country="us"
                category="Technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
