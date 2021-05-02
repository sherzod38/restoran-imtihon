import './SettingsComponent.scss'


const SettingsComponent = ({icon, title, item}) => {
    return(
        <div className="main">
            <div className="main-settings">
                <div className="main-settings-left">
                    <div className="main-settings-left-block">
                       <span>{icon}</span> 
                        <div className="main-settings-left-block-title">
                            <h4>{title}</h4>
                            <h5>{item}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsComponent;