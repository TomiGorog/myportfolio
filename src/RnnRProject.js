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
        <h4 className={ProjectStyle.SubTitle}>Sender</h4>
        <li>Motivations: Cost effective delivery, quick delivery, customer satisfaction and on time delivery with control over the packages</li>

        <ol>
          <h5>Needed to react the goals:</h5>
        <li> registration / login, </li>
        <li>upload package parameters, </li>
        <li>Give package to runner</li>
        <li>Package tracking</li>
        <li>Searching sent packages</li>
        <li>Following packages when being a receiver</li>
        <li>Being able to modify personal data</li>
        </ol>
      </ul>
      <ul>
        <h4 className={ProjectStyle.SubTitle}>Runner</h4>
        <li>Motivations: Financial goals, good review more job, instant job search</li>

        <ol>
          <h5>Needed to react the goals:</h5>
        <li> registration / login, </li>
        <li>Search for available packages </li>
        <li>Apply for the choosen package</li>
        <li>Pickup the package</li>
        <li>Deliver the package with GPS tracking and QR-based delivery</li>
        <li>Quickly be able to apply for other packages</li>
        <li>Track delivered packages, income and ratings</li>
        <li>Being able to modify personal data</li>
        </ol>
      </ul>
      <ul>
        <h4 className={ProjectStyle.SubTitle}>Receiver</h4>
        <li>Motivations: Intact package arriving on time, package tracking, reviewing delivery performance, cost effective delivery</li>

        <ol>
          <h5>Needed to react the goals:</h5>
        <li> registration / login, </li>
        <li>Search for available packages </li>
        <li>Apply for the choosen package</li>
        <li>Pickup the package</li>
        <li>Deliver the package with GPS tracking and QR-based delivery</li>
        <li>Quickly be able to apply for other packages</li>
        <li>Track delivered packages, income and ratings</li>
        <li>Being able to modify personal data</li>
        </ol>
      </ul>
    </div>
  )
}

export default RnnRProject