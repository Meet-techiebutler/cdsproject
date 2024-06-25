import React from 'react';
import NavBar from './NavBar';
import Footer from './footerPart';

export default function Home() {
  return (
    <>
      <NavBar />
      <section
        className="top-space-padding position-relative cover-background background-position-center-bottom magic-cursor round-cursor"
        style={{backgroundImage: "url('images/demo-charity-home-banner-bg.jpg')"}}>
        <div className="container">
            <div className="row align-items-center position-relative">
                <div className="col-11 col-lg-6 col-sm-7 mt-14 mb-14 sm-mt-10 sm-mb-10"
                    data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateX&quot;: [30, 1], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                    <div
                        className="vertical-title-center align-items-center position-absolute left-minus-80px xl-left-minus-60px lg-left-minus-20px top-0px d-none d-xl-flex">
                        <div
                            className="title fs-15 text-dark-golden-yellow fw-700 text-uppercase ls-3px border-start border-color-dark-golden-yellow lh-10 pt-45px pb-45px">
                            Empowering Communities</div>
                    </div>
                    <div
                        className="alt-font fs-95 lh-85 lg-fs-80 xs-fs-70 xs-lh-65 lg-lh-70 mb-30px text-dark-gray ls-minus-3px ws-minus-10px">
                        Help for hopeless.</div>
                    <div className="fs-19 lh-30 w-65 lg-w-80 md-w-90 sm-w-100 mb-30px">Fight for right cause for save the
                        world. Every child deserves a better future!</div>
                    <a href="https://cdsparivar.org/registration/public/admin/registrations/registration"
                        className="btn btn-large btn-round-edge with-rounded btn-gradient-green-goldenrod-yellow btn-box-shadow" target = "_blank">For Registration<span className="bg-white"><i
                                className="fa-solid fa-arrow-right text-dark-golden-yellow"></i></span></a>
                </div>
            </div>
        </div>
    </section>

    <section className="pt-3 lg-pt-50px sm-pt-30px">
        <div className="container">
            <div className="row justify-content-center mb-3 sm-mb-30px">
                <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-9 col-sm-10 text-center"
                    data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                    <h4 className="alt-font text-dark-gray">CDS Charity Trust, <br/>  Cow, Daughters, and Students Care</h4>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center mb-5 md-mb-8 sm-mb-40px"
                data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [0, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 1500, &quot;delay&quot;: 100, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">


                <div
                    className="col custom-icon-with-text-style-02 border-end border-color-extra-medium-gray md-border-end-0 md-mb-40px">
                    <div className="feature-box ps-40px pe-40px xl-ps-20px xl-pe-20px">
                        <div className="feature-box-icon position-relative">
                            <img className="custom-image-icon mt-30px mb-20px" src="images/demo-charity-home-img-02.jpg"
                                alt="true" />
                            <div className="w-80px h-80px bg-white box-shadow-double-large rounded-circle d-flex align-items-center justify-content-center position-absolute top-0px right-0px"
                                data-bottom-top="transform: translateY(30px)"
                                data-top-bottom="transform: translateY(-30px)">
                                <i className="line-icon-Cow align-middle icon-large text-base-color"></i>
                            </div>
                        </div>
                        <div className="feature-box-content last-paragraph-no-margin">
                            <span className="d-block fs-19 fw-500 mb-5px text-dark-gray">Cow Care</span>
                            <p>Charitable group focus on disaster work.</p>
                        </div>
                    </div>
                </div>


                <div className="col custom-icon-with-text-style-02 border-end border-color-extra-medium-gray xs-mb-40px">
                    <div className="feature-box ps-40px pe-40px xl-ps-20px xl-pe-20px">
                        <div className="feature-box-icon position-relative">
                            <img className="custom-image-icon mt-30px mb-20px" src="images/demo-charity-home-img-03.jpg"
                                alt="true" />
                            <div className="w-80px h-80px bg-white box-shadow-double-large rounded-circle d-flex align-items-center justify-content-center position-absolute top-0px right-0px"
                                data-bottom-top="transform: translateY(-30px)"
                                data-top-bottom="transform: translateY(30px)">
                                <i className="line-icon-Girl align-middle icon-large text-base-color"></i>
                            </div>
                        </div>
                        <div className="feature-box-content last-paragraph-no-margin">
                            <span className="d-block fs-19 fw-500 mb-5px text-dark-gray">Daughters Care</span>
                            <p>We are protects animals across the globe.</p>
                        </div>
                    </div>
                </div>


                <div className="col custom-icon-with-text-style-02">
                    <div className="feature-box ps-40px pe-40px xl-ps-20px xl-pe-20px">
                        <div className="feature-box-icon position-relative">
                            <img className="custom-image-icon mt-30px mb-20px" src="images/demo-charity-home-img-04.jpg"
                                alt="true" />
                            <div className="w-80px h-80px bg-white box-shadow-double-large rounded-circle d-flex align-items-center justify-content-center position-absolute top-0px right-0px"
                                data-bottom-top="transform: translateY(30px)"
                                data-top-bottom="transform: translateY(-30px)">
                                <i
                                    className="line-icon-Student-MaleFemale align-middle icon-large text-base-color"></i>
                            </div>
                        </div>
                        <div className="feature-box-content last-paragraph-no-margin">
                            <span className="d-block fs-19 fw-500 mb-5px text-dark-gray">Students Care</span>
                            <p>Health care are essential for a child's growth.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section className="background-position-left-top position-relative"
        style={{backgroundImage: "url('images/demo-charity-home-bg-01.jpg')"}}>
        <div className="position-absolute left-0px top-minus-50px lg-top-minus-40px md-top-minus-25px sm-top-minus-20px xs-top-minus-15px background-position-left-top w-100 h-100px lg-h-60px md-h-50px background-size-100 background-no-repeat"
            style={{backgroundImage: "url('images/demo-charity-home-bg-02.jpg')"}}></div>
        <div className="container">
            <div className="row justify-content-center mb-5 sm-mb-30px">
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-sm-10 text-center last-paragraph-no-margin"
                    data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 100, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                    <h3 className="alt-font text-dark-gray mb-10px">Popular causes</h3>
                    <p className="w-60 md-w-70 mx-auto sm-w-80 xs-w-100">Currently have 102 project partners across in world
                        that work on child issues.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center mb-5 sm-mb-35px"
                data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 100, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                <div className="col md-mb-30px">

                    <div
                        className="box-shadow-quadruple-large box-shadow-quadruple-large-hover services-box-style-03 last-paragraph-no-margin border-radius-4px overflow-hidden">
                        <div className="position-relative">
                            <a href="demo-charity-blog-single-simple.html"><img
                                    src="images/demo-charity-home-img-05.jpg" alt="true"/></a>
                            <a href="demo-charity-stories.html"
                                className="btn btn-small btn-rounded btn-base-color text-dark-gray btn-box-shadow ps-15px pe-15px pt-5px pb-5px lh-16 ls-0px fw-700 position-absolute right-25px top-25px">Education</a>
                        </div>
                        <div className="bg-white">
                            <div
                                className="ps-50px pe-50px pt-20px pb-30px xl-ps-20px xl-pe-20px text-center progress-bar-style-01">
                                <a href="demo-charity-blog-single-simple.html"
                                    className="d-inline-block fs-20 fw-500 text-dark-gray text-dark-gray-hover mb-5px ls-minus-05px">Education
                                    for children</a>
                                <p>Lorem ipsum dolor consectetur adipiscing eiusmod tempor.</p>

                                <div className="progress mt-50px mb-15px bg-zircon-grey">
                                    <div className="progress-bar bg-dark-gray" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" aria-label="child-issue-one">
                                        <span
                                            className="progress-bar-percent text-center bg-dark-gray fs-11 lh-12 fw-500 text-white">80%</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-start">
                                        <div className="fs-15 lh-normal"><span
                                                className="fw-500 text-dark-gray d-block d-xl-inline-block">Goal:</span>
                                            $30,000</div>
                                    </div>
                                    <div className="col-6 text-end">
                                        <div className="fs-15 lh-normal"><span
                                                className="fw-500 text-dark-gray d-block d-xl-inline-block">Raised:</span>
                                            $22,000</div>
                                    </div>
                                </div>

                            </div>
                            <div className="border-top border-color-extra-medium-gray pt-15px pb-20px text-center">
                                <a href="demo-charity-blog-single-simple.html"
                                    className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray">
                                    <span>
                                        <span className="btn-text">Explore more</span>
                                        <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col md-mb-30px">

                    <div
                        className="box-shadow-quadruple-large box-shadow-quadruple-large-hover services-box-style-03 last-paragraph-no-margin border-radius-4px overflow-hidden">
                        <div className="position-relative">
                            <a href="demo-charity-blog-single-simple.html"><img
                                    src="images/demo-charity-home-img-06.jpg" alt="true"/></a>
                            <a href="demo-charity-stories.html"
                                className="btn btn-small btn-rounded btn-base-color text-dark-gray btn-box-shadow ps-15px pe-15px pt-5px pb-5px lh-16 ls-0px fw-700 position-absolute right-25px top-25px">Support</a>
                        </div>
                        <div className="bg-white">
                            <div
                                className="ps-50px pe-50px pt-20px pb-30px xl-ps-20px xl-pe-20px text-center progress-bar-style-01">
                                <a href="demo-charity-blog-single-simple.html"
                                    className="d-inline-block fs-20 fw-500 text-dark-gray text-dark-gray-hover mb-5px ls-minus-05px">Build
                                    a secure happy life</a>
                                <p>Lorem ipsum dolor consectetur adipiscing eiusmod tempor.</p>

                                <div className="progress mt-50px mb-15px bg-zircon-grey">
                                    <div className="progress-bar bg-dark-gray" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" aria-label="child-issue-two">
                                        <span
                                            className="progress-bar-percent text-center bg-dark-gray fs-11 lh-12 fw-500 text-white">90%</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-start">
                                        <div className="fs-15 lh-normal"><span
                                                className="fw-500 text-dark-gray d-block d-xl-inline-block">Goal:</span>
                                            $50,000</div>
                                    </div>
                                    <div className="col-6 text-end">
                                        <div className="fs-15 lh-normal"><span
                                                className="fw-500 text-dark-gray d-block d-xl-inline-block">Raised:</span>
                                            $55,000</div>
                                    </div>
                                </div>

                            </div>
                            <div className="border-top border-color-extra-medium-gray pt-15px pb-20px text-center">
                                <a href="demo-charity-blog-single-simple.html"
                                    className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray">
                                    <span>
                                        <span className="btn-text">Explore more</span>
                                        <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">

                    <div
                        className="box-shadow-quadruple-large box-shadow-quadruple-large-hover services-box-style-03 last-paragraph-no-margin border-radius-4px overflow-hidden">
                        <div className="position-relative">
                            <a href="demo-charity-blog-single-simple.html"><img
                                    src="images/demo-charity-home-img-07.jpg" alt="true"/></a>
                            <a href="demo-charity-stories.html"
                                className="btn btn-small btn-rounded btn-base-color text-dark-gray btn-box-shadow ps-15px pe-15px pt-5px pb-5px lh-16 ls-0px fw-700 position-absolute right-25px top-25px">Childhood</a>
                        </div>
                        <div className="bg-white">
                            <div
                                className="ps-50px pe-50px pt-20px pb-30px xl-ps-20px xl-pe-20px text-center progress-bar-style-01">
                                <a href="demo-charity-blog-single-simple.html"
                                    className="d-inline-block fs-20 fw-500 text-dark-gray text-dark-gray-hover mb-5px ls-minus-05px">Save
                                    childhood africa</a>
                                <p>Lorem ipsum dolor consectetur adipiscing eiusmod tempor.</p>

                                <div className="progress mt-50px mb-15px bg-zircon-grey">
                                    <div className="progress-bar bg-dark-gray" role="progressbar" aria-valuenow="50"
                                        aria-valuemin="0" aria-valuemax="100" aria-label="child-issue-three">
                                        <span
                                            className="progress-bar-percent text-center bg-dark-gray fs-11 lh-12 fw-500 text-white">50%</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-start">
                                        <div className="fs-15 lh-normal"><span
                                                className="fw-500 text-dark-gray d-block d-xl-inline-block">Goal:</span>
                                            $50,000</div>
                                    </div>
                                    <div className="col-6 text-end">
                                        <div className="fs-15 lh-normal"><span
                                                className="fw-500 text-dark-gray d-block d-xl-inline-block">Raised:</span>
                                            $25,000</div>
                                    </div>
                                </div>

                            </div>
                            <div className="border-top border-color-extra-medium-gray pt-15px pb-20px text-center">
                                <a href="demo-charity-blog-single-simple.html"
                                    className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray">
                                    <span>
                                        <span className="btn-text">Explore more</span>
                                        <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="fa-solid fa-arrow-right"></i></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <div className="fs-15 text-uppercase text-dark-gray fw-600">All our efforts are made possible only
                        because of your support. <a href="demo-charity-causes.html"
                            className="text-decoration-line-bottom text-dark-gray text-dark-gray-hover fw-700">See all
                            causes</a></div>
                </div>
            </div>
        </div>
    </section>


    <section classNameName="background-position-left-top position-relative" style={{backgroundImage: `url('images/demo-charity-home-bg-05.jpg')`}}>
      <div classNameName="position-absolute left-0px top-minus-50px lg-top-minus-25px sm-top-minus-20px xs-top-minus-15px background-position-left-top w-100 h-100px lg-h-60px md-h-50px background-size-100 background-no-repeat" style={{backgroundImage: `url('images/demo-charity-home-bg-03.jpg')`}}>
        {/* Content for this nested div */}
      </div>
      <div classNameName="position-absolute left-0px bottom-minus-50px lg-bottom-minus-50px md-bottom-minus-60px sm-bottom-minus-40px background-position-left-top w-100 h-100px lg-h-70px sm-h-50px background-size-100 background-no-repeat" style={{backgroundImage: `url('images/demo-charity-home-bg-04.jpg')`}}>
        {/* Content for this nested div */}
      </div>
      <div classNameName="container">
        <div classNameName="row justify-content-center mb-5 sm-mb-30px">
          <div classNameName="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-sm-10 text-center last-paragraph-no-margin"
              data-anime="{{ 'el': 'childs', 'translateY': [30, 0], 'opacity': [0,1], 'duration': 600, 'delay': 100, 'staggervalue': 200, 'easing': 'easeOutQuad' }}">
            <h3 classNameName="alt-font text-white mb-0">How organization works</h3>
          </div>
        </div>
        <div classNameName="row row-cols-1 row-cols-lg-4 row-cols-sm-2 mb-4 ms-2 me-2 sm-mb-40px"
            data-anime="{{ 'el': 'childs', 'translateY': [0, 0], 'translateX': [-30, 0], 'opacity': [0,1], 'duration': 600, 'delay': 100, 'staggervalue': 200, 'easing': 'easeOutQuad' }}">

<div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 mb-4 ms-2 me-2 sm-mb-40px"
                data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [0, 0], &quot;translateX&quot;: [-30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 100, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

                <div className="col text-center last-paragraph-no-margin hover-box process-step-style-09 md-mb-50px">
                    <div className="process-step-icon-box position-relative mb-25px">
                        <div
                            className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-90px w-90px fs-28 bg-base-color text-dark-gray alt-font">
                            <span className="number position-relative z-index-1">01</span>
                            <div className="box-overlay bg-white rounded-circle"></div>
                        </div>
                        <span className="progress-right-icon d-none d-sm-inline-block">
                            <i className="feather icon-feather-chevron-right icon-very-medium text-base-color d-flex"></i>
                        </span>
                    </div>
                    <span className="d-inline-block fw-500 text-white fs-18">Join our website</span>
                    <p className="w-75 lg-w-100 sm-w-90 d-inline-block text-white opacity-4">Lorem ipsum is simply text the
                        printing.</p>
                </div>


                <div className="col text-center last-paragraph-no-margin hover-box process-step-style-09 md-mb-50px">
                    <div className="process-step-icon-box position-relative mb-25px">
                        <div
                            className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-90px w-90px fs-28 bg-base-color text-dark-gray alt-font">
                            <span className="number position-relative z-index-1">02</span>
                            <div className="box-overlay bg-white rounded-circle"></div>
                        </div>
                        <span className="progress-right-icon d-none d-lg-inline-block">
                            <i className="feather icon-feather-chevron-right icon-very-medium text-base-color d-flex"></i>
                        </span>
                    </div>
                    <span className="d-inline-block fw-500 text-white fs-18">Start your campagins</span>
                    <p className="w-75 lg-w-100 sm-w-90 d-inline-block text-white opacity-4">Lorem ipsum is simply text the
                        printing.</p>
                </div>


                <div className="col text-center last-paragraph-no-margin hover-box process-step-style-09 xs-mb-50px">
                    <div className="process-step-icon-box position-relative mb-25px">
                        <div
                            className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-90px w-90px fs-28 bg-base-color text-dark-gray alt-font">
                            <span className="number position-relative z-index-1">03</span>
                            <div className="box-overlay bg-white rounded-circle"></div>
                        </div>
                        <span className="progress-right-icon d-none d-sm-inline-block">
                            <i className="feather icon-feather-chevron-right icon-very-medium text-base-color d-flex"></i>
                        </span>
                    </div>
                    <span className="d-inline-block fw-500 text-white fs-18">Share with friends</span>
                    <p className="w-75 lg-w-100 sm-w-90 d-inline-block text-white opacity-4">Lorem ipsum is simply text the
                        printing.</p>
                </div>


                <div className="col text-center last-paragraph-no-margin hover-box process-step-style-09">
                    <div className="process-step-icon-box position-relative mb-25px">
                        <div
                            className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-90px w-90px fs-28 bg-base-color text-dark-gray alt-font">
                            <span className="number position-relative z-index-1">04</span>
                            <div className="box-overlay bg-white rounded-circle"></div>
                        </div>
                    </div>
                    <span className="d-inline-block fw-500 text-white fs-18">Manage donations</span>
                    <p className="w-75 lg-w-100 sm-w-90 d-inline-block text-white opacity-4">Lorem ipsum is simply text the
                        printing.</p>
                </div>

            </div>
          
        </div>
        <div classNameName="row">
          <div classNameName="col-12 text-center">
            <div classNameName="fs-15 text-uppercase text-base-color fw-600">Fight for right cause for save the world.
              <a href="#" classNameName="text-decoration-line-bottom text-base-color text-white-hover">Donate now</a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="position-relative overlap-height">
        <div className="container overlap-gap-section">
            <div className="row justify-content-center mb-5 sm-mb-30px">
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-sm-10 text-center last-paragraph-no-margin"
                    data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                    <h3 className="alt-font text-dark-gray mb-10px">Achievements</h3>
                    <p className="w-60 md-w-70 mx-auto sm-w-80 xs-w-100">Received many awards in recognition of our work
                        towards enabling better futures.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center align-items-center mb-5 sm-mb-30px"
                data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;perspective&quot;: [1200,1200], &quot;scale&quot;: [1.1, 1], &quot;rotateX&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 200, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                <div className="col md-mb-30px">
                    <div
                        className="border border-color-extra-medium-gray border-radius-6px text-center box-shadow-quadruple-large">
                        <div className="pt-10 pb-10">
                            <img src="images/demo-charity-logo-01.png" className="h-80px" alt="true"/>
                        </div>
                        <div
                            className="border-top border-color-extra-medium-gray pt-15px pb-15px ps-10px pe-10px last-paragraph-no-margin">
                            <p>Social media brand of the year</p>
                        </div>
                    </div>
                </div>
                <div className="col md-mb-30px">
                    <div
                        className="border border-color-extra-medium-gray border-radius-6px text-center box-shadow-quadruple-large">
                        <div className="pt-10 pb-10">
                            <img src="images/demo-charity-logo-02.png" className="h-80px" alt="true"/>
                        </div>
                        <div
                            className="border-top border-color-extra-medium-gray pt-15px pb-15px ps-10px pe-10px last-paragraph-no-margin">
                            <p>Best campaign in communication</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div
                        className="border border-color-extra-medium-gray border-radius-6px text-center box-shadow-quadruple-large">
                        <div className="pt-10 pb-10">
                            <img src="images/demo-charity-logo-03.png" className="h-80px" alt="true"/>
                        </div>
                        <div
                            className="border-top border-color-extra-medium-gray pt-15px pb-15px ps-10px pe-10px last-paragraph-no-margin">
                            <p>Worlds most trusted organization</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-12 text-center last-paragraph-no-margin">
                    <div
                        className="d-inline-block align-middle bg-dark-gray fw-700 text-white text-uppercase border-radius-4px ps-15px pe-15px fs-11 me-10px md-m-5px ls-05px">
                        Recognition</div>
                    <div className="d-inline-block align-middle fs-14 lh-normal text-uppercase text-dark-gray fw-600">We are
                        thankful for their faith in our services by giving us such an honour.</div>
                </div>
            </div>
        </div>
    </section>


    <section className="background-position-left-top position-relative"
         style={{backgroundImage: "url('images/demo-charity-home-bg-01.jpg')"}}>
        
        <div className="position-absolute left-0px top-minus-50px md-top-minus-40px sm-top-minus-30px xs-top-minus-15px background-position-left-top w-100 h-100px xs-h-50px background-size-100 background-no-repeat"
            style={{backgroundImage: "url('images/demo-charity-home-bg-02.jpg')"}}></div>
        <div className="container">
            <div className="row g-0 border-radius-4px mb-7 overflow-hidden overlap-section sm-mb-60px xs-mb-40px">
                <div className="col-lg-6 col-md-7 p-8 lg-p-4 sm-p-25px background-position-left-top position-relative text-center text-md-start"
                     style={{backgroundImage: "url('images/demo-charity-home-bg-06.jpg')"}}>
                    <div className="position-absolute right-minus-100px top-0px cover-background w-100px h-100 z-index-9 d-none d-md-block"
                         style={{backgroundImage: "url('images/demo-charity-home-bg-07.jpg')"}}></div>
                    <h3 className="alt-font text-dark-gray w-95 xl-w-100 mb-20px">Why volunteer with foundation?</h3>
                    <p className="text-dark-gray opacity-8 w-95 lg-w-100 mb-30px md-mb-25px">Your volunteering experience
                        will help you develop invaluable professional skills and build your leadership capabilities.</p>
                    <a href="demo-charity-volunteer.html"
                        className="btn btn-large btn-round-edge with-rounded btn-gradient-green-goldenrod-yellow">Become a
                        volunteer<span className="bg-white"><i
                                className="fa-solid fa-arrow-right text-dark-golden-yellow"></i></span></a>
                </div>
                <div className="col-lg-6 col-md-5 cover-background position-relative sm-h-350px"
                    style={{backgroundImage: "url('images/demo-charity-home-bg-08.jpg')"}}>
                    <div
                        className="blur-box bg-white-transparent ps-30px pe-30px pt-25px pb-25px border-radius-4px d-inline-block position-absolute right-50px bottom-50px sm-right-20px sm-bottom-25px animation-float text-center">
                        <h1 className="mb-0 text-dark-gray fw-400 alt-font">2K</h1>
                        <span className="fs-14 fw-700 text-uppercase text-dark-gray">Volunteers</span>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-3 sm-mb-30px xs-mb-15px">
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-sm-10 text-center last-paragraph-no-margin"
                    data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [30, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 600, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                    <h3 className="alt-font text-dark-gray mb-10px">Success stories</h3>
                    <p className="w-70 sm-w-100 mx-auto">Positive stories of change that will make your day, you've come to
                        the right place!</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row mb-4">
                <div className="col-12 position-relative"
                    data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateX&quot;: [150, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 1500, &quot;delay&quot;: 100, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                    <div className="outside-box-right-35 sm-outside-box-right-0">
                        <div className="swiper"
                            data-slider-options="{ &quot;slidesPerView&quot;: 1, &quot;spaceBetween&quot;: 30, &quot;loop&quot;: true, &quot;autoplay&quot;: { &quot;delay&quot;: 400000, &quot;disableOnInteraction&quot;: false },  &quot;pagination&quot;: { &quot;el&quot;: &quot;.slider-three-slide-pagination&quot;, &quot;clickable&quot;: true, &quot;dynamicBullets&quot;: false }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;breakpoints&quot;: { &quot;1200&quot;: { &quot;slidesPerView&quot;: 3 }, &quot;992&quot;: { &quot;slidesPerView&quot;: 2 }, &quot;768&quot;: { &quot;slidesPerView&quot;: 2 }, &quot;320&quot;: { &quot;slidesPerView&quot;: 1 } }, &quot;effect&quot;: &quot;slide&quot; }">
                            <div className="swiper-wrapper pt-20px pb-20px">

                                <div className="swiper-slide blog-side-image">

                                    <div
                                        className="blog-box d-sm-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div className="blog-image w-50 xs-w-100 cover-background"
                                             style={{backgroundImage: "url('images/demo-charity-home-bg-01.jpg')"}}>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="blog-post-image-overlay"></a>
                                        </div>
                                        <div
                                            className="blog-content w-50 xs-w-100 pt-50px pb-40px ps-40px pe-40px xl-p-20px md-p-20px bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="demo-charity-stories.html"
                                                className="btn btn-very-small btn-rounded btn-gradient-green-goldenrod-yellow ls-0px mb-65px xs-mb-40px">Education</a>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="card-title text-dark-gray text-dark-gray-hover fw-500 mb-10px fs-19 md-fs-18 alt-font ws-minus-3px">We
                                                providing urgent aid after cyclone.</a>
                                            <p>Lorem ipsum simply text of the ipsum printing...</p>
                                        </div>
                                    </div>

                                </div>


                                <div className="swiper-slide blog-side-image">

                                    <div
                                        className="blog-box d-sm-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div className="blog-image w-50 xs-w-100 cover-background"
                                             style={{backgroundImage: "url('images/demo-charity-home-bg-02.jpg')"}}>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="blog-post-image-overlay"></a>
                                        </div>
                                        <div
                                            className="blog-content w-50 xs-w-100 pt-50px pb-40px ps-40px pe-40px xl-p-20px md-p-20px bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="demo-charity-stories.html"
                                                className="btn btn-very-small btn-rounded btn-gradient-green-goldenrod-yellow ls-0px mb-65px xs-mb-40px">Health</a>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="card-title text-dark-gray text-dark-gray-hover fw-500 mb-10px fs-19 md-fs-18 alt-font ws-minus-3px">Protect
                                                families from heavy disasters.</a>
                                            <p>Lorem ipsum simply text of the ipsum printing...</p>
                                        </div>
                                    </div>

                                </div>


                                <div className="swiper-slide blog-side-image">

                                    <div
                                        className="blog-box d-sm-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div className="blog-image w-50 xs-w-100 cover-background"
                                           style={{backgroundImage: "url('images/demo-charity-home-bg-03.jpg')"}}>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="blog-post-image-overlay"></a>
                                        </div>
                                        <div
                                            className="blog-content w-50 xs-w-100 pt-50px pb-40px ps-40px pe-40px xl-p-20px md-p-20px bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="demo-charity-stories.html"
                                                className="btn btn-very-small btn-rounded btn-gradient-green-goldenrod-yellow ls-0px mb-65px xs-mb-40px">Environment</a>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="card-title text-dark-gray text-dark-gray-hover fw-500 mb-10px fs-19 md-fs-18 alt-font ws-minus-3px">This
                                                world day against child labour.</a>
                                            <p>Lorem ipsum simply text of the ipsum printing...</p>
                                        </div>
                                    </div>

                                </div>


                                <div className="swiper-slide blog-side-image">

                                    <div
                                        className="blog-box d-sm-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div className="blog-image w-50 xs-w-100 cover-background"
                                             style={{backgroundImage: "url('images/demo-charity-home-bg-04.jpg')"}}>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="blog-post-image-overlay"></a>
                                        </div>
                                        <div
                                            className="blog-content w-50 xs-w-100 pt-50px pb-40px ps-40px pe-40px xl-p-20px md-p-20px bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="demo-charity-stories.html"
                                                className="btn btn-very-small btn-rounded btn-gradient-green-goldenrod-yellow ls-0px mb-65px xs-mb-40px">Education</a>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="card-title text-dark-gray text-dark-gray-hover fw-500 mb-10px fs-19 md-fs-18 alt-font ws-minus-3px">Help
                                                children's survive of COVID-19.</a>
                                            <p>Lorem ipsum simply text of the ipsum printing...</p>
                                        </div>
                                    </div>

                                </div>


                                <div className="swiper-slide blog-side-image">

                                    <div
                                        className="blog-box d-sm-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div className="blog-image w-50 xs-w-100 cover-background"
                                            style={{backgroundImage: "url('images/demo-charity-home-bg-01.jpg')"}}>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="blog-post-image-overlay"></a>
                                        </div>
                                        <div
                                            className="blog-content w-50 xs-w-100 pt-50px pb-40px ps-40px pe-40px xl-p-20px md-p-20px bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="demo-charity-stories.html"
                                                className="btn btn-very-small btn-rounded btn-gradient-green-goldenrod-yellow ls-0px mb-65px xs-mb-40px">Education</a>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="card-title text-dark-gray text-dark-gray-hover fw-500 mb-10px fs-19 md-fs-18 alt-font ws-minus-3px">We
                                                providing urgent aid after cyclone.</a>
                                            <p>Lorem ipsum simply text of the ipsum printing...</p>
                                        </div>
                                    </div>

                                </div>


                                <div className="swiper-slide blog-side-image">

                                    <div
                                        className="blog-box d-sm-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div className="blog-image w-50 xs-w-100 cover-background"
                                             style={{backgroundImage: "url('images/demo-charity-home-bg-02.jpg')"}}>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="blog-post-image-overlay"></a>
                                        </div>
                                        <div
                                            className="blog-content w-50 xs-w-100 pt-50px pb-40px ps-40px pe-40px xl-p-20px md-p-20px bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="demo-charity-stories.html"
                                                className="btn btn-very-small btn-rounded btn-gradient-green-goldenrod-yellow ls-0px mb-65px xs-mb-40px">Health</a>
                                            <a href="demo-charity-blog-single-simple.html"
                                                className="card-title text-dark-gray text-dark-gray-hover fw-500 mb-10px fs-19 md-fs-18 alt-font ws-minus-3px">Protect
                                                families from heavy disasters.</a>
                                            <p>Lorem ipsum simply text of the ipsum printing...</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  );
}
