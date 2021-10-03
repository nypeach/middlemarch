import './OurTeam.css';
import Modal from './Modal';
import useToggle from './hooks/useToggle';
import Team1 from './Team1';

const OurTeamCard = (props) => {

  const [team1Open, team1OpenToggle] = useToggle(false);
// const [team2Open, team2OpenToggle] = useToggle(false);
// const [team3Open, team3OpenToggle] = useToggle(false);
// const [team4Open, team4OpenToggle] = useToggle(false);
  let modal = props.modal;
  return (



    <div className="col-lg-6 col-12 ml-auto mr-auto">
      {team1Open ? <Modal isOpen={team1Open} toggle={team1OpenToggle} modalComponent={<Team1 />} /> : null}
      {/* {team2Open ? <Modal isOpen={team2Open} toggle={team2OpenToggle} modalComponent={<Team2 />} /> : null} */}
      <div className="card card-profile overflow-hidden border-0">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
            <div className="pe-md-0">
              <img className="w-100 border-radius-md team-member" src={props.image} alt={`${props.name}`} onClick={team1OpenToggle} />
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
            <div className="card-body">
              <h2 className="team-card-name">{props.name}</h2>
              <h3 className="team-card-title">{props.title}</h3>
              <p className="mb-4 mt-1 team-card-text">{props.quote}</p>
              <div className="mb-4 mt-1 team-card-icon">
                <i class="fab fa-facebook-square 7x" style={{cursor: "pointer"}}></i>&nbsp;&nbsp;
                <i class="fab fa-linkedin" style={{ cursor: "pointer" }}></i>&nbsp;&nbsp;
                <i class="fab fa-twitter-square" style={{ cursor: "pointer" }}></i>&nbsp;&nbsp;
                <i class="fas fa-envelope-square" style={{ cursor: "pointer" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default OurTeamCard