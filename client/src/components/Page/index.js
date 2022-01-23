import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />
            default:
                return <About />;
        }
    };
    return (
        <section>
            <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
            <PageContent>
                {renderPage()}
            </PageContent>
        </section>
    );
}

export default Page;

