import './index.scss';
import { Link } from 'react-router-dom'

import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
const Home = ()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['R','a','f','a','y',',']
    const workArray = ['W','e','b',' ','E','n','g','i','n','e','e','r']
    return (
        <div className='container home-page'>
            <div className='text-zone'>
            <h1>Hello, <br/>I'm  <AnimatedLetters strArray={nameArray} letterClass={letterClass} index={15}/>
            <br/>
            <AnimatedLetters strArray={workArray} letterClass={letterClass} index={22} />
            </h1>
            <h2>MERN Stack Web Engineer / Javascript / Freelancer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home