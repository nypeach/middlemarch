import './OurTeam.css';
import OurTeamCard from './OurTeamCard';
import {team} from './data/data.js';

function importAll(r) {
  let photos = {};
  r.keys().map(r).map(o =>
    photos[o.default.substring(14, o.default.indexOf('.')) + o.default.substring(o.default.lastIndexOf('.'))] = o.default
  )
  return photos;
}

const images = importAll(require.context('./images/team/', false, /\.(png|jpe?g|svg)$/))


const OurTeam = () => {
  console.log(images);
  return (
    <section className="team team-section">
      <div className="team-main">
        <div className="team-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>Our Team</h2>
        </div>
        {/* ============================================================================ */}

        <div className="team-card-div">
          <div className="row g-5 p-5">
          {team.map(person =>
            <OurTeamCard
              image={images[person.photo]}
              name={person.name}
              title={person.title}
              quote={person.quote}
            />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam;