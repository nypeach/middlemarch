import './OurTeam.css';
import OurTeamCard from './OurTeamCard';
import {team} from './data/team.js';
import { useState } from 'react';


const OurTeam = (props) => {

  const [selectedModal, setSelectedModal] = useState(0);

  return (

    <section id="ourteam" className="team team-section" >
      <div className="team-main">
        <div className="team-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>Our Team</h2>
        </div>
        {/* ============================================================================ */}

        <div className="team-card-div">
          <div className="row g-5 p-5">
          {team.map(person =>
            <OurTeamCard
              key={person.id}
              selectedModal={selectedModal}
              setSelectedModal={setSelectedModal}
              person={person}
            />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam;