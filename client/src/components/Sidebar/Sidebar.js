import React, { useState } from "react";
import "./Sidebar.scss";
import { navItems } from "../../statics/navItems";
const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title);

    return (
        <div className="sidebar-container">
            <div className="sidebar-title">scekabase</div>
            <div className="sidebar-container-wrapper">
                {navItems.map((item, index) => (
                    <div
                        className="navItem"
                        onClick={() => setActiveIcon(item.title)}
                    >
                        <div
                            className="navIcon"
                            style={{
                                color: item.title === activeIcon && "#3773f5",
                            }}
                        >
                            {item.icon}
                        </div>
                        <div className="navTitle">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
