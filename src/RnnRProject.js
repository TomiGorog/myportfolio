import React from 'react'
import ProjectStyle from './CSS-modules/ProjectStyles.module.css'
import Pagedown from './Pagedown'


function RnnRProject() {
  const [showButton, setShowButton] = React.useState(false)
  console.log(showButton)
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
React.useEffect(() => {
  console.log(window.scrollY)
  const handleScrollButtonVisibility = () => {
    window.scrollY > 300 && window.scrollY < 3200 ? setShowButton(true) : setShowButton(false)
  }
  window.addEventListener('scroll', handleScrollButtonVisibility)

  return () => {
    window.removeEventListener('scroll', handleScrollButtonVisibility)
  }
}, [])


  return (
    <div className={ProjectStyle.RnnR}>
      <h2 >RnnR</h2>
      <h3>Goals and beginning</h3>
      <p>During the projects' ideation phase we talked about potentional user groups,
        their motivations and the actions users have to take to react their goals:
      </p>
      <ul>
        <h4 className={ProjectStyle.SubTitle}>Sender</h4>
        <li className={ProjectStyle.NoDot}>Motivations: Cost effective delivery, quick delivery, customer satisfaction and on time delivery with control over the packages</li>

        <ol>
          <h5>Actions to react the goals:</h5>
          <li>Registration / login, </li>
          <li>Upload package parameters, </li>
          <li>Give package to runner</li>
          <li>Package tracking</li>
          <li>Searching sent packages</li>
          <li>Following packages when being a receiver</li>
          <li>Being able to modify personal data</li>
        </ol>
      </ul>
      <ul>
        <h4 className={ProjectStyle.SubTitle}>Runner</h4>
        <li className={ProjectStyle.NoDot}>Motivations: Financial goals, good review more job, instant job search</li>

        <ol>
          <h5>Actions to react the goals:</h5>
          <li> Registration / login, </li>
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
        <li className={ProjectStyle.NoDot} >Motivations: Intact package arriving on time, package tracking, reviewing delivery performance, cost effective delivery</li>

        <ol>
          <h5>Actions to react the goals:</h5>
          <li>Access incoming package information with package tracking system</li>
          <li>Be able to successfully get the package from the runner</li>
        </ol>
      </ul>
      <ul>
        <h4 className={ProjectStyle.SubTitle}>Superadmin</h4>
        <li className={ProjectStyle.NoDot} >Motivations: Effectively oversee any package registration, delivery and modify or intercept if needed</li>

        <ol>
          <h5>Actions to react the goals:</h5>
          <li>Ability to register packages or runner accounts</li>
          <li>Access, edit or delete runner or package data</li>
          <li>Link runner to package</li>
          <li>List packages and follow-up delivery on Google Maps</li>
        </ol>
      </ul>

      <h3>Methodology</h3>
      <p>During 6 weeks, 5 junior front-end developer worked on the project, we implemented certain elements of SCRUM
        such as daily standups and weekly planning and reviewing sessions. To organiz and follow up tasks
        we used the Kanban methodology with Trello cards. Our priorities often changed so sometimes we had midday meetings.
        We mostly worked in pairs or groups of three rotating the team members collaborating on a daily basis.
        We also often switched up the tasks, that way all of us had a great insight into the code.
        For version tracking and documentation Github was used, after a trello card has been completed, the developers showed and explained the
        code for the other devs in the team to double check and to help them understand the processes.
      </p>
      <h3>Technologies</h3>
      <p>As a front-end framework we worked with React.js. For visuals and layout we used CSS and HTML, striving for responsible web design
        and mobile first design with Flexbox and mediaqueries.
        We implemented APIs that we haven't worked before such as Google Maps Api for real time tracking package, and
        runner positions with geolocation functions. We also introduced a checker which using GPS coordinates of the runner delivering the package and
        the receiver address coordinates checks if the runner is close enough, considering the accuracy of the runner's device.
        We also added a QR-code scan based package reception,
        For the backend we planned and created a database in Firebase. We have used many fetch functions to create, read,
        edit, and delete data &#40;CRUD&#41;. We strived to optimalize the web-app, so we only used realtime fetch functions when the rerender of a DOM was an absolute must for the user experience.
        To limit the number of sent HTTP requests, we refreshed the data after a successful data fetch on the client-side, instead of rerendering everything from the server.
        We used Firebase authentication to register, login and keep users logged in.
      </p>
      <h3>My role</h3>
      <p>All of us in the team worked on every user function and on the UI as well, however there were tasks where I had more work invested such as:
        In the implementation of the Google Maps Api, the realtime GPS Tracking system, the distance verifying when deliverying packages, QR-code delivery
        or identifying and  refactoring the functions that requiered realtime Firebase data modifications. Also with the basic UI styles and dashboards.
        Other than that I have put a lot of effort to help out my teammates, explain the logic behind the solutions, organize and follow up tasks, ideate on possible solutions and to try to oversee the entire codebase as
        much as possible.
      </p>
      <h3>Key takeaways</h3>
      <p>I think all of us learned a lot during this project which was our first, real project working in a team and
        delivering on time. Obviously, we have made a lot of mistake that I believe we would do differently in the future.
        For instance: This was our first time creating a more detailed database and it could have been made better which would let us have simplier
        fetch functions.
        One big mistake that we made is not reusing components dinamicly so we ended up with a lot of code duplications. In the future I'd use atomic design
        to build components, as simple and customiseable as possible and reuse them to reduce complexity.
        This made our CSS code harder to oversee as well.</p>
      <h3>Future plans for the project</h3>
      <ol>
        <h5>Although we won't be working on this project as a team anymore, we identified some possible future goals that we could not implemented
          in this version.:</h5>
        <li>Refactor and rebuild the code with reusable components</li>
        <li>Payment integration</li>
        <li>Google, Facebook login &#40;Currently only email login available&#41; </li>
        <li>Increasing our data model with more information</li>
        <li>Form and Google Maps Address validation</li>
        <li>Package tracking email</li>
        <li>Reviewing runners</li>
      </ol>
      <Pagedown up={handleScrollToTop} />
      
    </div>
  )


}


export default RnnRProject