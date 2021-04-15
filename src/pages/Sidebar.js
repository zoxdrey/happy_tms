export default function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Filters</span>
          <a
            className="link-secondary"
            href="/some/valid/uri"
            aria-label="Add a new report"
          >
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <div className="menu-border">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/some/valid/uri"
              >
                <span data-feather="home"></span>
                Dashboard
              </a>
              <select
                className="form-select form-select-sm form-select__place_menu"
                aria-label=".form-select-sm example"
              >
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

        <div class="p-3 bg-white">
          <a
            href="/"
            class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
          >
            <svg class="bi me-2" width="30" height="24"></svg>
            <span class="fs-5 fw-semibold">Collapsible</span>
          </a>
          <ul class="list-unstyled ps-0">
            <li class="mb-1">
              <button
                class="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="true"
              >
                Home
              </button>
              <div class="collapse show" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="/" class="link-dark rounded">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Updates
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Reports
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button
                class="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Dashboard
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="/" class="link-dark rounded">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Annually
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button
                class="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-expanded="false"
              >
                Orders
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="/" class="link-dark rounded">
                      New
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Processed
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Shipped
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Returned
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <button
                class="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#account-collapse"
                aria-expanded="false"
              >
                Account
              </button>
              <div class="collapse" id="account-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="/" class="link-dark rounded">
                      New...
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="/" class="link-dark rounded">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
