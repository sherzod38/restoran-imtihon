import { Link } from "react-router-dom";
import { useState } from "react";

import SidebarButton from '../../components/SidebarButton/SidebarButton'

import Icon from '../../assets/icons'

import './sidebar.scss'

const Sidebar = () => {
    const [activPage, setActivPage] = useState("icons2");
    return(
        <div className="sidebar">

            <Link
                to="/icons1"
                className="link"
                // onClick={() => setActivPage("icons1")}
            >
                <SidebarButton
                    icon={<Icon.Icon1 />}
                    active={activPage === "icons1"}
                />

            </Link>
            <Link
                to="/icons2"
                className="link"
                onClick={() => setActivPage("icons2")}
            >
                <SidebarButton
                    icon={<Icon.Icon2 />}
                    active={activPage === "icons2"}
                />

            </Link>
            <Link
                to="/icons3"
                className="link"
                onClick={() => setActivPage("icons3")}
            >
                <SidebarButton
                    icon={<Icon.Icon3 />}
                    active={activPage === "icons3"}
                />

            </Link>
            <Link
                to="/icons4"
                className="link"
                onClick={() => setActivPage("icons4")}
            >
                <SidebarButton
                    icon={<Icon.Icon4 />}
                    active={activPage === "icons4"}
                />

            </Link>
            <Link
                to="/icons5"
                className="link"
                onClick={() => setActivPage("icons5")}
            >
                <SidebarButton
                    icon={<Icon.Icon5 />}
                    active={activPage === "icons5"}
                />

            </Link>
            <Link
                to="/icons6"
                className="link"
                onClick={() => setActivPage("icons6")}
            >
                <SidebarButton
                    icon={<Icon.Icon6 />}
                    active={activPage === "icons6"}
                />

            </Link>
            <Link
                to="/icons7"
                className="link"
                onClick={() => setActivPage("icons7")}
            >
                <SidebarButton
                    icon={<Icon.Icon7 />}
                    active={activPage === "icons7"}
                />

            </Link>
            <Link
                to="/icons8"
                className="link"
                onClick={() => setActivPage("icons8")}
            >
                <SidebarButton
                    icon={<Icon.Icon8 />}
                    active={activPage === "icons8"}
                />

            </Link>
            
        </div>
    )
}

export default Sidebar;