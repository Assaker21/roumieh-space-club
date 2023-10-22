import "./navbar.component.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">Roumieh Space Club</h1>
      <ul className="menu-links">
        <li className="menu-link">Home</li>
        <li className="menu-link">Events</li>
        <li className="menu-link">About</li>
        <li className="menu-link">Articles</li>
        <button className="join-button">Join us</button>
      </ul>
    </nav>
  );
}

export default Navbar;
