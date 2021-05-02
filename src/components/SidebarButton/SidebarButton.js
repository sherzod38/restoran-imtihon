import './SidebarButton.scss';

const SidebarButton = ({ icon, active }) => {
    // console.log(active)
    return (
        <button className={`sidebar-btn ${active ? 'active' : ''}`}>
            <div className="btn-icon">{icon}</div>
        </button>
        
    )
} 

export default SidebarButton;