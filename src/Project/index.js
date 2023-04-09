import { Title } from '@mui/icons-material';
import './Project.css';

import React, { useState } from 'react';
const Project = ({ img, title, desc, Link }) => {
    const [show, setShow] = useState(false);

    return (
        <a href='#'>
            <div
                className='project'
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)} >
                {
                    show ? (
                        <div className='project_content'>
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </div>
                    ) : (
                        <img src={img} alt='' />
                    )}
            </div>
        </a>
    );


}
export default Project;