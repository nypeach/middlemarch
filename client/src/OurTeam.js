import React from 'react';
import './index.scss';
import './OurTeam.scss';
import team1 from './images/team1.jpeg';
import team2 from './images/team2.jpeg';
import team3 from './images/team3.jpeg';



const OurTeam = () => {
  return (
    <section className="section team">
      <h2 className="heading heading-primary heading-primary-wt">Our Team</h2>
      <div className="team-card-div">

        <div className="tmain">
          <div className="tcontainer">
            <div className="timag1"></div>
            <div className="ttext-container">
              <span className="tspan"></span>
              <h1 className="th1">Web Development</h1>
              <p className="tp">Get the lastest and trending web development project's source code, first see preview if you need then get the code.
              </p>
              <a className="ta" href="https://webdevtrick.com" target="_blank">Visit Webdevtrick</a>
            </div>
          </div>
          <div className="tcontainer">
            <div className="timag2"></div>
            <div className="ttext-container">
              <span className="tspan"></span>
              <h1 className="th1">Web Development</h1>
              <p className="tp">Get the lastest and trending web development project's source code, first see preview if you need then get the code.
              </p>
              <a className="ta" href="https://webdevtrick.com" target="_blank">Visit Webdevtrick</a>
            </div>
          </div>
          <div className="tcontainer">
            <div className="timag3"></div>
            <div className="ttext-container">
              <span className="tspan"></span>
              <h1 className="th1">Web Development</h1>
              <p className="tp">Get the lastest and trending web development project's source code, first see preview if you need then get the code.
              </p>
              <a className="ta" href="https://webdevtrick.com" target="_blank">Visit Webdevtrick</a>
            </div>
          </div>
          <div className="tcontainer">
            <div className="timag4"></div>
            <div className="ttext-container">
              <span className="tspan"></span>
              <h1 className="th1">Web Development</h1>
              <p className="tp">Get the lastest and trending web development project's source code, first see preview if you need then get the code.
              </p>
              <a className="ta" href="https://webdevtrick.com" target="_blank">Visit Webdevtrick</a>
            </div>
          </div>
          <div className="tcontainer">
            <div className="timag2"></div>
            <div className="ttext-container">
              <span className="tspan"></span>
              <h1 className="th1">Web Development</h1>
              <p className="tp">Get the lastest and trending web development project's source code, first see preview if you need then get the code.
              </p>
              <a className="ta" href="https://webdevtrick.com" target="_blank">Visit Webdevtrick</a>
            </div>
          </div>
          <div className="tcontainer">
            <div className="timag3"></div>
            <div className="ttext-container">
              <span className="tspan"></span>
              <h1 className="th1">Web Development</h1>
              <p className="tp">Get the lastest and trending web development project's source code, first see preview if you need then get the code.
              </p>
              <a className="ta" href="https://webdevtrick.com" target="_blank">Visit Webdevtrick</a>
            </div>
          </div>

        </div>

        {/* <div className="team-card-container">
          <div className="team-card-row">
            Sasha Grutman
          </div>
          <div className="team-card-row">
            Someone Else
          </div>
          <div className="team-card-row">
            Someone Else
          </div>
          <div className="team-card-row">
            Someone Else
          </div>
          <div className="team-card-row">
            Someone Else
          </div>
          <div className="team-card-row">
            Someone Else
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default OurTeam;