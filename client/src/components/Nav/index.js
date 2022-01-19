import React, {useEffect} from '../../utils/helpers';
import Page from '../Page';

function Nav(props) {
    const{
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
    useEffect(() => {
        document.title = capitalizeFirstLetter(CurrentPage.name);
    }, [currentPage]
    );
    return(
        <nav>
            <ul className='flex-flow'>
                {pages.map((Page)=>(
                <li className={`mx-5 ${currentPage.name === page.name && 'navActive'}`} key={Page.name} >
                    <span onClick={() => setCurrentPage(Page) }> {capitalizeFirstLetter(Page.name)} </span>
                </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;