import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo-rafay.png'
import LogoSubtitle from '../../assets/images/logo-rafay-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    const GITHUB_HANDLE = process.env.REACT_APP_GITHUB_HANDLE ;
    const LINKEDIN_HANDLE = process.env.REACT_APP_LINKEDIN_HANDLE;
    const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER;
    return (
        <div className='nav-bar'>
            <Link className='logo' >
                <img src={Logo} alt="Logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="rafay" />

            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link" >
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href={LINKEDIN_HANDLE}>
                        <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e"/> 
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href={GITHUB_HANDLE}>
                        <FontAwesomeIcon icon = {faGithub} color="#4d4d4e"/> 
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href={WHATSAPP_NUMBER}>
                        <FontAwesomeIcon icon = {faWhatsapp} color="#4d4d4e"/> 
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Sidebar