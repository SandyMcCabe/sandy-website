import React from 'react';
// import gears from '../../assets/projects/gears.jpg';

function Header(props) {
    return(
        <header className='flex-row space-between px-1'> 
            <h1> Sandy McCabe's Website </h1>
            {/* <img src={gears} alt='Gears Image'> </img> */}
            {props.children}
        </header>
    );
}

export default Header;