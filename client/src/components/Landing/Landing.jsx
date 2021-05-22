import React from 'react';
import { Link } from 'react-router-dom';
import "./landing.css"


export default function Landing() {   
 

    return (
      <div className="fondo">
       
          <div className="left">
            <h1 className="title-landing">Dogs</h1>
            <h1 className="title-landing">App</h1>
            <p>I am Rick your Search Assistant
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedi!
            </p>
            <Link to="/dogs">
              <button className="button-landing">START</button>
            </Link>
          </div>
          <div className="right">
             
          </div>
        </div>
      
    );
    
  };