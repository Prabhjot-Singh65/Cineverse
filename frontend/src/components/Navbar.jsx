import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        {/* Left */}
        <div className="logo">
          CineVerse
        </div>

        {/* Center */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Movies, Events, Sports..."
          />
        </div>

        {/* Right */}
        <div className="nav-right">
          <select>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Chandigarh</option>
          </select>

          <button className="login-btn">
            Sign In
          </button>
        </div>
      </nav>

      <div className="sub-navbar">
        <a href="#">Movies</a>
        <a href="#">Events</a>
        <a href="#">Sports</a>
        <a href="#">Activities</a>
        <a href="#">Offers</a>
      </div>
    </>
  );
}