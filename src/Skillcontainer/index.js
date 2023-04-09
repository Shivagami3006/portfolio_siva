import React from 'react';
import { Element } from "react-scroll";
import Skill from '../Images/skill.jpg';
import { LinearProgress } from '@mui/material';
import './Skillcontainer.css';

const Skillcontainer = () => {
    return (
        <div>
            <Element className='skillcontainer'
                name='skills' id='skill'>
                <div className='skillcontainer_image'>
                    <img src={Skill} alt="" />
                </div>
                <div className='skillcontainer_text'>
                    <div className='skillcontainer_text1'>
                        <h2>SKILLSET</h2>
                    </div>
                    <div className='skillcontainer_skillset'>
                        <h5>React</h5>
                        <div className='skillcontainer_slider skillcontainer_slider1'>
                            <LinearProgress variant='detrerminate' value={90} />
                        </div>
                    </div>
                    <div className='skillcontainer_skillset'>
                        <h5>Node js</h5>
                        <div className='skillcontainer_slider skillcontainer_slider2'>
                            <LinearProgress variant='detrerminate' value={75} />
                        </div>
                    </div>
                    <div className='skillcontainer_skillset'>
                        <h5>HTML</h5>
                        <div className='skillcontainer_slider skillcontainer_slider3'>
                            <LinearProgress variant='detrerminate' value={70} />
                        </div>
                    </div>
                    <div className='skillcontainer_skillset'>
                        <h5>CSS 5</h5>
                        <div className='skillcontainer_slider skillcontainer_slider4'>
                            <LinearProgress variant='detrerminate' value={60} />
                        </div>
                    </div>
                    <div className='skillcontainer_skillset'>
                        <h5>Next js</h5>
                        <div className='skillcontainer_slider skillcontainer_slider4'>
                            <LinearProgress variant='detrerminate' value={10} />
                        </div>
                        <div className='skillcontainer_skillset'>
                        <h5>Tailwind CSS </h5>
                        <div className='skillcontainer_slider skillcontainer_slider4'>
                            <LinearProgress variant='detrerminate' value={10} />
                        </div>
                    </div>

                    </div>

                </div>

            </Element>
        </div>
    );
}
export default Skillcontainer;