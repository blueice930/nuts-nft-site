import react, {ReactComponent, useEffect, useState} from 'react';import React from 'react';

import {ReactComponent as AboutBg} from '../assets/AboutPageMain.svg';
import useWindowDimensions from '../helpers/positionHook';
import useScrollPosition from '../helpers/scrollHook';
import triggerAnimation from '../helpers/triggerAnimation';
import infoBoardSvg from '../assets/infoBoardAbout.png';

import astronauntAbout from "../assets/About/astronauntAbout.png";
import beerAbout from "../assets/About/beerAbout.png";
import blackGirlAbout from "../assets/About/blackGirlAbout.png";
import blondieAbout from "../assets/About/blondieAbout.png";
import captainAbout from "../assets/About/captainAbout.png";
import girlWithCatAbout from "../assets/About/girlWithCatAbout.png";
import hiphopGuyAbout from "../assets/About/hiphopGuyAbout.png";
import indianWomanAbout from "../assets/About/indianWomanAbout.png";
import lionBoyAbout from "../assets/About/lionBoyAbout.png";
import sunwukongAbout from "../assets/About/sunwukongAbout.png";
import nut1About from "../assets/About/nut1About.svg";
import nut2About from "../assets/About/nut2About.svg";
import nut3About from "../assets/About/nut3About.svg";
import nut4About from "../assets/About/nut4About.svg";

import conveyorPipeLayer from "../assets/About/conveyorPipeLayer.svg"
import {ReactComponent as GateAbout} from "../assets/About/gateAbout.svg"
import {ReactComponent as MachineArm} from "../assets/About/machineArm.svg"
import {ReactComponent as MachineDrillAbout} from "../assets/About/machineDrillAbout.svg"



import '../styles/About.scss';

const About = () => {
  const [isBoardShown, setIsBoardShown] = useState(false);
  const {width, height} = useWindowDimensions();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const astronauntAbout = document.querySelector("#astronauntAbout")
    const beerAbout = document.querySelector("#beerAbout")
    const blackGirlAbout = document.querySelector("#blackGirlAbout")
    const blondieAbout = document.querySelector("#blondieAbout")
    const captainAbout = document.querySelector("#captainAbout")
    const girlWithCatAbout = document.querySelector("#girlWithCatAbout")
    const hiphopGuyAbout = document.querySelector("#hiphopGuyAbout")
    const indianWomanAbout = document.querySelector("#indianWomanAbout")
    const lionBoyAbout = document.querySelector("#lionBoyAbout")
    const sunwukongAbout = document.querySelector("#sunwukongAbout")

    const nut1About = document.querySelector('#nut1About')
    const nut2About = document.querySelector('#nut2About')
    const nut3About = document.querySelector('#nut3About')
    const nut4About = document.querySelector('#nut4About')

    const pplList = [
      astronauntAbout,
      beerAbout,
      blackGirlAbout,
      blondieAbout,
      captainAbout,
      girlWithCatAbout,
      hiphopGuyAbout,
      indianWomanAbout,
      lionBoyAbout,
      sunwukongAbout,
    ];

    const nutsList = [
      nut1About,
      nut2About,
      nut3About,
      nut4About,
    ]

    const pplListeners = pplList.map((ppl, index) => (
      setTimeout(() => {ppl?.classList?.add('moving')}, index*1000)
    ))

    const nutsListener = nutsList.map((nut, index) => {
      setTimeout(() => {
        nut?.classList?.add('moving')
      }, index*1000);
    })

    return () => {
      pplListeners.forEach(lis => clearTimeout(lis))
      nutsListener.forEach(lis => clearTimeout(lis))
    }
  }, []);

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
        {/* 2. nuts */}
        <img id='nut1About' src={nut1About} alt="nut1About" className="partial nuts-movable" />
        <img id='nut2About' src={nut2About} alt="nut2About" className="partial nuts-movable" />
        <img id='nut3About' src={nut3About} alt="nut3About" className="partial nuts-movable" />
        <img id='nut4About' src={nut4About} alt="nut4About" className="partial nuts-movable" />
        
        {/* 3. conveyor and pipeline */}
        <img className='partial conveyorPipeLayer' src={conveyorPipeLayer} alt="conveyorPipeLayer" />

        {/* 4. ppl */}
        <img id='astronauntAbout' src={astronauntAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='beerAbout' src={beerAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='blackGirlAbout' src={blackGirlAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='blondieAbout' src={blondieAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='captainAbout' src={captainAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='girlWithCatAbout' src={girlWithCatAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='hiphopGuyAbout' src={hiphopGuyAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='indianWomanAbout' src={indianWomanAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='lionBoyAbout' src={lionBoyAbout} alt="nut1About" className="partial ppl-movable" />
        <img id='sunwukongAbout' src={sunwukongAbout} alt="nut1About" className="partial ppl-movable" />
        
        {/* 5. gate */}
        <GateAbout className='partial gateAbout' />
        
        {/* 6. arms */}
        <MachineArm className='partial machineArm' />
        <MachineDrillAbout className='partial machineDrill' />

        
        {/* The top most layer */}
        <div id='infoBoardAbout' className="board-container-about">
          <div className="position-container">
            <img src={infoBoardSvg} alt="info-board" />
            <div className="title">
              COMING SOON
            </div>
            <div className="text">
              We are a group of energetic and passionate nuts living in a metaverse filled with positivity. No matter if you are a walnut or hazelnut or maybe even a human, you will only find yourself immersed in the dimension of hearty and tenacious souls! We are creating a dual reality, featuring the connection between the physical world and the metaverse.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
