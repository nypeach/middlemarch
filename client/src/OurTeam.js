import React from 'react';
import './OurTeam.css';
import team1 from './images/team1.jpeg';
import team2 from './images/team2.jpeg';
import team3 from './images/team3.jpeg';
import team4 from './images/team4.jpeg';

const OurTeam = () => {
  return (
    <section className="team team-section">
      <div className="team-main">
        <div className="team-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>Our Team</h2>
        </div>

        <div className="team-card-div">

          <div class="row" style={{ marginBottom: "5rem" }}>

            <div class="col-lg-6 col-12">
              <div class="card card-profile overflow-hidden card-wrapper border-0">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <div class="pe-md-0">
                      <img class="w-100 border-radius-md" src={team1} alt="team 1" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div class="card-body wrapper">
                      <h2 className="team-card-name">Sasha Grutman</h2>
                      <h3 className="team-card-title">PARTNER</h3>
                      <p class="mb-4 mt-1 team-card-text">"Some brilliant, funny and witty quote"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="card card-profile overflow-hidden card-wrapper border-0">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <div class="pe-md-0">
                      <img class="w-100 border-radius-md" src={team3} alt="team 2" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div class="card-body wrapper">
                      <h2 className="team-card-name">Demetris Papademetriou</h2>
                      <h3 className="team-card-title">PARTNER</h3>
                      <p class="mb-4 mt-1 team-card-text">"Some brilliant, funny and witty quote"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "5rem" }}>
            <div class="col-lg-6 col-12">
              <div class="card card-profile overflow-hidden card-wrapper border-0">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <div class="pe-md-0">
                      <img class="w-100 border-radius-md" src={team2} alt="team 2" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div class="card-body wrapper">
                      <h2 className="team-card-name">Alexander Mack</h2>
                      <h3 className="team-card-title">CFO &amp; CCO</h3>
                      <p class="mb-4 mt-1 team-card-text">"Some brilliant, funny and witty quote"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="card card-profile overflow-hidden card-wrapper border-0">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <div class="pe-md-0">
                      <img class="w-100 border-radius-md" src={team4} alt="team 2" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div class="card-body wrapper">
                      <h2 className="team-card-name">Elliot Weinberg</h2>
                      <h3 className="team-card-title">VICE PRESIDENT</h3>
                      <p class="mb-4 mt-1 team-card-text">"Some brilliant, funny and witty quote"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row" style={{ marginBottom: "5rem", overflow: "scroll" }}>
            <div class="col-lg-6 col-12">
              <div class="card card-profile overflow-hidden card-wrapper border-0">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <div class="pe-md-0">
                      <img class="w-100 border-radius-md" src={team2} alt="team 2" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div class="card-body wrapper">
                      <h2 className="team-card-name">Someone Else</h2>
                      <h3 className="team-card-title">TITLE</h3>
                      <p class="mb-4 mt-1 team-card-text">"Some brilliant, funny and witty quote"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="card card-profile overflow-hidden card-wrapper border-0">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <div class="pe-md-0">
                      <img class="w-100 border-radius-md" src={team4} alt="team 2" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div class="card-body wrapper">
                      <h2 className="team-card-name">SOMEONE ELSE</h2>
                      <h3 className="team-card-title">TITLE</h3>
                      <p class="mb-4 mt-1 team-card-text">"Some brilliant, funny and witty quote"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}

export default OurTeam;