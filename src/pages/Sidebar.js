export default function Sidebar() {
    return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div className="position-sticky pt-3">
    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Filters</span>
        <a className="link-secondary" href="/some/valid/uri" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <div className="menu-border">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/some/valid/uri">
            <span data-feather="home"></span>
            Dashboard
          </a>
          <select className="form-select form-select-sm form-select__place_menu" aria-label=".form-select-sm example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
      </select>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/some/valid/uri">
            <span data-feather="file"></span>
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/some/valid/uri">
            <span data-feather="shopping-cart"></span>
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/some/valid/uri">
            <span data-feather="users"></span>
            Customers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/some/valid/uri">
            <span data-feather="bar-chart-2"></span>
            Reports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/some/valid/uri">
            <span data-feather="layers"></span>
            Integrations
          </a>
        </li>
      </ul>
      </div>

      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Saved reports</span>
        <a className="link-secondary" href="/some/valid/uri" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <div className="menu-border">
      <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
  <nav className="small" id="toc">
    <ul className="list-unstyled">
      <li className="my-2">
        <button className="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#contents-collapse" aria-controls="contents-collapse">Contents</button>
        <ul className="list-unstyled ps-3 collapse" id="contents-collapse">
          <li>
        Typography</li>
          <li><a className="d-inline-flex align-items-center rounded" href="#images">Images</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#tables">Tables</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#figures">Figures</a></li>
        </ul>
      </li>
      <li className="my-2">
        <button className="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#forms-collapse" aria-controls="forms-collapse">Forms</button>
        <ul className="list-unstyled ps-3 collapse" id="forms-collapse">
          <li><a className="d-inline-flex align-items-center rounded" href="#overview">Overview</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#disabled-forms">Disabled forms</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#sizing">Sizing</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#input-group">Input group</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#floating-labels">Floating labels</a></li>
          <li><a className="d-inline-flex align-items-center rounded" href="#validation">Validation</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</aside>

      </div>
    </div>
  </nav>)
}