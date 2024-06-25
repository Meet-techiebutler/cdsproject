import React from 'react';

export default function Footer() {
  return (
    <>
      
<footer class="cover-background background-position-center-top pb-0"
        style={{backgroundImage: "url('images/demo-charity-footer-bg.png')"}}>
        <div className="border-bottom border-color-transparent-white-light pb-3 lg-pb-5 sm-pb-45px">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col text-center">
                        <h4 className="mb-0 text-white alt-font fw-400">We need your small help. <a
                                href="demo-charity-contact.html"
                                className="text-decoration-line-bottom-medium text-base-color">Get involved!</a></h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center pt-5 pb-5 md-pt-45px md-pb-50px text-center text-sm-start">

                <div
                    className="col-lg-3 col-md-12 col-sm-6 d-flex flex-column flex-md-row flex-lg-column align-items-md-center align-items-lg-start last-paragraph-no-margin md-mb-35px">
                    <a href="index.php" className="footer-logo d-inline-block xs-mb-15px"><img
                            src="images/main/cds-logo.png" alt="true" /></a>
                    <div className="mt-auto ms-md-auto ms-lg-0 ms-0">
                        <span className="fs-14 text-uppercase text-white fw-500 ls-1px text-justify">મોરબી જિલ્લા ના પાટીદાર સમાજ ના ગં.સ્વ. બહેનોના દિકરાઓ તેમજ દિકરીઓની સંપૂર્ણ અભ્યાસ ફી અર્પણ કરતુ ટ્રસ્ટ એટલે સી.ડી.એસ. ચેરીટેબલ ટ્રસ્ટ - મોરબી </span>
                    </div>
                </div>


                <div className="col-lg-3 col-md-4 col-sm-6 sm-mb-35px">
                    <span className="d-block text-white mb-5px fs-14 text-uppercase fw-500 ls-1px">Get in touch</span>
                    <p className="w-70 text-light-conch-green mb-10px xl-w-80 lg-w-100">27 Sondanella, Eden walk, Eden
                        centre, Paris</p>
                    <div className="text-white"><i
                            className="feather icon-feather-phone-call fs-16 me-10px text-base-color"></i><a
                            href="tel:12345678910">+1 234 567 8910</a></div>
                    <div><i className="feather icon-feather-mail fs-16 me-10px text-base-color"></i><a
                            href="cdn-cgi/l/email-protection.html#a9c0c7cfc6e9cdc6c4c8c0c787cac6c4"
                            className="text-white text-decoration-line-bottom"><span className="__cf_email__"
                                data-cfemail="1970777f76597d7674787077377a7674">[email&#160;protected]</span></a></div>
                </div>


                <div className="col-xxl-4 col-lg-3 col-md-4 col-sm-6 last-paragraph-no-margin xs-mb-35px">
                    <span className="d-block text-white mb-5px fs-14 text-uppercase fw-500 ls-1px">About foundation</span>
                    <p className="w-70 text-light-conch-green xl-w-100">Foundation was seeded on march 2008. Foundation is a
                        non profit and registered society.</p>
                </div>


                <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 last-paragraph-no-margin">
                    <span className="d-block text-white mb-15px fs-14 text-uppercase fw-500 ls-1px">Social connect</span>
                    <div className="elements-social social-icon-style-09">
                        <ul className="medium-icon light">
                            <li><a className="facebook" href="https://www.facebook.com/" target="_blank"><i
                                        className="fa-brands fa-facebook-f"></i><span></span></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/" target="_blank"><i
                                        className="fa-brands fa-instagram"></i><span></span></a></li>
                            <li><a className="twitter" href="https://www.twitter.com/" target="_blank"><i
                                        className="fa-brands fa-twitter"></i><span></span></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div className="pt-15px pb-15px bg-racing-green">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 text-center text-lg-start md-mb-5px">
                        <ul className="footer-navbar">
                            <li className="nav-item"><a href="demo-charity.html" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="demo-charity-about.html" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="demo-charity-causes.html" className="nav-link">Causes</a></li>
                            <li className="nav-item"><a href="demo-charity-gallery.html" className="nav-link">Gallery</a></li>
                            <li className="nav-item"><a href="demo-charity-volunteer.html" className="nav-link">Volunteer</a>
                            </li>
                            <li className="nav-item"><a href="demo-charity-stories.html" className="nav-link">Stories</a></li>
                            <li className="nav-item"><a href="demo-charity-contact.html" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 text-center text-lg-end">
                        <p>Made with <a href = "https://asquare.agency" className = "text-base-color">&#10084;</a> by <span id="copyright"/>  <a href="https://asquare.agency" target = "_blank" class = "text-base-color"> AsquareX India </a> </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div className="scroll-progress d-none d-xxl-block">
        <a href="#" className="scroll-top" aria-label="scroll">
            <span className="scroll-text">Scroll</span><span className="scroll-line"><span className="scroll-point"></span></span>
        </a>
    </div>
    </>
  );
}
