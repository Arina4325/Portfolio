import "./style.css";
import fileCV from "./../../helpers/CV Arina.pdf"


const Header =() => {
    return (
        <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>Hi, my name is <em>Arina</em></strong><br/>
                  a Full-Stack Developer
              </h1>
              <div className="header__text">
                  <p>with passion for learning and creating Complete Web Solutions</p>
              </div>
              <a  href={fileCV}  target="_blank" rel="noreferrer" download="CV Arina Leyzer" className="btn">Download CV</a>
          </div>
      </header>

    );
};

export default Header;