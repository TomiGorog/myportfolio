import React from 'react'

import NavStyle from './CSS-modules/NavigationStyles.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
function Navigation() {

    let navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
      }, [location]);
    return (
        <div className='navigation'>
            <div
                onClick={() => {
                    navigate("/")
                    
                }}
                className='logo'>TGDev</div>

            <div className={NavStyle.TabsMenu}>
                <Link onClick={() => {
                    
                }}
                    to="about"
                    id={location.pathname.includes("about")? "activeTab" : ""}
                >About</Link>
                <Link onClick={() => {
                    
                }}
                    to="projects"
                    id={location.pathname.includes("projects")? "activeTab" : ""}
                >Projects</Link>
                {/* <Link onClick={() => {
                    setActiveTab(3)
                }}
                    to="contact"
                    id={activeTab == 3 && !fromFormSubmit || fromHome && !fromFormSubmit? "activeTab" : ""}
                >Contact</Link> */}

                <a href="https://drive.google.com/drive/folders/1Eu-6gGULSMrZgix-8wsU8O_bwHvKIZ4G?usp=sharing" target="_blank" rel="noreferrer" >Resume</a>
            </div>

        </div>
    )
    
}

export default Navigation