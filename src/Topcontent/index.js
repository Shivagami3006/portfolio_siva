import React from 'react';
import { Link } from "react-scroll";
import './Topcontent.css';

const topcontent = () => {
    return (
        <div className='topcontent'>
            <div className='topcontent_container'>
                <h1>Ms .Sivagami.R </h1>
                <p> A professional Web and App Developer</p>
                <a href='#'>
                    <button className='topcontent_downloadbutton'>Downlode CV </button>
                </a>
                <Link to='projects' smooth={true} duration={500} >
                    <button className='topcontent_workbutton'>My Work</button> 
                </Link>
            </div>
        </div>
    );
}
export default topcontent;