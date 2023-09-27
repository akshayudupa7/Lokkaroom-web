'use client'
import  { useState } from 'react';
import './Header.css'
import Image from "next/image";
import { HiMinus } from "react-icons/hi2";
import { CgMenuLeft} from "react-icons/cg";

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  }

  return (
    <header>
    <nav className="navbar navbar-expand-lg  main">
      <div className="container-fluid naviagtion_menu">
        <div style={{paddingBottom:"20px"}}>
          <a className="navbar-brand" href="#">
            <Image src='https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png'  width={140} height={60}/>
          </a>
        </div>
        <div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
         {collapsed?(<CgMenuLeft  className='navbar-toggler-icon main_navbar'/>):(<HiMinus className='navbar-toggler-icon main_navbar'/>)}
        </button>
        <div className="collapse navbar-collapse navbar-text" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Find a Lokkaroom
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create your Lokkarrom
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" style={{textAlign:"left",fontSize:"13px"}} href="#">
                    Athlets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" style={{textAlign:"left",fontSize:"13px"}} href="#">
                    Clubs/Organiztions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" style={{textAlign:"left",fontSize:"13px"}} href="#">
                    Agents/Affilates
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" style={{textAlign:"right",fontSize:"13px"}} href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" style={{textAlign:"right",fontSize:"13px"}}href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" style={{textAlign:"right",fontSize:"13px"}} href="#">
                    Water Cooler
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" style={{textAlign:"right",fontSize:"13px"}} href="#">
                    Lokkaroom FAQ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item"style={{textAlign:"right",fontSize:"13px"}} href="#">
                    TMA Sport
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" aria-current="page" href="#">
                GO TO APP
              </a>
            </li>
          </ul>
        </div>
        </div>
        
      </div>
    </nav>
    </header>
  );
}
