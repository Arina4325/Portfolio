import "./style.css";

import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";


const Footer =() => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.instagram.com/arina_leyzer/" target="_blank" rel="noreferrer"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/Arina4325" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/arina-leyzer-17b582176/" target="_blank" rel="noreferrer"><img src={linkedIn}l alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 Arina Leyzer</p>
                </div>
            </div>
        </div>
    </footer>

    );
};

export default Footer;