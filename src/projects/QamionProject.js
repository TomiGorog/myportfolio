import React from 'react'
import ProjectStyle from '../CSS-modules/ProjectStyles.module.css'

const QamionProject = () => {
  return (
    <>
    
    <h2 >RnnR</h2>
    <h3>Goals and beginning</h3>
    <p>During the projects' ideation phase we talked about potentional user groups,
      their motivations and the actions users have to take to reach their goals:
    </p>
    <ul>
      <h4 className={ProjectStyle.SubTitle}>Sender</h4>
      <li className={ProjectStyle.NoDot}>Motivations: Cost effective delivery, quick delivery, customer satisfaction and on time delivery with control over the packages</li>

      <ol>
        <h5>Actions required to reach the goals:</h5>
        <li>Registration / login, </li>
        <li>Upload package parameters, </li>
        <li>Give package to runner</li>
        <li>Package tracking</li>
        <li>Searching sent packages</li>
        <li>Following packages when being a receiver</li>
        <li>Being able to modify personal data</li>
      </ol>
    </ul>
    </>
  )
}

export default QamionProject