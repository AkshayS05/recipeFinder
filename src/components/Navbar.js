import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import logo from "../assets/logo.png";
import "./Navbar.css";
import Searchbar from "./Searchbar";
export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <img src={logo}></img>
        </Link>

        <Searchbar />

        <Link to="/create">Create</Link>
      </nav>
    </div>
  );
}
