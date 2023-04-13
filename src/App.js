import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./Components/Headers";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./Components/News";

const App = () => {
  // const pageSize = 6;
  const apikey = process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <Router>
        <Headers />
        <Routes>
          <Route
            exact
            path="/top-headlines"
            element={
              <News
                key="top-headlines"
                pageSize={6}
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
                pageSize="6"
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
                pageSize="6"
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
                pageSize="6"
                country="us"
                category="General"
              />
            }
          ></Route>
          <Route
            exact
            path="/Health"
            element={
              <News key="Health" pageSize="6" country="us" category="Health" />
            }
          ></Route>
          <Route
            exact
            path="/Science"
            element={
              <News
                key="Science"
                pageSize="6"
                country="us"
                category="Science"
              />
            }
          ></Route>
          <Route
            exact
            path="/Sports"
            element={
              <News key="Sports" pageSize="6" country="us" category="Sports" />
            }
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News
                key="Technology "
                pageSize="6"
                country="us"
                category="Technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
