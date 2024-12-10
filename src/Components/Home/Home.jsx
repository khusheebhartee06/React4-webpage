import React from 'react';
import Homebanner from './Homebanner/Homebanner.jsx'
import Homecomponent from './Homecomponent/Homecomponent.jsx'
import './Home.css';
import Homebenifits from './Homebenifits/Homebenifits.jsx';
import Homeservice from './Homeservice/Homeservice.jsx';
import Hometestimonial from './Hometestimonial/Hometestimonial.jsx';

function Home() {
  return (
    <>
      <Homebanner />
      <Homecomponent />
      <Homebenifits />
      <Homeservice />
      <Hometestimonial />
    </>
  )
}

export default Home