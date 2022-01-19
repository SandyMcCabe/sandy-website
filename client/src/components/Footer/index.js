import React from 'react';

function Footer() {
    const icons = [
        {
            name: 'fab fa-github',
            link: 'link to gH'
        },
        {
            name: 'fab fa-linkedin',
            link: 'link to LI'
        }
    ]

    return (
        <footer className="flex-flow px-1">
            {icons.map(icon => (
                <a href={icon.link} key={icon.name} target='_blank' rel='noopener noreferer'>
                    <i className= {icon.name}> </i>
                </a>
            )
                )}
            
        </footer>
    );
}


export default Footer; 