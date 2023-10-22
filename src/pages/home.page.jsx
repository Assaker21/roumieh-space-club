import "./home.page.scss";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";

function Home() {
  function preventDefault(e) {
    e.preventDefault();
    console.log("here too");
  }

  return (
    <div className="home">
      <section className="section landing-section">
        <div className="landing-section-container">
          <Draggable
            onStart={() => {
              window.addEventListener("touchmove", preventDefault, { passive: false });
            }}
            onStop={() => {
              window.removeEventListener("touchmove", preventDefault, { passive: false });
            }}
          >
            <img src="/images/astronaut cartoon 1024.png" alt="" className="landing-section-image" />
          </Draggable>
          <div className="landing-section-quote-container">
            <h2 className="landing-section-quote">Learn, improve and have fun with the Roumieh Space Club</h2>
            <p className="landing-section-quote-writer">We gather all space enthusiasts for all kinds of astronomical events and discussions. The club aims to spread its knowledge to the biggest audience possible.</p>
            <button className="join-button">Join now - it's free!</button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="past-work-section-container">
          <div className="section-title">Our past work</div>
          <div className="video-container">
            <ReactPlayer width={"100%"} height={"100%"} className="video" controls={true} url="https://player.vimeo.com/video/876799084?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" />
          </div>
        </div>
      </section>
    </div>
  );
}

//&quot;Not only do we live among the stars, the stars live within us.&quot;
//~ Neil Degrasse Tyson

export default Home;
