import React, {useState, useEffect, useCallback} from 'react';
import { Parallax } from 'rc-scroll-anim';
import {debounce} from 'lodash'

import {ReactComponent as RoadmapBg} from '../assets/RoadmapPageMain.svg'

import astronauntSlide from "../assets/Roadmap/astronauntSlide.png"
import bgCake from "../assets/Roadmap/bgCake.svg"
import bgPlanet from "../assets/Roadmap/bgPlanet.svg"
import bgPlanet2 from "../assets/Roadmap/bgPlanet2.svg"
import bgPlanet3 from "../assets/Roadmap/bgPlanet3.svg"
import manWithBeerCloud from "../assets/Roadmap/manWithBeerCloud.svg"
import ufoLightOnRdmp from '../assets/Roadmap/ufoLightOnRdmp.png';

import cakesLayerRdmp from '../assets/Roadmap/cakesLayerRdmp.svg';
import starsLayerRdmp from '../assets/Roadmap/starsLayerRdmp.svg';

import '../styles/Roadmap.scss'
import useWindowDimensions from '../helpers/positionHook';
import useScrollPosition from '../helpers/scrollHook';
import triggerAnimation from '../helpers/triggerAnimation';

const Roadmap = () => {
  const handleScroll = useCallback(() => {
    const h = window.innerHeight;
    const w = window.innerWidth;
    const scrollPos = window.pageYOffset;

    const ASTRO_START_POS_FACTOR = 3020 / 1440;
    const ASTRO_END_POS_FACTOR = 5120 / 1440;
    const MIN_WIDTH = 960;

    const astroStartPoint = Math.max((w * ASTRO_START_POS_FACTOR), (MIN_WIDTH * ASTRO_START_POS_FACTOR));
    const astroEndPoint = Math.max((w * ASTRO_END_POS_FACTOR), (MIN_WIDTH * ASTRO_END_POS_FACTOR));
    const astronauntSlide = document.querySelector('#astronauntSlide');

    const movePx = scrollPos + h - astroStartPoint;
    // add event listener won't update so get window again;

    const beforeStart = (scrollPos + h) < astroStartPoint
    const afterEnd = (scrollPos + h) > astroEndPoint;
    const withinRange = !beforeStart && !afterEnd;

    if (withinRange) {
      astronauntSlide.style.transform = `translateY(${movePx}px)`;
    } else if (beforeStart) {
      astronauntSlide.style.transform = `translateY(0)`;
    } else if (afterEnd) {
      astronauntSlide.style.transform = `translateY(${astroEndPoint - astroStartPoint}px)`
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 100));
    return () => {
      window.removeEventListener('scroll', debounce(handleScroll, 100));
    }
  }, []);  
  

  return (
    <div className='roadmap'>
      <div className="bg-container">
        <RoadmapBg />
        <img id='bgPlanet' src={bgPlanet} alt="bgPlanet" />
        <img id='bgPlanet2' src={bgPlanet2} alt="bgPlanet" />
        <img id='bgPlanet3' src={bgPlanet3} alt="bgPlanet" />
        <Parallax
          animation={[
            { x: 0, opacity: 1, playScale: [0, 0.4] },
            { x: '100px', opacity: 0, playScale: [0.4, 0.6] },
          ]}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          id='ufoLightOnRdmp' 
        >
          <img src={ufoLightOnRdmp} alt="ufoLightOnRdmp" />
        </Parallax>
        <Parallax
          animation={[
            { x: 0, opacity: 1, playScale: [0, 0.4] },
            { x: '200px', opacity: 0, playScale: [0.4, 0.6] },
          ]}
          style={{ transform: 'translateX(-200px)', opacity: 0 }}
          id='manWithBeerCloud' 
        >
          <img src={manWithBeerCloud} alt="ufoLightOnRdmp" />
        </Parallax>
        <Parallax
          animation={[
            { y: 100, opacity: 1, blur: '0px', playScale: [0, 1] },
          ]}
          style={{
            filter: 'blur(10px)',
            opacity: 0
          }}
          className="stars-layer"
        >
          <img src={starsLayerRdmp} alt="starsLayerRdmp" />
        </Parallax>
        <Parallax
          animation={[
            { y: 200, opacity: 1, playScale: [0, 1] },
          ]}
          style={{
            opacity: 0,
            transform: 'translateY(-20%)',
          }}
          className="cakes-layer"
        >
          <img src={cakesLayerRdmp} alt="starsLayerRdmp" />
        </Parallax>
        <div className="slideline" />
        <div id="astronauntSlide">
          <img src={astronauntSlide} alt="astronauntSlide" />
        </div>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.4] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-title' 
        >
            NUTTIEGANG'S <br /> ROADMAP
        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box1 left' 
        >
            Project Launch: <br />
            You Are Going Nuts! project launch on Discord, Twitter, Instagram, and Tiktok. We will hold OG spots and Whitelist spots of the total 10,000 NFTs.
        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box2 right' 
        >
          Rare Nuts:<br />
          Limited edition NFTs will be launched, and any member with a complete collection of indicated NFTs will be given a rare, limited-edition token!
        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box3 left' 
        >
            Gift for HODLERS: <br />
            Any holder of a You Are Going Nuts! NFT can order a nutty merch and we will ship it to you worldwide free of charge!
        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box4 right' 
        >
          Nutaverse Reserves: <br />
          We will dedicate 50% of the total revenue from the launch day sale to the Nutaverse Reserves. This project aims to grow organically and achieve each milestone at a time by using the nutty gain via the NFT sell. 
        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box5 left' 
        >
          Dual Realities:<br />
          We will be collaborating with nutrition brands, as well as fashion and jewelry designers! The Nut avatars will have unique features designed by these brands, which means the Nuts will not only be backed by physical assets but also significantly increase the NFT rarity.
        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box6 right' 
        >
          Upgrading to 3D: <br />
          We will be launching our 3D You Are Going Nuts! NFT project, and all holders of the current 2D NFT can mint the 3D NFTs for free.

        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box7 left' 
        >
          A Decentralized Metaverse: <br />
          We strongly encourage all nut members to actively participate in the community. The Decentralized Autonomous Organization (DAO) will be set up where all members can vote and take part in managing the community, such as land purchasing and governance of the Nutaverse.

        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box8 right' 
        >
          Crypto Airdrop: <br />
          We will airdrop ERC20 token to anyone who holds a You Are Going Nuts! NFT. This means all NUT holders will receive a certain amount of Nutaverse tokens which can be traded or used to establish themselves in our upcoming game!
        </Parallax>
        <Parallax
          animation={[
            { opacity: 1, playScale: [0.2, 0.5] },
          ]}
          style={{ opacity: 0 }}
          className='roadmap-text box9 left' 
        >
          Nuttiegang Sims: <br />
          A Nutaverse simulation game is on the way! You can create your little niche inside the Nutaverse, that includes but not limited to making new friends, managing your business, and creating another lifestyle. The Nutaverse tokens will be the game currency, where you can earn and spend, and each Nut avatar will show its special characteristic.
        </Parallax>
      </div>
    </div>
  );
};

export default Roadmap;
