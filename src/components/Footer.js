import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaLinkedin} from "react-icons/fa";



const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <div>
                    <p>United States</p>
                    <p>New Jersey</p>
                </div>
              </div>
              <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                856-571-0173</h4>
                </div>
               <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                orionjoyner@gmail.com</h4>
                </div>
             </div>
            <div className="right">
            <h4>About myself</h4>
            <p>My Name is Orion Joyner.  I am a graduate at the Univeristy of Rhode Island
              I am actively seekng entry-level job opportunities.
            </p>
            <div className="social">
              <FaLinkedin size={30} style={{color:"#fff", marginRight: "2rem"}}
              />
              </div>
            </div>
        </div>    
    </div>
  )
}

export default footer