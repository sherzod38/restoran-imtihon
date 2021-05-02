import { useHistory } from "react-router";
import "./Payment.scss";

const Payment = () => {
  const history = useHistory();
  return (
    <div className="payment">
      <div className="payment-header">
        <h1>Payment</h1>
        <h4>3 payment method available</h4>
      </div>
      <form className="payment-form" action="">
        <h3>Payment Method</h3>
        <div className="payment-form-checked">
          <label htmlFor="">
            <input type="radio" name="m1" id="" />
            Credit Card
          </label>
          <label htmlFor="">
            <input type="radio" name="m1" id="" />
            Paypal
          </label>
          <label htmlFor="">
            <input type="radio" name="m1" id="" />
            Cash
          </label>
        </div>
        <label className="payment-form-label1" htmlFor="">
          Cardholder Name
          <input placeholder="Levi Ackerman" type="text" />
        </label>
        <label className="payment-form-label1" htmlFor="">
          Card Number
          <input placeholder="2564 1421 0897 1244" type="text" />
        </label>
        <div className="payment-form-card">
          <label htmlFor="">
            Expiration Date
            <input placeholder="02/2022" type="date" name="" id="" />
          </label>
          <label htmlFor="">
            CVV
            <input type="password" placeholder="***" name="" id="" />
          </label>
        </div>
        <div className="payment-form-select">
          <label className="payment-form-select-label1" htmlFor="">
            Order Type
            <select name="" id="">
              <option value="">Dine In</option>
              <option value="">Olmali</option>
              <option value="">Tarvuz</option>
            </select>
          </label>
          <label className="payment-form-select-label1" htmlFor="">
            Table no.
            <input type="number" placeholder="140" name="" id="" />
          </label>
        </div>
        <div className="payment-form-bottom">
          <button
            className="payment-form-bottom-left"
            onClick={() => history.push("/icons2")}
          >
            Cancel
          </button>
          <button
            className="payment-form-bottom-right"
            onClick={() => history.push("/icons2")}
          >
            Confirm Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
