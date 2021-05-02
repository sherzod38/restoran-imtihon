import './Settings.scss'

import SettingsComponent from '../../components/SettingsComponent'
import data from '../../data1/Data'
import food1 from '../../assets/images/food1.png'
import food2 from '../../assets/images/food2.png'
import food3 from '../../assets/images/food3.png'
import food4 from '../../assets/images/food4.png'
import food5 from '../../assets/images/food5.png'
import ellips from '../../assets/images/Ellips.png'
import plus from '../../assets/images/icons/Plus 24px.png'
import victor from '../../assets/images/icons/Vector1.svg'

const Settings = () => {
    return(
        <div className="main">
                <h1>Settings</h1>
            <div className="settings">
                <div className="settings-left">
                    
                    {data.map((item) => {
                        return(
                            <SettingsComponent
                                icon={item.icon}
                                title={item.title}
                                item={item.item}
                            /> 
                        )
                    })}
                </div>
                <div className="settings-right">
                    <div className="settings-right-header">
                        <div className="settings-right-header-top">
                           <h3>Products Management</h3>
                            <button>Manage Categories</button> 
                        </div>
                        <div className="settings-right-header-bottom">
                            <button>Hot Dishes</button>
                            <button>Cold Dishes</button>
                            <button>Soup</button>
                            <button>Grill</button>
                            <button>Appetizer</button>
                            <button>Dessert</button>
                        </div>
                    </div>
                    <div className="settings-right-midl">
                        <div className=" settings-right-midl-block--plus">
                            <img id='plus' className='settings-right-midl-block--plus-img' src={plus} />
                            <h5>Add new dish</h5>
                        </div>
                        <div className="settings-right-midl-block">
                            <img src={food1} />
                            <h4>Spicy seasoned seafood noodles</h4>
                            <span className='settings-right-midl-block-span1'>$ 2.29</span>
                            <span className='settings-right-midl-block-span2'></span>
                            <span className='settings-right-midl-block-span3'>20 Bowls</span>
                            <div className="settings-right-midl-block-last">
                                <span className="settings-right-midl-block-last-span4"><img src={victor} /></span>
                                <span className="settings-right-midl-block-last-span5">Edit dish</span>
                            </div>
                        </div>
                        <div className="settings-right-midl-block">
                            <img src={food2} />
                            <h4>Spicy seasoned seafood noodles</h4>
                            <span className='settings-right-midl-block-span1'>$ 2.29</span>
                            <span className='settings-right-midl-block-span2'></span>
                            <span className='settings-right-midl-block-span3'>20 Bowls</span>
                            <div className="settings-right-midl-block-last">
                                <span className="settings-right-midl-block-last-span4"><img src={victor} /></span>
                                <span className="settings-right-midl-block-last-span5">Edit dish</span>
                            </div>
                        </div>
                        <div className="settings-right-midl-block">
                            <img src={food3} />
                            <h4>Spicy seasoned seafood noodles</h4>
                            <span className='settings-right-midl-block-span1'>$ 2.29</span>
                            <span className='settings-right-midl-block-span2'></span>
                            <span className='settings-right-midl-block-span3'>20 Bowls</span>
                            <div className="settings-right-midl-block-last">
                                <span className="settings-right-midl-block-last-span4"><img src={victor} /></span>
                                <span className="settings-right-midl-block-last-span5">Edit dish</span>
                            </div>
                        </div>
                        <div className="settings-right-midl-block">
                            <img src={food4} />
                            <h4>Spicy seasoned seafood noodles</h4>
                            <span className='settings-right-midl-block-span1'>$ 2.29</span>
                            <span className='settings-right-midl-block-span2'></span>
                            <span className='settings-right-midl-block-span3'>20 Bowls</span>
                            <div className="settings-right-midl-block-last">
                                <span className="settings-right-midl-block-last-span4"><img src={victor} /></span>
                                <span className="settings-right-midl-block-last-span5">Edit dish</span>
                            </div>
                        </div>
                        <div className="settings-right-midl-block">
                            <img src={food5} />
                            <h4>Spicy seasoned seafood noodles</h4>
                            <span className='settings-right-midl-block-span1'>$ 2.29</span>
                            <span className='settings-right-midl-block-span2'></span>
                            <span className='settings-right-midl-block-span3'>20 Bowls</span>
                            <div className="settings-right-midl-block-last">
                                <span className="settings-right-midl-block-last-span4"></span>
                                <span className="settings-right-midl-block-last-span5">Edit dish</span>
                            </div>
                        </div>
                    </div>
                    <div className="settings-right-bottom">
                        <div className="settings-right-bottom-inner">
                        <button className='settings-right-bottom-inner-left'>Discard Changes</button>
                        <button className='settings-right-bottom-inner-right'>Save Changes</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Settings;