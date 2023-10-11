import React from 'react'
import './index.scss';
import { FaBeer } from 'react-icons/fa'
import { AiFillHome, AiFillMessage, AiOutlineSearch } from "react-icons/ai"
import { FaBell } from "react-icons/fa"
import { BsFillPeopleFill, BsFillBriefcaseFill } from "react-icons/bs";
import userProfile from "../../../assets/userProfile.png";
import linkedinLogo from "../../../assets/linkedinLogo.png";
import { useNavigate } from 'react-router-dom';



export default function Topbar() {
  let navigate = useNavigate();
  const goToRoute = (route)=>{
    navigate(route)
  }
  return (
    <div className='topbar-main'>
      <img src={linkedinLogo} className="linkedinLogo" />
      <div className="react-icons">
      <AiOutlineSearch size={30}
        className="react-icon" />
        <AiFillHome size={30}
        className="react-icon" onClick={()=>goToRoute('/home')}/>
        <BsFillPeopleFill size={30}
          className="react-icon" onClick={()=>goToRoute('/profile')}/>
        
           <AiFillMessage size={30}
        className="react-icon" />
        <FaBell size={30}
          className="react-icon" />
      </div>
      <img className="user-logo" src={userProfile} />
    </div>
  )
}
