import react, {ReactComponent, useEffect} from 'react';

import '../styles/App.scss';
import '../styles/Nav.scss';

import {ReactComponent as NutsLight} from '../assets/NutsPageMain.svg';
import triggerAnimation from '../helpers/triggerAnimation';
import useNav from '../helpers/navHook';

// Animation Speed Constant
const $starSlideSpeed = 2000;
const $womanSlideSpeed = 2000;
const $womanClickSpeed = 500;
const $UFOSlideSpeed = 4000;
const $UFOClickSpeed = 500;

function App() {
  const {navAddClickListener} = useNav(); 

  useEffect(() => {
    navAddClickListener();
    const stars = document.querySelectorAll('g#bgStar1Nuts, g#bgStar2Nuts, g#bgStar3Nuts, g#bgStar4Nuts, g#bgStar5Nuts');
    const womanWithMakeup = document.querySelector('#womanWithMakeUpNuts');
    const manUFO = document.querySelector('#manUFOLightNuts');

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

  }
  , [navAddClickListener]);
  
  return (
    <div className="app">
      <div className="bg-container">
        <NutsLight />
      </div>
    </div>
  );
}

export default App;
