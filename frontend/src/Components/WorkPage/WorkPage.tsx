import React from 'react';
import './WorkPage.css';
import info from '../../info.json';


const WorkPage: React.FC = () => {



    return (
        <div className='workPage'>
            <div className='carousell'>
                <img src='https://www.borealisgroup.com/storage/_2000xAUTO_fit_center-center_100_none/Borealis-in-Stenungsund-Sweden.jpg' alt='work' />
            </div>

            <div className='workPageInfo'>
                <h1>Work</h1>
                <aside className='line'></aside>

                <ul className='workPlaceList'>
                    {info.workPlaces.map((workPlace, index) => (
                        <div key={index} className='workPlace'>
                            <h3 className='workPlaceName'>{workPlace.name}</h3>
                            <h5>{workPlace.duration}</h5>
                            <p>{workPlace.description}</p>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkPage;