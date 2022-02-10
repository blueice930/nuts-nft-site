import react, {ReactComponent, useEffect, useState} from 'react';import React from 'react';

import {ReactComponent as AboutBg} from '../assets/AboutPageMain.svg';
import useWindowDimensions from '../helpers/positionHook';
import useScrollPosition from '../helpers/scrollHook';
import triggerAnimation from '../helpers/triggerAnimation';
import infoBoardSvg from '../assets/infoBoardAbout.svg';

import '../styles/About.scss';

const About = () => {
  const [isBoardShown, setIsBoardShown] = useState(false);
  const {width, height} = useWindowDimensions();
  const scrollPosition = useScrollPosition();

  // useEffect(() => {
  //   const manWithAK = document.querySelector('#manWithAKAbout');
  //   const girlWithCat = document.querySelector('#girlWithCatAbout');
  //   const blackGirl = document.querySelector('#blackGirlAbout');
    
  //   const whiteman = document.querySelector('#whitemanAbout');
  //   const gangster = document.querySelector('#gangsterAbout');
  //   const captainAmerica = document.querySelector('#captainAmericaAbout');

  //   const itemList = [
  //     manWithAK,
  //     girlWithCat,
  //     blackGirl,
  //     whiteman,
  //     gangster,
  //     captainAmerica,
  //   ];
    
  //   for (let i = 0; i < 8; i++) {
  //     setTimeout(() => {
  //       itemList[i]?.classList?.add('conveyor');
  //     }, i * 1650);
  //   }
  // }, []);

  useEffect(() => {
    const infoBoard = document.querySelector('#infoBoardAbout');
    const slideIntriggerPoint = (width * 1366 / 1440);

    if ((height > slideIntriggerPoint || (scrollPosition + height) > slideIntriggerPoint) && !isBoardShown) {
      triggerAnimation(infoBoard, 'info-board-first-slide-in', 'info-board-after-slide', 2000);
      setIsBoardShown(true);
    }
  }, [height, width, scrollPosition, isBoardShown])

  return (
    <div className="about">
      <div className="bg-container">
        <AboutBg />
        <div id='infoBoardAbout' className="board-container-about">
          <div className="position-container">
            <img src={infoBoardSvg} alt="info-board" />
            <div className="title">
              COMING SOON
            </div>
            <div className="text">
              We are a group of energetic and passionate nuts living in a metaverse filled with positivity. No matter if you are a walnut or hazelnut or maybe even a human, you will only find yourself immersed in the dimension of hearty and tenacious souls! We are creating a dual reality, featuring the connection between the physical world and the metaverse. As we progress, collaboration with real-world brands will not only increase our avatars' rarity, but also back them up by physical assets.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
