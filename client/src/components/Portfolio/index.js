import React, { useState } from 'react';

import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        // project objects to include on page
        {
            name: 'Wander',
            description: 'A website which allows a user to input a two character state code to search for National Parks, Trails, and Historic Sites in that state.  The search return will also provide the daily weather for searched location.  There is also an option for the user to save their favorite locations.',
            link: 'https://sandymccabe.github.io/Wander/',
            repo: 'https://github.com/SandyMcCabe/Wander'
        },
        {
            name: 'Weather Dashboard',
            description: 'This app displays the current daily weather and the 5-day forecast for a current city, using and API call to OpenWeather.',
            link: 'https://sandymccabe.github.io/weather-dashboard/',
            repo: 'https://github.com/SandyMcCabe/weather-dashboard'
        },
        {
            name: 'Work Day Scheduler',
            description: 'A daily calendar application, allowing the user to create/modify appointments.  The current hour is highlighted',
            link: 'https://sandymccabe.github.io/dailySchedule/',
            repo: 'https://github.com/SandyMcCabe/dailySchedule'
        },
        {
            name: 'Node Notes',
            description: 'A notetaking app that allows a user to write and save notes to recall at a later time',
            link: 'https://protected-headland-34479.herokuapp.com/',
            repo: 'https://github.com/SandyMcCabe/node-notes'
        },
        {
            name: 'Code Quiz',
            description: 'A timed quiz with dynamically created content that could be easily altered for any implementation',
            link: 'https://sandymccabe.github.io/CodeQuiz/',
            repo: 'https://github.com/SandyMcCabe/CodeQuiz'
        },
    ]);

    return (
        <div>
            <div className='flex-row'>
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={'project' + idx}
                    />
                ))}
            </div>
        </div>
    );

};

export default Portfolio;