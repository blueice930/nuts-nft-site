import react, {ReactComponent, useCallback, useEffect, useState} from 'react';

import '../styles/App.scss';
import '../styles/Nav.scss';

import {ReactComponent as NutsLight} from '../assets/NutsPageMain.svg';
import triggerAnimation from '../helpers/triggerAnimation';
import useNav from '../helpers/navHook';

import blackWomanWithFlagNuts from "../assets/Nuts/blackWomanWithFlagNuts.png"
import ufoLightNuts from "../assets/Nuts/ufoLight.png"
import manWithAKNuts from "../assets/Nuts/manWithAKNuts.png"
import manWithBeerNuts from "../assets/Nuts/manWithBeerNuts.png"
import {ReactComponent as UfoNightNuts} from "../assets/Nuts/ufoNight.svg"
import womanWithMakeUpNuts from "../assets/Nuts/womanWithMakeUpNuts.png"
import hole1Nuts from "../assets/Nuts/hole1Nuts.svg"
import blondieWithFlagNuts from "../assets/Nuts/blondieWithFlagNuts.png"


// Animation Speed Constant
const $starSlideSpeed = 2000;
const $womanSlideSpeed = 2000;
const $womanClickSpeed = 500;
const $blackWomanSlideSpeed = 600;
const $manWithAKSpeed = 300;
const $ufoZoomSpeed = 500;

const $darkLightTransTime = 1000;

export const TWITTER_LINK = "https://twitter.com/youaregoingnuts"
export const DISCORD_LINK = "https://discord.gg/goingnuts"
export const TIKTOK_LINK = "https://vm.tiktok.com/TTPdksC2pv/"
export const IG_LINNK = "https://instagram.com/youaregoingnuts?utm_medium=copy_link"

function App() {
  const {navAddClickListener} = useNav(); 
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    navAddClickListener();
    const stars = document.querySelectorAll('g#bgStar1Nuts, g#bgStar2Nuts, g#bgStar3Nuts, g#bgStar4Nuts, g#bgStar5Nuts');
    const womanWithMakeup = document.querySelector('img.womanWithMakeUpNuts');
    const ufoLight = document.querySelector('#ufoLightNuts');
    const twitter = document.querySelector('#twitterIcon');
    const discord = document.querySelector('#discordIcon');
    // const opensea = document.querySelector('#openseaIcon');
    const blackWomanWithFlagNuts = document.querySelector('#blackWomanWithFlagNuts');
    const blondieWithFlag = document.querySelector('#blondieWithFlagNuts');

    // // stars slide in
    for (const s of stars) {
      triggerAnimation(s, 'star-first-slide-in', 'after-slide', $starSlideSpeed);
    }

    setTimeout(() => {
      womanWithMakeup?.addEventListener("click", () => {
        if (!womanWithMakeup?.classList?.contains('woman-with-makeup-first-slide-in')) {
          triggerAnimation(womanWithMakeup, 'woman-with-makeup-click-movemnt', '', $womanClickSpeed)
        }
      })
    }, $womanSlideSpeed);

    twitter?.addEventListener("click", () => window.open(TWITTER_LINK, 'blank'))
    discord?.addEventListener("click", () => window.open(DISCORD_LINK, 'blank'))
    blackWomanWithFlagNuts?.addEventListener('click', () => window.open(DISCORD_LINK, 'blank'))
    blondieWithFlag?.addEventListener('click', () => window.open(DISCORD_LINK, 'blank'))
  }
  , [navAddClickListener]);

  useEffect(() => {
    const bannerLightNuts = document.querySelector('#bannerLightNuts');
    bannerLightNuts.onclick = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setDarkMode(!darkMode);
        setTimeout(() => {
          setIsAnimating(false);
        }, $darkLightTransTime);
      }
    };
  }, [darkMode, isAnimating]);

  // control dark mode
  useEffect(() => {
    const lightBg = document.querySelector('.app > .bg-container > .lightBg');
    const darkBg = document.querySelector('.app > .bg-container > .darkBg');
    const light1 = document.querySelector('#planetLight1')
    const light2 = document.querySelector('#planetLight2')
    const light3 = document.querySelector('#planetLight3')

    const womanWithMakeup = document.querySelector('img.womanWithMakeUpNuts');
    const blackWomanWithFlagNuts = document.querySelector('#blackWomanWithFlagNuts');
    const manWithAKNuts = document.querySelector('#manWithAKNuts');
    const ufoLight = document.querySelector('#ufoLightNuts');
    const ufoNight = document.querySelector('#ufoNightNuts');

    const manWithBeer = document.querySelector('#manWithBeerNuts');
    const blondieWithFlag = document.querySelector('#blondieWithFlagNuts');

    // dark mode
    if (darkMode) {
      // toggle background linear  gradient;
      lightBg?.classList?.remove('show');
      darkBg?.classList?.add('show');

      [light1, light2, light3].forEach(l => {
        l.style.visibility = 'visible';
      })

      // toggle light ppl vanish
      womanWithMakeup?.classList?.add('hidden');
      blackWomanWithFlagNuts?.classList?.add('hidden');
      manWithAKNuts?.classList?.add('hidden');

      // toggle UFO
      ufoLight?.classList?.add('hidden');
      
      setTimeout(() => {
        manWithBeer?.classList?.remove('hidden');
        ufoNight?.classList?.remove('hidden');
        blondieWithFlag?.classList?.remove('hidden');
      }, 800);
  
    } else {
      // light mode
      lightBg.classList?.add('show');
      darkBg.classList?.remove('show');

      [light1, light2, light3].forEach(l => {
        l.style.visibility = 'hidden';
      })

      ufoNight?.classList?.add('hidden');  
      manWithBeer?.classList?.add('hidden');
      blondieWithFlag?.classList?.add('hidden');
      
      setTimeout(() => {
        womanWithMakeup.classList?.remove('hidden');
        blackWomanWithFlagNuts.classList?.remove('hidden');
        manWithAKNuts.classList?.remove('hidden');
        ufoLight?.classList?.remove('hidden');
      }, 800);


    }
  }, [darkMode]);
  
  return (
    <div className="app">
      <div className="bg-container">
        <div className="lightBg" />
        <div className="darkBg" />
        <NutsLight />
        <img id='ufoLightNuts' src={ufoLightNuts} alt='ufoLightNuts' />
        <UfoNightNuts id='ufoNightNuts' className='hidden' />
        <img className='womanWithMakeUpNuts' src={womanWithMakeUpNuts} alt='womanWithMakeUpNuts' />
        <img id='blackWomanWithFlagNuts' src={blackWomanWithFlagNuts} alt='blackWomanWithFlagNuts' />
        <img id='blondieWithFlagNuts' className='hidden' src={blondieWithFlagNuts} alt='blondieWithFlagNuts' />
        <img id='hole1Nuts' src={hole1Nuts} alt="hole1Nuts" />
        <img id='manWithAKNuts' src={manWithAKNuts} alt='manWithAKNuts' />
        <img id='hole3Nuts' src={hole1Nuts} alt="hole1Nuts" />
        <img id='manWithBeerNuts' className='hidden' src={manWithBeerNuts} alt='manWithBeerNuts' />
      </div>
    </div>
  );
}

export default App;
