const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light">
        <div className="site-intro">
          <h4>ANAHA</h4>
        </div>
        <div className="ml-4">
          <p className="mb-2 d-none d-sm-inline-block">
            Patient Profile <i className="fa fa-chevron-right"></i> Analytics
          </p>
        </div>
        <form className="d-none d-sm-inline-block form-inline navbar-search ml-auto">
          <div className="input-group">
            <i className="fa fa-search fa-2 search-icon"></i>
            <input
              type="text"
              className="form-control "
              placeholder="Search for..."
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-search-options" type="button">
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </form>

        <ul className="navbar-nav">
          <li>
            <div className="notifications">
              <i className="fa fa-info-circle text-danger"></i>
            </div>
          </li>
          <li>
            <div className="notifications">
              <i className="fa fa-th-large"></i>
            </div>
          </li>

          <li>
            <div className="position-relative notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bell align-middle"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="indicator">4</span>
            </div>
          </li>

          <li>
            <div className="nav-link">
              <img
                className="img-profile rounded-circle"
                alt="user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71Tc9Tk2q1eJUUlX1bXhWrc0-g8O9xnAplw&usqp=CAU"
              />
              <span className="mr-2 d-none d-lg-inline user-name">
                Dr Raquel <i className="fa fa-chevron-down ml-2"></i>
              </span>
            </div>
          </li>
        </ul>
      </nav>
      <p className="mb-2 d-block d-md-none mb-3">
        Patient Profile <i className="fa fa-chevron-right"></i> Analytics
      </p>
    </>
  );
};

export default Navbar;
