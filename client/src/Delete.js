import team1 from './images/team1.jpeg';
import team2 from './images/team2.jpeg';
import team3 from './images/team3.jpeg';
import team4 from './images/team4.jpeg';

const Delete = () => {

  return (
    <section class="py-7 position-relative">
      <span class="mask bg-gradient-dark"></span>
      <div class="container position-relative mb-4">
        <div class="row">
          <div class="col-md-8 mx-auto text-center mb-5">
            <div class="icon icon-shape bg-gradient-info shadow text-center mb-3">
              <i class="fas fa-users"></i>
            </div>
            <h3 class="text-white z-index-1 position-relative">The Executive Team</h3>
            <p class="lead text-white opacity-6">There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="card card-profile overflow-hidden">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                  <a href="javascript:;">
                    <div class="p-3 pe-md-0">
                      <img class="w-100 border-radius-md" src={team1} />
                    </div>
                  </a>
                </div>
                <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                  <div class="card-body">
                    <h5 class="mb-0">Emma Roberts</h5>
                    <h6 class="text-info">UI Designer</h6>
                    <p class="mb-0">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="card card-profile mt-lg-0 mt-5 overflow-hidden">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                  <a href="javascript:;">
                    <div class="p-3 pe-md-0">
                      <img class="w-100 border-radius-md" src={team2} />
                    </div>
                  </a>
                </div>
                <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                  <div class="card-body">
                    <h5 class="mb-0">William Pearce</h5>
                    <h6 class="text-info">Boss</h6>
                    <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-6 col-12">
            <div class="card card-profile overflow-hidden">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                  <a href="javascript:;">
                    <div class="p-3 pe-md-0">

                      <img class="w-100 border-radius-md" src={team3} />
                    </div>
                  </a>
                </div>
                <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                  <div class="card-body">
                    <h5 class="mb-0">Ivana Flow</h5>
                    <h6 class="text-info">Athlete</h6>
                    <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="card card-profile mt-lg-0 mt-5 overflow-hidden">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12 pe-lg-0">
                  <a href="javascript:;">
                    <div class="p-3 pe-md-0">

                      <img class="w-100 border-radius-md" src={team4} />
                    </div>
                  </a>
                </div>
                <div class="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                  <div class="card-body">
                    <h5 class="mb-0">Sophia Garcia</h5>
                    <h6 class="text-info">JS Developer</h6>
                    <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="position-absolute w-100 z-index-1 bottom-0">
        {/* <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g class="moving-waves">
            <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40"></use>
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
            <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
            <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
            <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95"></use>
          </g>
        </svg> */}
      </div>
    </section>
  )
}

export default Delete;
