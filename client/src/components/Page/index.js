import React from 'react';

import PageContent from '../PageContent';
import About    
import Portfolio from '../Portfolio';
import Contact

function Page ({currentPage}) {
    const renderPage = () => {
        switch(currentPage.name) {
            case 'about me':
                return <About />;
            case 'portfolio'
            return <Portfolio />;
            case 'contact'
            default: 
            return <About />;
        }
    }
}
return


// finish this page