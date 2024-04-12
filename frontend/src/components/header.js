import { Link,NavItem } from 'react-router-dom';
import logo from './../assets/logo.png'
const Header = () => {
    return (
<div>
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <img src={logo} alt  />
        <span className="d-none d-lg-block">Stage Tracker</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" />
    </div>
    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i className="bi bi-search" /></button>
      </form>
    </div>
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
            <i className="bi bi-search" />
          </a>
        </li>
        <li className="nav-item dropdown pe-3">
          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <Link to ="/login">  <button type="submit" className=" mx-2 btn btn-primary">Logout</button></Link>
            <span className="d-none d-md-block dropdown-toggle ps-2"> Beyas</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>BEKONO Beyas</h6> 
            </li>
           <button type="submit" className="btn btn-primary">soumettre</button>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">  <Link to={"/home"}>
        <a className="nav-link collapsed"  >
          <i className="bi bi-grid" />
          <span>  Dashbaord</span>
        </a>
        </Link>
      </li>
      <li className="nav-item">  <Link to={"/admin_user"}>
        <a className="nav-link collapsed"    data-bs-target="#components-nav" data-bs-toggle="collapse" >
          <i className="bi bi-menu-button-wide"  /><span>Administration</span><i className="bi bi-chevron-down ms-auto" />
        </a>
        </Link> 
      </li>
      <li className="nav-item">
      <Link to={"/user_table"}>  
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" >
          <i className="bi bi-journal-text"   /><span>Tableaux</span><i className="bi bi-chevron-down ms-auto" />
        </a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to={"/generate"}>  
        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" >
          <i className="bi bi-layout-text-window-reverse" /><span>Rapport</span><i className="bi bi-chevron-down ms-auto" />
        </a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to={"/chat"}>  
        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-bar-chart" /><span> Chat </span><i className="bi bi-chevron-down ms-auto" />
        </a>
        </Link>
      </li>
      <li className="nav-heading"> Personnelles</li>
      <li className="nav-item">
      <Link to={"/profil"}>  
        <a className="nav-link collapsed" href="users-profile.html">
          <i className="bi bi-person" />
          <span> profil </span>
        </a>
        </Link>
      </li>
    </ul>
  </aside>
</div>
    );
}
 
export default Header;