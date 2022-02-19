import React from 'react';

import '../styles/Team.scss';

import team1 from "../assets/Team/team1.png"
import team2 from "../assets/Team/team2.png"
import team3 from "../assets/Team/team3.png"
import team4 from "../assets/Team/team4.png"
import team5 from "../assets/Team/team5.png"
import team6 from "../assets/Team/team6.png"
import team7 from "../assets/Team/team7.png"
import team8 from "../assets/Team/team8.png"

const Team = () => {
  const memberList = [
    {
      src: team1,
      title:'Founder',
      name: 'Peanut',
      motto: 'I’m the special type that nobody ever gets allergic to.',
    },
    {
      src: team2,
      title:'Co-Founder',
      name: 'Donut',
      motto: 'Donut is also a nut, just a bit sweeter!',
    },
    {
      src: team3,
      title:'creative Artist',
      name: 'Walnut',
      motto: 'I’d rather not use my brain because it really takes the whole body to think.',
    },
    {
      src: team4,
      title:'Discord Support',
      name: 'Crispy Nut',
      motto: 'Nope, gotta keep dry, I ain’t drinking that water.',
    },
    {
      src: team5,
      title:'Tech Lead',
      name: 'Pecan',
      motto: 'I’m the other half of the brain…if not the whole.',
    },
    {
      src: team6,
      title:'Operations Lead',
      name: 'Coconut',
      motto: 'I can be either a beverage or snack, and so that makes me a shape-shifter.',
    },
    {
      src: team7,
      title:'AI Designer',
      name: 'Hazelnut',
      motto: 'Just a super talented performance artist not doing what an artist should be doing.',
    },
    {
      src: team8,
      title:'Marketing Specialist',
      name: 'Pistachio',
      motto: 'You see me green only because I grin.',
    },
  ];

  const handleClick = (index) => {
    // console.log('e.target', e.target)
    const mottoNode = document.querySelector(`.motto.member${index}`)
    const imgNode = document.querySelector(`img.member${index}`)
    if (imgNode?.classList && mottoNode?.classList) {
      if (imgNode?.classList.contains('flipped')){
        imgNode.classList.remove('flipped')
      }
      else {
        imgNode.classList.add('flipped')
      }

      if (mottoNode?.classList.contains('flipped')){
        mottoNode.classList.remove('flipped')
      }
      else {
        mottoNode.classList.add('flipped')
      }
    }
  }

  return (
    <div className="team">
      <div className="bg-container" id='TeamPageMain'>
        <div className="title">
          OUR TEAM
        </div>
        <div className="list-container">
          {
            memberList.map((m, index) => (
              <div key={m.name} className="member-container">
                <div className="photo" onClick={() => handleClick(index)}>
                  <div className={`motto member${index} flipped`}>
                    {m?.motto}
                  </div>
                  <img className={`member${index}`} src={m?.src} alt={`team member ${index}`} />
                </div>
                <div className="description">
                  <div className="member-name">{m.name}</div>
                  <div className="member-title">{m.title}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Team;
