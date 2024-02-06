import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const contactMeArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']
    const [letterClass, setLetterClass] = useState('text-animate');
    const token = process.env.REACT_APP_EMAIL_JS_TOKEN;
    const refForm = useRef(null); 

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 6000);

        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('Sending email...');
        try {
            emailjs
            .sendForm(
                'gmail',
                'template_6r9smuf',
                refForm.current,
                'service_lcjpq0x'
            )
            .then(() => {
                console.log('Email sent successfully');
                alert("Email sent successfully");
                window.location.reload(false);
            })
            .catch((error) => {
                console.log('Error occurred while sending email:', error.message);
                alert("Error occurred while sending email");
                console.error('Error:', error);
            });
        } catch (error) {
            console.log('Error occurred while sending email:', error.message);
            alert("Error occurred while sending email");
        }
    };
    return (
        <>
            <div className='container contact-page' style={{zIndex: 1}}> 
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={contactMeArray} letterClass={letterClass} index={15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                Rafay,
                <br/>
                Pakistan,
                <br/>
                
                </div>
            </div>
            <Loader type="pacman" className="loader-active" />
        </>
    )
}

export default Contact