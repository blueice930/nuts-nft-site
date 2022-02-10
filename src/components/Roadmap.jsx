import React, {useState, useEffect} from 'react';

import {ReactComponent as RoadmapBg} from '../assets/RoadmapPageMain.svg'
import '../styles/Roadmap.scss'
import useWindowDimensions from '../helpers/positionHook';
import useScrollPosition from '../helpers/scrollHook';

const Roadmap = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const { width, height } = useWindowDimensions();
  const scrollPosition = useScrollPosition();

  // useEffect(() => {
  //   first;
  
  //   return () => {
  //     second;
  //   };
  // }, [third]);
  

  return (
    <div className='roadmap'>
      <div className="bg-container">
        <RoadmapBg />
      </div>
    </div>
  );
};

export default Roadmap;
