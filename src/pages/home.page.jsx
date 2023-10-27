import "./home.page.scss";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";
import { useEffect, useState } from "react";

function Activity() {
  const images = ["/images/event.jpeg", "https://media.istockphoto.com/id/1377841262/photo/the-beautiful-scenery-of-a-tent-in-a-pine-tree-forest-at-pang-oung-mae-hong-son-province.jpg?s=612x612&w=0&k=20&c=1JvDx-16zTIeytdcC-Fa27nVJ_8SveP-omNKKlUJ-lQ=", "https://media.istockphoto.com/id/911995140/photo/camping-tent-in-a-camping-in-a-forest-by-the-river.jpg?b=1&s=612x612&w=0&k=20&c=2hzFAg7OfhJXZ6SFIzTZxctAImwdJ_1QBtnZPgoJMgM=", "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D"];

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="past-activity-container">
      <div className="past-activity-images">
        {selectedImage > 0 && (
          <button
            onClick={() => {
              if (selectedImage <= 0) return;
              setSelectedImage(selectedImage - 1);
            }}
            className="past-activity-images-nav-button left"
          >
            <i className="bx bxs-left-arrow-circle"></i>
          </button>
        )}
        <img loading="lazy" src={images[selectedImage]} alt="" className="past-activity-image" />
        {selectedImage + 1 < images.length && (
          <button
            onClick={() => {
              if (selectedImage + 1 > images.length) return;
              setSelectedImage(selectedImage + 1);
            }}
            className="past-activity-images-nav-button right"
          >
            <i className="bx bxs-right-arrow-circle"></i>
          </button>
        )}
      </div>
      <div className="past-activity-info">
        <div className="past-activity-name">Stargazing night</div>
        <div className="past-activity-location">Jbeil</div>
        <div className="past-activity-date">21 09 2002</div>
        <div className="past-activity-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, numquam molestiae consectetur esse debitis voluptate incidunt quaerat vel laudantium. Magni explicabo adipisci sit at dolorem quas perspiciatis asperiores eligendi culpa!</div>
      </div>
    </div>
  );
}

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
            <Activity />
            <Activity />
            <Activity />
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
