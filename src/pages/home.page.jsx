import "./home.page.scss";

function Home() {
  return (
    <section className="section">
      <div className="landing-section-container">
        <img src="/images/astronaut cartoon 1024.png" alt="" className="landing-section-image" />
        <div className="landing-section-quote-container">
          <h2 className="landing-section-quote">
            &quot;Not only do we live among the stars,
            <br /> the stars live within us.&quot;
          </h2>
          <p className="landing-section-quote-writer">~ Neil Degrasse Tyson</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
