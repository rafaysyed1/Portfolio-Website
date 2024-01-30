import './index.scss'
import LogoImage from '../../assets/images/logo-rafay.png'

const Logo = () => {
    return(
        <div className='logo-container'>
            <img src={LogoImage} className='logo-rafay' alt='rafay-image' />
        </div>
    )
}

export default Logo