import "./Navbar.css";

export default function Navbar({ setSelectedCategory }) {
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
                <button onClick={() => setSelectedCategory("Movies")}>
                    Movies
                </button>

                <button onClick={() => setSelectedCategory("Events")}>
                    Events
                </button>

                <button onClick={() => setSelectedCategory("Sports")}>
                    Sports
                </button>

                <button onClick={() => setSelectedCategory("Activities")}>
                    Activities
                </button>
            </div>
        </>
    );
}