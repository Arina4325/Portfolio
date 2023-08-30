import "./style.css";
import gitIcon from "./gitHub-black.svg"

import React from 'react'

const BtnGitHub = ({link}) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
                <img src={gitIcon} alt=""/>
                GitHub repo
            </a>
    </>
  )
}

export default BtnGitHub