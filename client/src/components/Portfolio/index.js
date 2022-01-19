import React from 'react';

import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        // project objects to include on page
        {
            name: 'surf-report', 
            description: 'MERN-stack', 
            link: 'github.io',
            repo: 'github code'
        },
        {
            name: 'surf-report', 
            description: 'MERN-stack', 
            link: 'github.io',
            repo: 'github code'
        },
        {
            name: 'surf-report', 
            description: 'MERN-stack', 
            link: 'github.io',
            repo: 'github code'
        },
        {
            name: 'surf-report', 
            description: 'MERN-stack', 
            link: 'github.io',
            repo: 'github code'
        },
        {
            name: 'surf-report', 
            description: 'MERN-stack', 
            link: 'github.io',
            repo: 'github code'
        },
    ]);

    return(
        <div>
            <div className='flex-row'>
                {projects.map((projects,ibx)=>(
                    <Project
                    project={project}
                    key={'project' + ibx}
                    />
                ))}
            </div>
        </div>
    );

};

export default Portfolio;