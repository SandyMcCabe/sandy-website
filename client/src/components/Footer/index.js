import React from 'react';
import gears from '../../assets/projects/gears.jpg';

function Header() {
    return(
        <header className='flex-row space-between px-1'> 
            <h1> Sandy McCabe's Website </h1>
            <img src={gears} alt='Gears Image'> </img>
            {props.children}
        </header>
    );
}
// ****************this page is not dne ******************
export default Header;