import team1 from './images/team/team1.jpeg';

const TeamModal = (props) => {

return (
  <div style={{textAlign: "center"}}>
  <h2 className="heading-primary-dk" style={{marginTop: "-5px"}}>{props.person.name}</h2>
    <div style={{ textAlign: "left" }}>
      <img style={{ float: "left", marginRight: "24px" }} className="w-25 border-radius-md" src={props.image} alt={"Sasha Grutman"}/>
      <ul className="no-bullets">
        {props.person.paragraphs.map((fact, i) => (
          <li key={i}><p className="team-modal">{fact}</p> </li>
        ))}
      </ul>

      <div className="mb-4 mt-1 team-card-icon">
        <i class="fab fa-facebook-square 7x" style={{fontSize: "6rem"}}></i>&nbsp;&nbsp;
        <i class="fab fa-linkedin" style={{ fontSize: "6rem" }}></i>&nbsp;&nbsp;
        <i class="fab fa-twitter-square" style={{ fontSize: "6rem" }}></i>&nbsp;&nbsp;
        <i class="fas fa-envelope-square" style={{ fontSize: "6rem" }}></i>
      </div>
  </div>
  </div>
)

}

export default TeamModal;