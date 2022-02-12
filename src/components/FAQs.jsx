import { Parallax } from 'rc-scroll-anim';
import React, { useEffect } from 'react';

import {ReactComponent as FAQsBg} from '../assets/FAQs/iconsFooterFAQs.svg';
import img1 from '../assets/FAQs/img1.svg';
import img2 from '../assets/FAQs/img2.svg';
import img3 from '../assets/FAQs/img3.svg';

import '../styles/FAQs.scss';
import { DISCORD_LINK, IG_LINNK, TIKTOK_LINK, TWITTER_LINK } from './App';

const FAQs = () => {
  useEffect(() => {
    const opensea = document.querySelector("#openseaIconFAQ")
    const ig = document.querySelector("#igIconFAQ")
    const twitter = document.querySelector("#twitterIconFAQ")
    const discord = document.querySelector("#discordIconFAQ")
    const tiktok = document.querySelector("#tiktokIconFAQ")
    const footer = document.querySelector('#root > div > div.faqs > div > div.footer');
    
    ig.addEventListener('click', () => window.open(IG_LINNK, '_blank'));
    twitter.addEventListener('click', () => window.open(TWITTER_LINK, '_blank'));
    discord.addEventListener('click', () => window.open(DISCORD_LINK, '_blank'));
    tiktok.addEventListener('click', () => window.open(TIKTOK_LINK, '_blank'));
    footer.addEventListener('click', () => window.open(DISCORD_LINK, '_blank'));
  }, []);
  

  return (
    <div className="faqs">
      <div className="bg-container" id='FAQsPageMain'>
        <FAQsBg />
        <div className="title">
          FAQs
        </div>
        <div className="faq-list">
          <Parallax
            animation={[
              { x: 0, opacity: 1, playScale: [0.1, 0.2] },
            ]}
            style={{ opacity: 0, transform: 'translateX(-10%)' }}
            className='item-container item1' 
          >
            <div className="image img1">
              <img src={img1} alt="img1" />
            </div>
            <div className="text">
              Why would I want to own an NFT? <br />
              An NFT or 'non-fungible token' gives you the ownership of a unique, digital asset that is stored on a blockchain. You Are Going Nuts! project uses the Ethereum blockchain. As the name speaks for itself, the 'rights' of this particular digital asset cannot be duplicated, and it holds a certain value depending on the rarity. While most NFTs are in the form of digital art, video, and/or music, some are also backed by physical assets.
            </div>
          </Parallax>
          <Parallax
            animation={[
              { x: 0, opacity: 1, playScale: [0.1, 0.2] },
            ]}
            style={{ opacity: 0, transform: 'translateX(-10%)' }}
            className='item-container item2' 
          >
            <div className="image img2">
              <img src={img2} alt="img2" />
            </div>
            <div className="text">
              Who are you guys and why nuts? <br />
              We are a group of graduate students who share similar beliefs and visions in Web 3.0. We have all gone through rough patches in life and hope to bring hope and positivity in a metaverse created together with you.
            </div>
          </Parallax>
          <Parallax
            animation={[
              { x: 0, opacity: 1, playScale: [0.1, 0.2] },
            ]}
            style={{ opacity: 0, transform: 'translateX(-10%)' }}
            className='item-container item3' 
          >
            <div className="image img3">
              <img src={img3} alt="img3" />
            </div>
            <div className="text">
              What is the supply and how to get involved? <br />
              AA total of 10,000 unique tokens will be released. The best way to get involved is to check our Discord and follow the rules listed in get-whitelisted to secure one of the 500 whitelist spots. You have an edge when verified as a whitelist member! However, any active Nut in our community will receive the latest announcement from announcements as well as Twitter and Instagram.
            </div>
          </Parallax>
        </div>
        <div className="footer">
          JOIN OUR COMMUNITY
        </div>
      </div>
    </div>
  );
};

export default FAQs;
