import "./Navbar.css"
import Logo from "../../assets/images/Fill 213.png"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="img" />
        <p>my travel journal.</p>
      </nav>
    </>
  );
}

export default Navbar
