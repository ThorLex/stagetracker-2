import Home from '../components/Home';
import Sidebarr from '../components/Sidebarre';
const Container = () => {
    return (  


<div>

  <div className="pagetitle">
    <br /><br />
    <Sidebarr/>
    <Home/>
  <h1>Dashboard</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>  <div className=" mt-2 row p-0 m-0">
<div className=" mt-2 col-8">
  
<div className="row">
  
<div className="col-xxl-4  mt-2 col-lg-4 col-md-6 col-md-4">
  <div className="card info-card revenue-card">
    <div className="filter">
      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li><a className="dropdown-item" href="#">Today</a></li>
        <li><a className="dropdown-item" href="#">This Month</a></li>
        <li><a className="dropdown-item" href="#">This Year</a></li>
      </ul>
    </div>
    <div className="card-body">
      <h5 className="card-title">Revenue <span>| This Month</span></h5>
      <div className="d-flex align-items-center">
        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <i className="bi bi-currency-dollar" />
        </div>
        <div className="ps-3">
          <h6>$3,264</h6>
          <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
        </div>
      </div>
    </div>
  </div>
</div>




<div className="col-xxl-4  mt-2 col-lg-4 col-md-6 col-md-4">
  <div className="card info-card revenue-card">
    <div className="filter">
      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li><a className="dropdown-item" href="#">Today</a></li>
        <li><a className="dropdown-item" href="#">This Month</a></li>
        <li><a className="dropdown-item" href="#">This Year</a></li>
      </ul>
    </div>
    <div className="card-body">
      <h5 className="card-title">Revenue <span>| This Month</span></h5>
      <div className="d-flex align-items-center">
        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <i className="bi bi-currency-dollar" />
        </div>
        <div className="ps-3">
          <h6>$3,264</h6>
          <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="col-xxl-4 col-lg-4 mt-2 col-md-12  col-md-4">
  <div className="card info-card revenue-card">
    <div className="filter">
      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li><a className="dropdown-item" href="#">Today</a></li>
        <li><a className="dropdown-item" href="#">This Month</a></li>
        <li><a className="dropdown-item" href="#">This Year</a></li>
      </ul>
    </div>
    <div className="card-body">
      <h5 className="card-title">Revenue <span>| This Month</span></h5>
      <div className="d-flex align-items-center">
        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <i className="bi bi-currency-dollar" />
        </div>
        <div className="ps-3">
          <h6>$3,264</h6>
          <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

  <div className="card mt-2">
  <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
    <div className="activity">
      <div className="activity-item d-flex">
        <div className="activite-label">32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
        <div className="activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
        <div className="activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
        <div className="activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
        <div className="activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 days</div>
        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
        <div className="activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">4 weeks</div>
        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
        <div className="activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/* End activity item*/}
    </div>
  </div>
</div>



<div className="card mt-2">
  <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
    <div className="activity">
      <div className="activity-item d-flex">
        <div className="activite-label">32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
        <div className="activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
        <div className="activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
        <div className="activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
        <div className="activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 days</div>
        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
        <div className="activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">4 weeks</div>
        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
        <div className="activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/* End activity item*/}
    </div>
  </div>
</div>



<div className="card mt-2">
  <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
    <div className="activity">
      <div className="activity-item d-flex">
        <div className="activite-label">32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
        <div className="activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
        <div className="activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
        <div className="activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
        <div className="activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 days</div>
        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
        <div className="activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">4 weeks</div>
        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
        <div className="activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/* End activity item*/}
    </div>
  </div>
</div>


<div className="card mt-2 ">
  <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
    <div className="activity">
      <div className="activity-item d-flex">
        <div className="activite-label">32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
        <div className="activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
        <div className="activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
        <div className="activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
        <div className="activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 days</div>
        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
        <div className="activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">4 weeks</div>
        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
        <div className="activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/* End activity item*/}
    </div>
  </div>
</div>

</div>


<div className="col-4 mt-2">

<div className="card">
  <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
    <div className="activity">
      <div className="activity-item d-flex">
        <div className="activite-label">32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
        <div className="activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
        <div className="activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
        <div className="activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
        <div className="activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 days</div>
        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
        <div className="activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">4 weeks</div>
        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
        <div className="activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/* End activity item*/}
    </div>
  </div>
</div>


<div className="card mt-2">
  <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
    <div className="activity">
      <div className="activity-item d-flex">
        <div className="activite-label">32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
        <div className="activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
        <div className="activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
        <div className="activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
        <div className="activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 days</div>
        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
        <div className="activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">4 weeks</div>
        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
        <div className="activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/* End activity item*/}
    </div>
  </div>
</div>






<div className="card mt-2">
  <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
    <div className="activity">
      <div className="activity-item d-flex">
        <div className="activite-label">32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
        <div className="activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
        <div className="activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
        <div className="activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
        <div className="activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 days</div>
        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
        <div className="activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">4 weeks</div>
        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
        <div className="activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/* End activity item*/}
    </div>
  </div>
</div>




<div className="card mt-2">
  <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>
    <div className="activity">
      <div className="activity-item d-flex">
        <div className="activite-label">32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
        <div className="activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
        <div className="activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
        <div className="activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
        <div className="activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">2 days</div>
        <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
        <div className="activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/* End activity item*/}
      <div className="activity-item d-flex">
        <div className="activite-label">4 weeks</div>
        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
        <div className="activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/* End activity item*/}
    </div>
  </div>
</div>





</div>
</div>



</div>
    );
}
 
export default Container;