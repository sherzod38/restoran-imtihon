import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./containers/Sidebar/Sidebar";

import HomePages from "./pages/HomePages";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import FoodMenu from './containers/FoodMenu/FoodMenu';

import "./assets/styles/main.scss";

function App() {
  return (
    <Router>
      <div className="App container">
        <Sidebar />

        {/* <Toolbar/> */}

        <div className="content">
          <Switch>
            <Route path="/icons2" component={HomePages} />
            <Route path="/icons3" component={FoodMenu} />
            <Route path="/icons4" component={Dashboard} />
            <Route path="/icons7" component={Settings} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
