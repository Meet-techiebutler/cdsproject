import React from 'react';

export default function NavBar() {
  return (
    <>
      <div className="preloader">
        <img src="images/main/cds-pre-loader.gif" alt="Logo" className="logo" />
      </div>
      <header className="header-with-topbar">
        <div className="header-top-bar top-bar-light bg-gradient-corduroy-green-dark-goldenrod disable-fixed">
          <div className="container-fluid">
            <div className="row h-42px align-items-center justify-content-center">
              <div className="col-auto text-center">
                <div className="d-inline-block align-middle fs-12 text-white text-uppercase fw-500">
                  મોરબી જિલ્લા ના પાટીદાર સમાજ ના ગં.સ્વ. બહેનોના દિકરાઓ તેમજ દિકરીઓની સંપૂર્ણ અભ્યાસ ફી અર્પણ કરતુ ટ્રસ્ટ એટલે સી.ડી.એસ. ચેરીટેબલ ટ્રસ્ટ - મોરબી &nbsp;&nbsp; | &nbsp;&nbsp;
                  <a href="demo-charity-stories.html" className="text-decoration-line-bottom text-white">Get Directions</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg header-light border-bottom border-color-transparent-dark-very-light disable-fixed" style={{ backgroundImage: "url('images/demo-charity-home-bg-01.jpg')" }}>
          <div className="container-fluid justify-content-lg-start">
            <div className="col-auto">
              <a className="navbar-brand" href="index.php">
                <img src="images/main/cds-logo.png" alt="default-logo" className="default-logo" />
                <img src="images/main/cds-logo.png" alt="alt-logo" className="alt-logo" />
                <img src="images/main/cds-logo.png" alt="mobile-logo" className="mobile-logo" />
              </a>
            </div>
            <div className="col-auto menu-order left-nav">
              <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item"><a href="index.php" className="nav-link">Home</a></li>
                  <li className="nav-item"><a href="about.php" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="causes.php" className="nav-link">Causes</a></li>
                  <li className="nav-item"><a href="gallery.php" className="nav-link">Gallery</a></li>
                  <li className="nav-item"><a href="volunteer.php" className="nav-link">Volunteer<span className="label bg-dark-gray text-white border-radius-26px">Help</span></a></li>
                  <li className="nav-item"><a href="stories.php" className="nav-link">Stories</a></li>
                  <li className="nav-item"><a href="contact.php" className="nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-auto ms-auto d-none d-xl-flex">
              <div className="header-icon">
                <div className="d-none d-xxl-inline-block me-25px">
                  <a href="tel:+919726112000" className="widget-text text-dark-gray fs-16 fw-600">
                    <i className="feather icon-feather-phone-outgoing me-10px"></i>+91 97261 12000
                  </a>
                </div>
                <div className="header-button">
                  <a href="contact.php" className="btn btn-very-small btn-dark-gray btn-box-shadow btn-round-edge">Let's talk</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
