import React from 'react';

function Footer() {
    const icons = [
        {
            name: 'fab fa-github',
            link: 'https://github.com/SandyMcCabe'
        },
        {
            name: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/sandy-mccabe-415221176/'
        }
    ]

    return (
        <footer className="flex-flow px-1">
            {icons.map(icon => (
                <a href={icon.link} key={icon.name} rel='noopener noreferer'>
                    <i className= {icon.name}> </i>
                </a>
            )
                )}
            
        </footer>
    );
}

export default Footer; 