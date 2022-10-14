// import "bootstrap/scss/bootstrap";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import Menu from "./Menu";

const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    
    <Menu/>
    <CartWidget/>
  </div>
</nav>
    )
}

export default NavBar;