import React from 'react'
import ProjectStyle from './CSS-modules/ProjectStyles.module.css'

function RnnRProject() {
  return (
    <div className={ProjectStyle.RnnR}>
      <h2>RnnR</h2>
      <h3>Goals and beginning</h3>
      <p>During the projects' ideation phase we talked about potentional user groups,
         their motivations and the actions users have to take to react their goals:</p>
      <ul>
        <h4>Sender</h4>
        <li>Motivations: Cost effective delivery, quick delivery, customer satisfaction and on time delivery with control over the packages</li>

        <ol>Needed to react the goals:
        <li> registration / login, </li>
        <li>upload package parameters, </li>
        <li>Give package to runner</li>
        <li>Package tracking</li>
        <li>Searching sent packages</li>
        <li>Following packages when being a receiver</li>
        <li>Being able to modify personal data</li>
        </ol>
      </ul>
    </div>
  )
}

export default RnnRProject