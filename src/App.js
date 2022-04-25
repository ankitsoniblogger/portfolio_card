import React from 'react'
import Hero from './components/Hero';
import Card  from './components/Card';
import Stack from './components/Stack';
import Project from './components/Project';



const App = () => {
  return (
    <div className='mt-10'>
    <Hero/>
    <Card/>
    <Stack/>
    <Project/>
  </div>
  )
};

export default App