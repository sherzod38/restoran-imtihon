import { useState } from "react";
import { useHistory } from "react-router";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import "./FoodMenu.scss";

const FoodMenu = () => {
  // const [activePage, setActivePage] = useState();
  const history = useHistory();

  return (
    <div className="main">
      <div className="nav-link">
          {/* <FoodMenu activePage={activePage} setActivePage={setActivePage}/> */}
        <button onClick={() => history.push("/icons3")}>Hot Dishes</button>
        <button>Cold Dishes</button>
        <button>Soup</button>
        <button>Grill</button>
        <button>Appetizer</button>
        <button>Dessert</button>
      </div>

    </div>
  );
};

export default FoodMenu;
