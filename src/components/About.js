const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`Can Koçman.`} <br />
                  The eager to learn Web3.0 fan. <br /> Ready to go, got the game plan. <br /> A
                  dedicated and focused man. <br /> I will be going as far as I can. <br />{" "}
                </h3>
                <p>
                  {`I'm`} studying MIS in the most prestigious university of Turkey. But what really
                  matters is that I have all the motivation, will and assets to learn and master
                  anything I want and at the time {`I'm`} obsessed with {`"Blockchain Technology."`}{" "}
                  I have already dived in and coded numerous smart contracts, deployed them to
                  testnets and learned a lot along the journey. {`I'm `}
                  also Co-Founder/Tech Lead of Boğaziçi DAO. The creme de la creme de la creme
                  Web3.0 community of Turkey. I am always open to contribute to promising Web3.0
                  projects and offers!
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">428</span>
                      <div className="media-body">
                        Cups of <br />
                        Coffee
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">245</span>
                      <div className="media-body">
                        Hours Spent <br />
                        on Web3.0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  <a
                    className="px-btn px-btn-theme"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/cankocman">
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2022-2027</span>
                <h6>Management Information Systems</h6>
                <p>Bogazici University</p>
              </li>
              <li>
                <span>2017-2022</span>
                <h6>Information Technologies Club</h6>
                <p>Cağaloğlu A.H.S.</p>
              </li>
              <li>
                <span>2017-present</span>
                <h6>Learning Programming, Coding, Design</h6>
                <p>Free Code Camp, Udemy, YouTube</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a passionate learner, developer, Web3.0 enthusiast and more... I aim to
                improve my aspects, skills and overall knowledge by working in promising projects!
              </p>
              <div className="skill-lt">
                <h6>Solidity</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "65%" }}>
                    <span data-toggle="tooltip" title="65%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>JavaScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>HTML/CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="80%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Hardwork</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "100%" }}>
                    <span data-toggle="tooltip" title="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/calmun.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Web-Developer</h6>
                  <label>CALMUN | Oct 2017 - Apr 2018</label>
                  <div className="rb-time">Volunteer</div>
                  <p>
                    During our first year of high school. I and a friend of mine have developed the
                    website for {`our school's`} Modal United Nations Event.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/cal-logo.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>IT Club Board of Directors</h6>
                  <label>Cağaloğlu AHS | Sep 2018 - June 2022</label>
                  <div className="rb-time">Volunteer</div>
                  <p>
                    As a Board Member of Cağaloğlu IT Club. I have organized numerous events,
                    seminars and competitions. On behalf of the club I also have participated in
                    many national and local competitions and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/dao.jpeg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Co-Founder / Tech Lead</h6>
                  <label>Boğaziçi DAO | Oct 2022 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Our aim is to bring together the top level talent, creme de la creme of Turkey,
                    and create a business society that will revolutionize Turkish economy using
                    Web3.0 tools and Blockchain technology. I specialize in analyzing Web3.0
                    projects tech-wise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
