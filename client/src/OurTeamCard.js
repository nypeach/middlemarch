import './OurTeam.css';

const OurTeamCard = (props) => {
  return (

    <div className="col-lg-6 col-12 ml-auto mr-auto">
      <div className="card card-profile overflow-hidden border-0">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
            <div className="pe-md-0">
              <img className="w-100 border-radius-md" src={props.image} alt={`${props.name}`} />
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
            <div className="card-body">
              <h2 className="team-card-name">{props.name}</h2>
              <h3 className="team-card-title">{props.title}</h3>
              <p className="mb-4 mt-1 team-card-text">{props.quote}</p>
              <div className="mb-4 mt-1 team-card-icon">
                <i class="fab fa-facebook-square 7x"></i>&nbsp;&nbsp;
                <i class="fab fa-linkedin"></i>&nbsp;&nbsp;
                <i class="fab fa-twitter-square"></i>&nbsp;&nbsp;
                <i class="fas fa-envelope-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default OurTeamCard