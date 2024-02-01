import './index.scss';
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo/index';
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['R', 'a', 'f', 'a', 'y', ',']
    const startingArray = ['H', 'e', 'l', 'l', 'o', ',']
    const pronounArray = ['I', '', 'a', 'm', '']
    const workArray = ['W', 'e', 'b', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 6000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={startingArray} letterClass={letterClass} index={10} />
                        <br />
                        <AnimatedLetters strArray={pronounArray} letterClass={letterClass} index={15} />
                        <AnimatedLetters strArray={nameArray} letterClass={letterClass} index={22} />
                        <br />
                        <AnimatedLetters strArray={workArray} letterClass={letterClass} index={35} />
                    </h1>
                    <h2>MERN Stack Web Engineer / Javascript / Freelancer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" className="loader-active" />
        </>

    )
}

export default Home