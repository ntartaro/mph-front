import Nav from "./Nav";

const Header = () => (
  <div>
    <div className="bar">
      <a href="">My Pal Hal</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div className="bar">
      <p>Cart</p>
    </div>
  </div>
);

export default Header;
