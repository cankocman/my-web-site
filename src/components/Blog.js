import Link from "next/link";

const Blog = () => {
  return (
    <section id="blog" data-nav-tooltip="Blog" className="pp-section pp-scrollable section">
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link legacyBehavior href="/first-blog">
                  <a>
                    <img src="static/img/nft-bg.webp" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">5/JAN/2023 - CAN KOÇMAN</div>
                <h6>
                  <Link legacyBehavior href="/first-blog">
                    <a>
                      What are NFTs? Which problems have they solved? Which problems do they have?
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link legacyBehavior href="/second-blog">
                  <a>
                    <img src="static/img/dao-bg.webp" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">14/DEC/2022 - CAN KOÇMAN</div>
                <h6>
                  <Link legacyBehavior href="/second-blog">
                    <a>What does blockchain have to offer for organizations? DAOs!</a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link legacyBehavior href="/third-blog">
                  <a>
                    <img src="static/img/sc-bg.webp" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">21/NOV/2022 - CAN KOÇMAN</div>
                <h6>
                  <Link legacyBehavior href="/third-blog">
                    <a>Trust Minimized Contracts: Smart Contracts.</a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link legacyBehavior href="/fourth-blog">
                  <a>
                    <img src="static/img/bc-bg.webp" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">15/OCT/2022 - CAN KOÇMAN</div>
                <h6>
                  <Link legacyBehavior href="/fourth-blog">
                    <a>How does the {` "Blockchain Technology" `} work?</a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          {/* MORE BLOGS */}
          {/* <div className="col-12 read-more-blog text-center">
            <Link legacyBehavior href="/blog">
              <a className="px-btn px-btn-theme">More Blogs</a>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Blog;
