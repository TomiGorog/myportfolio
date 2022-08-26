import React from 'react'

import NavStyle from './CSS-modules/NavigationStyles.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
function Navigation() {

    const [activeTab, setActiveTab] = React.useState(0)
    let navigate = useNavigate()
    const { state } = useLocation();

    const { fromHome } = state || {};
    if (fromHome) {
        console.log(fromHome)
    } else {
        console.log("hawads")
    }
    const { fromFormSubmit } = state || {};
    if (fromFormSubmit) {
        console.log(fromFormSubmit)
    } else {
        console.log("hawads")
    }

    React.useEffect(() => {
        setActiveTab(JSON.parse(window.sessionStorage.getItem("activeTab")));
    }, []);

    React.useEffect(() => {
        window.sessionStorage.setItem("activeTab", activeTab);
    }, [activeTab]);
    console.log(activeTab)
    return (
        <div className='navigation'>
            <div
                onClick={() => {
                    navigate("/")
                    setActiveTab(0)
                }}
                className='logo'>TGDev</div>

            <div className={NavStyle.TabsMenu}>
                <Link onClick={() => {
                    setActiveTab(1)
                }}
                    to="about"
                    id={activeTab == 1 ? "activeTab" : ""}
                >About</Link>
                <Link onClick={() => {
                    setActiveTab(2)
                }}
                    to="projects"
                    id={activeTab == 2 ? "activeTab" : ""}
                >Projects</Link>
                <Link onClick={() => {
                    setActiveTab(3)
                }}
                    to="contact"
                    id={activeTab == 3 && !fromFormSubmit || fromHome && !fromFormSubmit? "activeTab" : ""}
                >Contact</Link>

                <a href="https://drive.google.com/drive/folders/1Eu-6gGULSMrZgix-8wsU8O_bwHvKIZ4G?usp=sharing" target="_blank" >Resume</a>
            </div>

        </div>
    )
}

export default Navigation