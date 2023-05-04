import React from 'react'
import ProjectStyle from '../CSS-modules/ProjectStyles.module.css'
import Pagedown from '../Pagedown'

const QamionProject = () => {
  const [showButton, setShowButton] = React.useState(false)
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  React.useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 && window.scrollY < 3200 ? setShowButton(true) : setShowButton(false)
    }
    window.addEventListener('scroll', handleScrollButtonVisibility)

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility)
    }
  }, [])
  return (
    <div className={ProjectStyle.pDescription}>
      <h1 >Qamiom</h1>
      <h3>Goals and beginning</h3>
      <p>This is the first real project I've worked on as a developer for a company.
        Qamion is a logistics optimization tool that can be useful for freight transportation companies.
        The current site is a demo for potentional users to test the product.
      </p>
      <h3>My role</h3>
      <p>As a small company, my role was not only to be the sole frontend developer but I've also designed the UI of the site taking UX aspects into account.
        Also for the full product which is in the making, I'm involved in the product development.
      </p>
      <h3>Technologies</h3>
      <p>
        For the frontend, Angular was the chosen framework for its reliability and built in solutions.
        TypeScript and RxJS were needed to effectively work with Angular.
        For styling I've used SCSS and Google Material UI. For testing, Jasmine was used.
        I've worked with all the main features of Angular, such as forms, validators, routing, data binding, decorators, directives, animations and much more.
        I've used libraries such as RxJS to work with data streams, ShepherdJS to create interactive tutorials, Transloco for internalization, Material UI to style components, forms and tables and Leaflet to display routes and locations on a map.
        <br></br>
        The backend was written in Python.
      </p>

      <h3>Key takeaways</h3>
      <p>As my first real-life project and my first project with Angular, I gained a lot of new knowledge about the framework, TypeScript, RxJS and about libraries.
        Now I could see the practical differences between Angular and React more clearly, which I believe is a useful skill.
      </p>
      <h3>Future plans for the project</h3>
      <p>The product development is in progress but I can't discuss more than that.
        Also as this is an internal project, I can't share the source code either.
      </p>
      <Pagedown up={handleScrollToTop} />
    </div>
  )
}

export default QamionProject