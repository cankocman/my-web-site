import Layout from "../src/layout/Layout";
const SingleBlog = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img row justify-content-center">
            <img src="static/img/sc-bg.webp" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">Smart Contracts</a>
                  </h6>
                  <h2>Trust Minimized Contracts: Smart Contracts.</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/team-1.jpg" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Can Koçman</label>
                      <span>21 NOV 2022</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <h5>Trust Minimized Agreements? How so?</h5>
                  <p>
                    Trust minimized agreements, also known as trustless agreements or trustless
                    smart contracts, refer to the use of smart contracts in a way that reduces the
                    need for trust between parties. In a traditional contract, trust is required
                    between the parties to ensure that they will fulfill their obligations. However,
                    with trust minimized agreements, trust is replaced by code and mathematics,
                    which automate the execution of the contract and eliminate the need for
                    intermediaries.
                  </p>
                  <h5>{` How is it even possible to remove "trust"? `}</h5>
                  <p>
                    Trust minimized agreements are made possible by the use of blockchain
                    technology, which provides a decentralized, distributed ledger for the storage
                    and execution of smart contracts. The use of blockchain ensures that the
                    {` contract's `} terms and execution are transparent, immutable, and visible to
                    all parties on the network. This means that once a contract is executed, it
                    cannot be altered or tampered with, providing a high level of security and
                    trustworthiness.
                  </p>
                  <h5>What do these {` "Smart Contracts" `} offer?</h5>
                  <p>
                    One of the key benefits of trust minimized agreements is their ability to
                    eliminate intermediaries. In traditional contracts, intermediaries, such as
                    lawyers or banks, are needed to verify and enforce the contract. However, with
                    trust minimized agreements, the contract is self-executing, reducing costs and
                    increasing efficiency.
                  </p>
                  <p>
                    Trust minimized agreements have a wide range of potential use cases, such as
                    supply chain management, digital identity, and voting systems. For example, a
                    smart contract can be used to automate the tracking and management of goods in a
                    supply chain, eliminating the need for intermediaries such as logistics
                    companies. Additionally, smart contracts can be used to create digital
                    identities that are transparent and immutable, making them suitable for use in
                    voting systems.
                  </p>
                  <h5>To sum it all up...</h5>
                  <p>
                    In summary, Trust minimized agreements are smart contracts that rely on
                    technology to minimize the trust required between parties. Blockchain technology
                    provides the necessary decentralization and immutability for the smart
                    {` contract's `} terms and execution. Trust is replaced by code and mathematics,
                    which automates the execution and eliminates intermediaries. This leads to more
                    efficient, secure and transparent agreements. The use cases are vast such as
                    supply chain and digital identity.
                  </p>
                  <blockquote>
                    <p>
                      {`"The main advantage of blockchain technology is supposed to be that it's more secure, but new technologies are generally hard for people to trust, and this paradox can't really be avoided."`}
                    </p>
                    <p className="blockquote-footer">
                      {" "}
                      <cite title="Source Title">Vitalik Buterin</cite>
                    </p>
                  </blockquote>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SingleBlog;
