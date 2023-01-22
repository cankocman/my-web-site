import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false
});
const Index = () => {
  return (
    <Layout>
      <section id="home" data-nav-tooltip="Home" className="pp-section pp-scrollable">
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Can Koçman</h1>
                  <p className="lead">
                    I Am A Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I am currently an MIS license student at Boğaziçi University. I have a deep
                    passion for Web3.0 and its future. I am the Tech Lead and Co-Founder of Boğaziçi
                    DAO. I have developed numerous smart contracts, deployed them on a testnet and
                    already developing more advanced projects! I also have had some experiences with
                    developing Web2 sites earlier with HTML, CSS, Bootstrap, Materialize, React.js
                    and JavaScript.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="static/cv.pdf" target="_blank">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/pp2.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      {/* <Portfolio /> */}
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
