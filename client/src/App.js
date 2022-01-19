import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const [pages] = useState([
    //these are the pages
    {
      name: 'about me'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
   <div>
     <Header>
       <Nav 
       pages={pages}
       setCurrentPage={setCurrentPage}
       > </Nav>
     </Header>
    <main>
      <Page currentPage={currentPage}>
      </Page>
    </main>
   </div>
  );
}

export default App;
