import { useHistory } from "react-router";
import "./Orders.scss";

import food1 from "../../assets/images/food1.png";
import food2 from "../../assets/images/Delete.png";

const Orders = () => {
  const history = useHistory();
  return (
    <>
      <div className="orders closed">
        <h2>Orders #34562</h2>
        <div className="orders-button">
          <button>Dine In</button>
          <button>To Go</button>
          <button>Delivery</button>
        </div>
        <div className="orders-item">
          <div className="orders-item-left">
            <h4>Item</h4>
          </div>
          <div className="orders-item-right">
            <h4>Qty</h4>
            <h4>Price</h4>
          </div>
        </div>
        <div className="orders-wrapper">
          <div className="orders-wrapper-food">
            <div className="orders-wrapper-food-left">
              <img src={food1} alt="" />
              <div className="orders-wrapper-food-left-title">
                <h4>Spicy seasoned sea...</h4>
                <span>$ 2.29</span>
              </div>
            </div>
            <div className="orders-wrapper-food-right">
              <span>2</span>
              <p>$ 4,58</p>
            </div>
          </div>
          <div className="orders-wrapper-delate">
            <h4>Please, just a little bit spicy only.</h4>
            <button>
              <img src={food2} alt="" />
            </button>
          </div>
          <div className="orders-wrapper-food">
            <div className="orders-wrapper-food-left">
              <img src={food1} alt="" />
              <div className="orders-wrapper-food-left-title">
                <h4>Spicy seasoned sea...</h4>
                <span>$ 2.29</span>
              </div>
            </div>
            <div className="orders-wrapper-food-right">
              <span>2</span>
              <p>$ 4,58</p>
            </div>
          </div>
          <div className="orders-wrapper-delate">
            <h4>Please, just a little bit spicy only.</h4>
            <button>
              <img src={food2} alt="" />
            </button>
          </div>
          <div className="orders-wrapper-food">
            <div className="orders-wrapper-food-left">
              <img src={food1} alt="" />
              <div className="orders-wrapper-food-left-title">
                <h4>Spicy seasoned sea...</h4>
                <span>$ 2.29</span>
              </div>
            </div>
            <div className="orders-wrapper-food-right">
              <span>2</span>
              <p>$ 4,58</p>
            </div>
          </div>
          <div className="orders-wrapper-delate">
            <h4>Please, just a little bit spicy only.</h4>
            <button>
              <img src={food2} alt="" />
            </button>
          </div>
        </div>
        <div className="orders-bottom">
          <div className="orders-bottom-block">
            <h5>Discount</h5>
            <h4>$0</h4>
          </div>
          <div className="orders-bottom-block">
            <h5>Sub total</h5>
            <h4>$ 21,03</h4>
          </div>
          <button onClick={() => history.push("/icons2/ikki")}>
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Orders;
