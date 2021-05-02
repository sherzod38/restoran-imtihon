import Customer from '../../components/Customer'

import './Dashboard.scss';
import data from '../../Data/Data'





import dashImg1 from '../../assets/images/icons/Coin.svg'
import dashImg2 from '../../assets/images/icons/arrov.svg'
import dashImg3 from '../../assets/images/icons/arrov2.svg'
import dashImg4 from '../../assets/images/icons/fail.png'
import dashImg5 from '../../assets/images/icons/man.svg'

import food1 from '../../assets/images/food1.png'
import food2 from '../../assets/images/food2.png'

import circle from '../../assets/images/Circle.png'




const Dashboard = () => {
    console.log(data)
    return (
        <div className="wrapper">
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <h4>Tuesday 2 Feb, 2021</h4>
                </div>
                <div className="dashboard-section1">
                    <div className="dashboard-section1-block">
                        <div className="dashboard-section1-block-price">
                            <span className='span1'><img src={dashImg1} alt=""/></span>
                            <p>+32.40%</p>
                            <span className='span2'><img src={dashImg2} alt=""/></span>
                        </div>
                        <h2>$10,243.00</h2>
                        <h3>Total Revenue</h3>
                    </div>
                    <div className="dashboard-section1-block">
                        <div className="dashboard-section1-block-price">
                            <span className='span1'><img src={dashImg4} alt=""/></span>
                            <p className='red'>-12.40%</p>
                            <span className='span2'><img src={dashImg3} alt=""/></span>
                        </div>
                        <h2>23,456</h2>
                        <h3>Total Dish Ordered</h3>
                    </div>
                    <div className="dashboard-section1-block">
                        <div className="dashboard-section1-block-price">
                            <span className='span1'><img src={dashImg5} alt=""/></span>
                            <p>+2.40%</p>
                            <span className='span2'><img src={dashImg1} alt=""/></span>
                        </div>
                        <h2>1,234</h2>
                        <h3>Total Customer</h3>
                    </div>
                </div>
                <div className="dashboard-section2">
                    <div className="dashboard-section2-top">
                        <h2>Order Report</h2>
                        <input type="search" placeholder='Filter Order' name="" id=""/>
                    </div>
                    <div className="dashboard-section2-bottom">
                        <button>Customer</button>
                        <button>Menu</button>
                        <button>Total Payment</button>
                        <button>Status</button>
                    </div>
                </div>
                <div className="dashboard-section3">
                    {data.map((user)  => {
                    return (

                        <Customer
                            avatar={user.avatar}
                            name={user.name}
                            menu={user.menu}
                            prise={user.price}
                            complated = { user.isCompleted }
                            preparing = { user.isPreparing }
                            pending = { user.isPending }
                        />
                    )
                    })}
                </div>
            </div>
            <div className="wrapper-inner">
                <div className="wrapper-right">
                    <div className="wrapper-right-header">
                        <h3>Most Ordered</h3>
                        <select name="" id="">
                            <option value="">Today</option>
                            <option value="">soday</option>
                            <option value="">moday</option>
                        </select>
                    </div>
                    <div className="wrapper-right-section">
                        <div className="wrapper-right-section-block">
                            <img src={food1} alt=""/>
                            <div className="wrapper-right-section-block-title">
                                <h4>Spicy seasoned seafood noodles</h4>
                                <h5>200 dishes ordered</h5>
                            </div>
                        </div>
                        <div className="wrapper-right-section-block">
                            <img src={food2} alt=""/>
                            <div className="wrapper-right-section-block-title">
                                <h4>Salted pasta with mushroom sauce</h4>
                                <h5>120 dishes ordered</h5>
                            </div>
                        </div>
                        <div className="wrapper-right-section-block">
                            <img src={food1} alt=""/>
                            <div className="wrapper-right-section-block-title">
                                <h4>Beef dumpling in hot and sour soup</h4>
                                <h5>80 dishes ordered</h5>
                            </div>
                        </div>

                    </div>
                    <div className="wrapper-right-button">
                        <button>
                            View All
                        </button>
                    </div>
                </div>
                <div className="wrapper-inner-bottom">
                    <div className="wrapper-inner-bottom-header">
                        <h2>Most Type of Order</h2>
                        <select name="" id="">
                            <option value="">Today</option>
                            <option value="">Soday</option>
                            <option value="">Yoday</option>
                        </select>
                    </div>
                    <div className="wrapper-inner-bottom-section">
                        <img src={circle} alt=""/>

                        <div className="wrapper-inner-bottom-section-block">
                            <div className="wrapper-inner-bottom-section-block-inner">
                                <h4>Dine In</h4>
                                <h5>200 customers</h5>
                            </div>
                            <div className="wrapper-inner-bottom-section-block-inner blue">
                                <h4>To Go</h4>
                                <h5>122 customers</h5>
                            </div>
                            <div className="wrapper-inner-bottom-section-block-inner red">
                                <h4>Delivery</h4>
                                <h5>264 customers</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;