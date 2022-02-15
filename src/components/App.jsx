import react, {ReactComponent, useCallback, useEffect, useState} from 'react';

import '../styles/App.scss';
import '../styles/Nav.scss';

import {ReactComponent as NutsLight} from '../assets/NutsPageMain.svg';
import triggerAnimation from '../helpers/triggerAnimation';
import useNav from '../helpers/navHook';

import blackWomanWithFlagNuts from "../assets/Nuts/blackWomanWithFlagNuts.png"
import ufoLight from "../assets/Nuts/ufoLight.png"
import manWithAKNuts from "../assets/Nuts/manWithAKNuts.png"
import manWithBeerNuts from "../assets/Nuts/manWithBeerNuts.png"
import ufoNight from "../assets/Nuts/ufoNight.svg"
import womanWithMakeUpNuts from "../assets/Nuts/womanWithMakeUpNuts.png"


// Animation Speed Constant
const $starSlideSpeed = 2000;
const $womanSlideSpeed = 2000;
const $womanClickSpeed = 500;
const $UFOSlideSpeed = 4000;
const $UFOClickSpeed = 500;

export const TWITTER_LINK = "https://twitter.com/youaregoingnuts"
export const DISCORD_LINK = "https://discord.gg/goingnuts"
export const TIKTOK_LINK = "https://vm.tiktok.com/TTPdksC2pv/"
export const IG_LINNK = "https://instagram.com/youaregoingnuts?utm_medium=copy_link"

function App() {
  const {navAddClickListener} = useNav(); 
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    navAddClickListener();
    const stars = document.querySelectorAll('g#bgStar1Nuts, g#bgStar2Nuts, g#bgStar3Nuts, g#bgStar4Nuts, g#bgStar5Nuts');
    const womanWithMakeup = document.querySelector('#womanWithMakeUpNuts');
    const manUFO = document.querySelector('#manUFOLightNuts');
    const twitter = document.querySelector('#twitterIcon');
    const discord = document.querySelector('#discordIcon');
    // const opensea = document.querySelector('#openseaIcon');
    const blackWomanWithFlagNuts = document.querySelector('#blackWomanWithFlagNuts');

    // // stars slide in
    for (const s of stars) {
      triggerAnimation(s, 'star-first-slide-in', 'after-slide', $starSlideSpeed);
    }

    // // woman with makeup
    triggerAnimation(womanWithMakeup, 'woman-with-makeup-first-slide-in', '', $womanSlideSpeed);
    setTimeout(() => {
      womanWithMakeup?.addEventListener("click", () => triggerAnimation(womanWithMakeup, 'woman-with-makeup-click-movemnt', '', $womanClickSpeed))
    }, $womanSlideSpeed);

    // // UFO slide in
    triggerAnimation(manUFO, 'ufo-slide-in', '', $UFOSlideSpeed);
    setTimeout(() => {
      manUFO?.addEventListener("click", () => triggerAnimation(manUFO, 'ufo-click-shake', '', $UFOClickSpeed))
    }, $UFOSlideSpeed);

    twitter?.addEventListener("click", () => window.open(TWITTER_LINK, 'blank'))
    discord?.addEventListener("click", () => window.open(DISCORD_LINK, 'blank'))
    blackWomanWithFlagNuts?.addEventListener('click', () => window.open(DISCORD_LINK, 'blank'))
  }
  , [navAddClickListener]);

  useEffect(() => {
    const bannerLightNuts = document.querySelector('#bannerLightNuts');
    bannerLightNuts.onclick = () => setDarkMode(!darkMode);
  }, [darkMode]);

  useEffect(() => {
    const lightBg = document.querySelector('.app > .bg-container > .lightBg');
    const darkBg = document.querySelector('.app > .bg-container > .darkBg');
    
          const light1 = document.querySelector('#planetLight1')
          const light2 = document.querySelector('#planetLight2')
          const light3 = document.querySelector('#planetLight3')
    if (darkMode) {
      // toggle background linear  gradient;
      lightBg.classList?.remove('show');
      darkBg.classList?.add('show');

      [light1, light2, light3].forEach(l => {
        l.style.visibility = 'visible';
      })

      // toggle light ppl vanish

      // toggle planet

      // toggle UFO
  
      // toggle dark ppl appear
    } else {
      lightBg.classList?.add('show');
      darkBg.classList?.remove('show');

      [light1, light2, light3].forEach(l => {
        l.style.visibility = 'hidden';
      })
    }
  }, [darkMode]);
  
  return (
    <div className="app">
      <div className="bg-container">
        <div className="lightBg" />
        <div className="darkBg" />
        <NutsLight />
      </div>
    </div>
  );
}

export default App;
