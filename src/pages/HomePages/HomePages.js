import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import "./HomePages.scss";

import FoodCard from "../../components/FoodCard/FoodCard";
import Orders from "../../containers/Orders/Orders";
import Payment from "../../components/Payment";

import Icon from "../../assets/icons";

import search from "../../assets/images/icons/search.svg";

import foodImgs from "../../assets/images/food1.png";
import foodImgs2 from "../../assets/images/food2.png";

const HomePages = () => {
  const { path, url } = useRouteMatch();
  //   console.log("apth", url);
  return (
    <div className="wrapper">
      <div className="main">
        <div className="header">
          <div className="header-top">
            <div className="header-top-left">
              <h1>Jaegar Resto</h1>
              <h4>Tuesday, 2 Feb 2021</h4>
            </div>
            <div className="header-top-right">
              <img src={search} alt="" />
              <input
                type="search"
                placeholder="Search for food, coffe, etc.."
                name=""
                id=""
              />
            </div>
          </div>
          <div className="header-midl">
            <button>Hot Dishes</button>
            <button>Cold Dishes</button>
            <button>Soup</button>
            <button>Grill</button>
            <button>Appetizer</button>
            <button>Dessert</button>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-left">
              <h3>Choose Dishes</h3>
            </div>
            <div className="header-bottom-right">
              <select className="header-bottom-right-select" name="" id="">
                <option value="">Dine In</option>
                <option value="">Disert</option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
        <div className="food-cards">
          <FoodCard foodImg={foodImgs} />
          <FoodCard foodImg={foodImgs2} />
          <FoodCard foodImg={foodImgs} />
          <FoodCard foodImg={foodImgs} />
          <FoodCard foodImg={foodImgs} />
          <FoodCard foodImg={foodImgs} />
          <FoodCard foodImg={foodImgs} />
          <FoodCard foodImg={foodImgs} />
          <FoodCard foodImg={foodImgs} />
        </div>
      </div>
      <div className="orders">
        <Switch>
          <Route exact path={`${path}`} component={Orders} />
          <Route exact path={`${path}/ikki`} component={Payment} />
        </Switch>
      </div>
    </div>
  );
};

export default HomePages;
