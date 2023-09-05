import React from 'react';
import './App.css';
import { Header } from './features/header/header';
import { Title } from './ui/title/title';
import { Tabs, tabItems } from './ui/tabs/tab';



function App() {
  
  return ( 
    <div className='app'>
      <Header />
      <Title>Sign In</Title>
     <Tabs tabs={tabItems} />
   </div>
  );
    }

export default App;
