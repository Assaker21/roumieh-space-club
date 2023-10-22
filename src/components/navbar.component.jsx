import { useEffect, useState } from "react";
import "./navbar.component.scss";

function Navbar() {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });

      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <>
      <nav className={"navbar" + (scroll == 0 || openNavbar ? " start" : "")}>
        <h1 className="title">Roumieh Space Club</h1>

        {width > 700 && (
          <ul className="menu-links">
            <li className="menu-link">Home</li>
            <li className="menu-link">Events</li>
            <li className="menu-link">About</li>
            <li className="menu-link">Articles</li>
            <button className="join-button">Join us</button>
          </ul>
        )}

        {width <= 700 && (
          <div className="menu-links">
            <button
              className="ham-button"
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              <i className={openNavbar ? "bx bx-x" : "bx bx-menu"}></i>
            </button>
          </div>
        )}
      </nav>

      <nav className={"narrow-navbar" + (openNavbar ? "" : " hidden")}>
        <ul className="menu-links">
          <li className="menu-link">Home</li>
          <li className="menu-link">Events</li>
          <li className="menu-link">About</li>
          <li className="menu-link">Articles</li>
          <button className="join-button">Join us</button>
        </ul>
      </nav>
      <div className="navbar-offset"></div>
    </>
  );
}

export default Navbar;
