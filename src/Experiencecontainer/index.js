import React from 'react';
import Experiencebox from '../Experiencebox';
import './Experiencecontainer.css';
import { Element } from "react-scroll";
const Experiencecontainer = () => {
    return (
        <Element 
          className='experiencecontainer'
          id='exp'
        >
            <h1>Experience</h1>
            <div className='experiencecontainer_info'>
                <Experiencebox number="+0" title="Clients"  />
                <Experiencebox number="+1" title="Projects" style={{ backgroundColor:'#f64c08'}} />
                <Experiencebox number="+2" title="As pharmacist" />
                <Experiencebox number="+0" title="fresher" />
            </div>
        </Element>



    );
}
export default Experiencecontainer;