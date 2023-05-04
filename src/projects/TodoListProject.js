import React from 'react'
import ProjectStyle from '../CSS-modules/ProjectStyles.module.css'
import Pagedown from '../Pagedown'

function TodoListProject() {
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
        <div className={ProjectStyle.RnnR}>
            <h2 >Daily todolist</h2>
            <h3>Aim of the project</h3>
            <p>Practice React hooks, component based development, file structing, do some basic styling with styled components.
            </p>
            <ul>
                <h4 className={ProjectStyle.SubTitle}>Technologies</h4>
                <li className={ProjectStyle.NoDot}>Aim: single page webapp without authentication and database usage</li>
                <ol className={ProjectStyle.TodoListList}>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Styled components</li>
                    <li>git</li>
                    <li>local and session storage</li>
                </ol>
            </ul>
            <h3>Key takeaways</h3>
            <p>I could solve the emerging problems using array functions.
                Created Modal components, reused the same form for different purposes.
                Started to use the styled components library.
                Utilized localStorage and sessionStorage creating a fairly well functioning single page webapp that stores the data in the browser until the user decides to clean it.</p>
            <h3>Space for improvement</h3>
            <p>While I've used styled components, my focus wasn't on the best UI. That can be especially seen with the colors  but I didn't want to copy and existing app's color scheme.
                Reusability: while some components can be used for multiple purposes, most of my components are to complex and couldn't be reused effectively.
                The users can't access their tasklist on different devices, this is because of localstorage, however because I just wanted to develop a simple webapp that requires no authentication I didn't use any backend or database system.
            </p>
            <h3>Future plans for the project</h3>
            <p>After learning Typescript, I want to refactor my code from JS to TS.
                If you have any suggestions/questions, please contact me at tamas.peter.gorog@gmail.com</p>
            <Pagedown up={handleScrollToTop} />
        </div>
    )


}

export default TodoListProject