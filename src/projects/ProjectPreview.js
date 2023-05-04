import React from 'react'
import ProjectStyles from '../CSS-modules/ProjectStyles.module.css'
import { DiGithubBadge } from "react-icons/di";
import { IoMdOpen } from 'react-icons/io'
import { Link } from 'react-router-dom';

const ProjectPreview = ({id, title, keySentence, techStack, detailURL, liveLink, repo}) => {
    return (
        <div id={id} className={ProjectStyles.ProjectTemplate}>
            <h2 className={ProjectStyles.Title}>{title}</h2>
            <p className={ProjectStyles.KeySentence}>{keySentence}</p>
            <Link to={detailURL} className={ProjectStyles.LinktoProject}>Project Details</Link>
            <h3 className={ProjectStyles.TechStack}>{techStack}</h3>
            <div className={ProjectStyles.BottomLine}>
                {repo && <a href={`https://github.com/TomiGorog/${detailURL}`} target="_blank" rel="noreferrer"><DiGithubBadge className={ProjectStyles.Icons} /></a>}
                <a href={liveLink} target="_blank" rel="noreferrer"><IoMdOpen className={ProjectStyles.Icons} /></a>
            </div>
        </div>
    )
}

export default ProjectPreview