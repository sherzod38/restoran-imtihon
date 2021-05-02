import './FoodCard.scss'

import food1 from '../../assets/images/food1.png'

const FoodCard = ({foodImg}) => {
    return (
        <div className="food-card">
            <img src={foodImg} alt=""/>
            <h4>Spicy seasoned seafood noodles</h4>
            <h4>$ 2.29</h4>
            <h5>20 Bowls available</h5>
        </div>
    )
}

export default FoodCard;