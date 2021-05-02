import './Customer.scss';





import Avatar1 from '../../assets/images/Avatar1.png'

const Customer = ({avatar, name, menu, prise, complated, preparing, pending }) => {
    return (
        <div className="customer">
            <div className="customer-block">
                    <img src={avatar} alt=""/>
                    <h3>{name}</h3>
                    <h4>{menu}</h4>
                    <h5>{prise}</h5>
                    <span className={complated && 'complated' || preparing && 'preparing' || pending && 'pending'}>
                        {complated && <>Completed</> || preparing && <>Preparing</> || pending && <>Pending</>}
                        
                    </span>
                </div> 
        </div>
    )
}

export default Customer;