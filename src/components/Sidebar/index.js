import { Link , NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo-rafay.png'
import LogoSubtitle from '../../assets/images/logo-rafay-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () =>{
    return (
        <div className='nav-bar'>
    <Link className='logo' >
        <img src={Logo} alt= "Logo" />
        <img className='sub-logo' src={LogoSubtitle} alt= "rafay" />

    </Link>
    <nav>
        <NavLink exact="true" activeclassname = "active" to = "/" >
           <FontAwesomeIcon icon = {faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact="true" activeclassname = "active" className="about-link" to = "/about" >
           <FontAwesomeIcon icon = {faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact="true" activeclassname = "active" to = "/contact" className="contact-link" >
           <FontAwesomeIcon icon = {faEnvelope} color='#4d4d4e' />
        </NavLink>
    </nav>
   </div>
    )
   
}

export default Sidebar