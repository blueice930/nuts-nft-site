import React from 'react';

import {ReactComponent as TeamBg} from '../assets/TeamPageMain.svg';

import '../styles/Team.scss';


const Team = () => {
  const memberList = ['', '', '', '', '', '', '', ''];
  return (
    <div className="team">
      <div className="bg-container">
        <TeamBg />
        <div className="title">
          OUR TEAM
        </div>
        <div className="list-container">
          {
            memberList.map(m => (
              <div className="member-container">
                <div className="photo"></div>
                <div className="description">
                  <div className="member-name">YI LI</div>
                  <div className="member-title">FOUNDER</div>
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
