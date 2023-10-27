import "./home.page.scss";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";

function Home() {
  const boardMembers = [
    {
      name: "Charbel Assaker",
      role: "Web developer",
      image: "/images/charbel-assaker.jpg"
    },
    {
      name: "Charbel Assaker",
      role: "Web developer",
      image: "/images/charbel-assaker.jpg"
    },
    {
      name: "Charbel Assaker",
      role: "Web developer",
      image: "/images/charbel-assaker.jpg"
    },
    {
      name: "Charbel Assaker",
      role: "Web developer",
      image: "/images/charbel-assaker.jpg"
    },
    {
      name: "Charbel Assaker",
      role: "Web developer",
      image: "/images/charbel-assaker.jpg"
    },
    {
      name: "Charbel Assaker",
      role: "Web developer",
      image: "/images/charbel-assaker.jpg"
    },
    {
      name: "Charbel Assaker",
      role: "Web developer",
      image: "/images/charbel-assaker.jpg"
    },
    {
      name: "Charbel Assaker",
      role: "Web developer",
      image: "/images/charbel-assaker.jpg"
    }
  ];

  function preventDefault(e) {
    e.preventDefault();
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
            <button className="join-button">Join now - it&apos;s free!</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="section-title">Past activities</div>
          <div className="video-container">
            <ReactPlayer width={"100%"} height={"100%"} className="video" controls={true} url="https://player.vimeo.com/video/876834803?h=ac7ed2219a" />
          </div>
          <div className="past-activities-container">
            <div className="past-activity-container">
              <div className="past-activity-images">
                <img loading="lazy" src="/images/event.jpeg" alt="" className="past-activity-image" />
              </div>
              <div className="past-activity-info">
                <div className="past-activity-name">Stargazing night</div>
                <div className="past-activity-location">Jbeil</div>
                <div className="past-activity-date">21 09 2002</div>
                <div className="past-activity-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, numquam molestiae consectetur esse debitis voluptate incidunt quaerat vel laudantium. Magni explicabo adipisci sit at dolorem quas perspiciatis asperiores eligendi culpa!</div>
              </div>
            </div>

            <div className="past-activity-container">
              <div className="past-activity-images">
                <img loading="lazy" src="/images/event.jpeg" alt="" className="past-activity-image" />
              </div>
              <div className="past-activity-info">
                <div className="past-activity-name">Stargazing night</div>
                <div className="past-activity-location">Jbeil</div>
                <div className="past-activity-date">21 09 2002</div>
                <div className="past-activity-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, numquam molestiae consectetur esse debitis voluptate incidunt quaerat vel laudantium. Magni explicabo adipisci sit at dolorem quas perspiciatis asperiores eligendi culpa!</div>
              </div>
            </div>

            <div className="past-activity-container">
              <div className="past-activity-images">
                <img loading="lazy" src="/images/event.jpeg" alt="" className="past-activity-image" />
              </div>
              <div className="past-activity-info">
                <div className="past-activity-name">Stargazing night</div>
                <div className="past-activity-location">Jbeil</div>
                <div className="past-activity-date">21 09 2002</div>
                <div className="past-activity-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, numquam molestiae consectetur esse debitis voluptate incidunt quaerat vel laudantium. Magni explicabo adipisci sit at dolorem quas perspiciatis asperiores eligendi culpa!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="section-title">Meet the board</div>
          <div className="board-members">
            {boardMembers.map((boardMember) => {
              return (
                <div key={"Board member " + boardMember.name} className="board-member">
                  <img src={boardMember.image} alt="" className="board-member-image" />
                  <div className="board-member-info">
                    <span className="board-member-name">{boardMember.name}</span>
                    <span className="board-member-role">{boardMember.role}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

//&quot;Not only do we live among the stars, the stars live within us.&quot;
//~ Neil Degrasse Tyson

export default Home;
