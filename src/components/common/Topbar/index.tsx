import React from 'react'
import './index.scss';
import { FaBeer } from 'react-icons/fa'
import { AiFillHome, AiFillMessage, AiOutlineSearch } from "react-icons/ai"
import { FaBell } from "react-icons/fa"
import { BsFillPeopleFill, BsFillBriefcaseFill } from "react-icons/bs";
import userProfile from "../../../assets/userProfile.png";
import linkedinLogo from "../../../assets/linkedinLogo.png";



export default function Topbar() {
  return (
    <div className='topbar-main'>
      <img src={linkedinLogo} className="linkedinLogo" />
      <div className="react-icons">
      <AiOutlineSearch size={30}
        className="react-icon" />
        <AiFillHome size={30}
        className="react-icon" />
        <BsFillPeopleFill size={30}
          className="react-icon" />
        
           <AiFillMessage size={30}
        className="react-icon" />
         <AiFillHome size={30}
        className="react-icon" />
        <FaBell size={30}
          className="react-icon" />
      </div>
      <img className="user-logo" src={userProfile} />
    </div>
  )
}
