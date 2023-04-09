import React from 'react';
import './Topcontainer.css';

import { Element } from "react-scroll";
import Topcontent from '../Topcontent';
const Topcontainer = () => {
    return (
        <Element name='about' className='topcontainer'>
            <Topcontent/>
        </Element>
    );
}
export default Topcontainer;