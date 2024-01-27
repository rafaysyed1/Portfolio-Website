import './index.scss';
import { Link } from 'react-router-dom'
const Home = ()=>{
    return (
        <div className='container home-page'>
            <div className='text-zone'>
            <h1>Hello, <br/> 
            I'm Rafay,
            <br/>
            Web Engineer.
            </h1>
            <h2>MERN Stack Web Engineer / Javascript / Freelancer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home