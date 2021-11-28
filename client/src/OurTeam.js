import './OurTeam.css';
import OurTeamCard from './OurTeamCard';
import {team} from './data/team.js';
import { useState } from 'react';

function importAll(r) {
  let photos = {};
  r.keys().map(r).map(o =>
    photos[o.default.substring(14, o.default.indexOf('.')) + o.default.substring(o.default.lastIndexOf('.'))] = o.default
  )
  return photos;
}
const images = importAll(require.context('./images/team/', false, /\.(png|jpe?g|svg)$/))



const OurTeam = (props) => {

  const [selectedModal, setSelectedModal] = useState(0);

  console.log(images);
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
              selectedModal={selectedModal}
              setSelectedModal={setSelectedModal}
              image={images[person.photo]}
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