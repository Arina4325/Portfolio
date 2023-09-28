import { /*useState*/ useEffect, useRef} from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import React from 'react'
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css"

const BtnDarkMode = () => {
    
    //hook useState to change state of component
    //const [darkMode, setDarkMode] = useState ("light"); - we use local storage, if not - use this state

    //to use local storage for remember dark/light mode
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");

    //using hook useRef for btn
    const btnRef = useRef(null);

    //what happens on start and on change state (add/remove in CSS class dark)
    useEffect(()=>{

        if (darkMode==="dark") {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }

    }, [darkMode]);

    const toggleDarkMode = () =>{
        setDarkMode((currentValue)=>{
            return currentValue === "light" ? "dark" : "light";

        });
    };


  return (
    
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>
    
  )
}

export default BtnDarkMode;