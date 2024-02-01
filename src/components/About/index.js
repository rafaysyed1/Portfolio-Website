import { useState,useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const aboutMeArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']
    useEffect(() => {
 
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);
   
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutMeArray} index={15} />
                </h1>
                <p>
                    Hello, I'm Rafay, a software engineering student in 3rd year.
                    I have proven academic excellence in programming fundamentals, OOP,Database Systems and Requirement Engineering.
                </p>
                <p> I specialize in creating efficient and user-friendly websites using the MERN stack (ReactJS, NextJS, NodeJS, ExpressJS, and MongoDB).
                    Alongside my technical skills, I have a strong understanding of the software engineering life cycle, ensuring that development is not only efficient but also maintains high quality.</p>
                <p>
                    If I were to encapsulate myself in a single sentence, I would describe me as a problem solver, inherently curious, and a firm believer in the efficacy of smart work
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                   <div className='face1'>
                   <FontAwesomeIcon icon={faReact} color='#DD0031' />
                   </div>
                   <div className='face2'>
                   <FontAwesomeIcon icon={faNode} color='#F06529' />
                   </div>
                   <div className='face3'>
                   <FontAwesomeIcon icon={faHtml5} color='#28A4D9' />
                   </div>
                   <div className='face4'>
                   <FontAwesomeIcon icon={faJsSquare} color='#DDF700' />
                   </div>
                   <div className='face5'>
                   <FontAwesomeIcon icon={faCss3} color='#EFD81D' />
                   </div>
                   <div className='face6'>
                   <FontAwesomeIcon icon={faGitAlt} color='#EC4E28' />
                   </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" className="loader-active" />
        </>
        
    )
}

export default About 