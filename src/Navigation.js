import React from 'react'

import NavStyle from './CSS-modules/NavigationStyles.module.css'
import { Link, useNavigate } from 'react-router-dom'
import  Resume  from './CV/TamasGorog_Frontend_Developer.pdf'
function Navigation() {


    const [activeTab, setActiveTab] = React.useState(0)
    let navigate = useNavigate()

    React.useEffect(() => {
        setActiveTab(JSON.parse(window.sessionStorage.getItem("activeTab")));
      }, []);

      React.useEffect(() => {
        window.sessionStorage.setItem("activeTab", activeTab);
      }, [activeTab]);
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
                id={activeTab == 3 ? "activeTab" : ""}
                >Contact</Link>
                
                <a href="https://drive.google.com/drive/folders/1Eu-6gGULSMrZgix-8wsU8O_bwHvKIZ4G?usp=sharing" target="_blank" >Resume</a>
            </div>

        </div>
    )
}

export default Navigation