import React, { useState, useEffect } from 'react';
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';


const Portfolio = () =>
{
    const externalLinkSvg=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  style={{ fill: '#ff004f', width: '25px', height: '25px',marginTop:'15px'}}><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
    return(
        <div className='my-work' id='portfolio'>
            <div className="container">
                <h1 className="sub-title">
                    My Work
                </h1>
                <div className="work-list">
                    <div className="work">
                        <img src="/images/meal/meals_main.png" alt="" />
                        <div className="layer">
                            
                        <h3>Meals App</h3>
                        <p>A culinary companion that suggests recipes, meal plans, and helps users discover new dishes based on preferences and dietary restrictions.</p>
                        <div className="external-link">{externalLinkSvg}</div>
                        </div>
                    </div>
                    <div className="work">
                        <img src="/images/todo/todo3.jpg" alt="" />
                        <div className="layer">
                            <h3>Todo List</h3>
                            <p>An app to organize tasks and manage to-do lists efficiently, helping users stay productive and focused.</p>
                            <div className="external-link">{externalLinkSvg}</div>
                        </div>
                    </div>
                    <div className="work">
                        <img src="/images/expense/expense_main1.png" alt="" />
                        <div className="layer">
                        <h3>Expense Tracker</h3>
                        <p>A financial management tool that tracks and categorizes expenses, providing insights into spending habits for better budgeting.</p>
                        {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='external-link'/> */}
                        <div className="external-link">{externalLinkSvg}</div>
                        </div>
                    </div>
                </div>
                    <a href="#" className='see-more'>See More</a>
            </div>
        </div>
    )
};

export default Portfolio;