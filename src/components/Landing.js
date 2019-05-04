import React from 'react';

const Landing = () => (
  <section className="landing">

    <div id="wrapper">

      <header>
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="span6">
                <ul className="topmenu">
                  <li><a href="#">Home</a> &#47;</li>
                  <li><a href="#">Terms</a> &#47;</li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="span6">

                <ul className="social-network">
                  <li><a href="#" data-placement="bottom" title="Facebook"><i className="icon-circled icon-bglight icon-facebook"></i></a></li>
                  <li><a href="#" data-placement="bottom" title="Twitter"><i className="icon-circled icon-bglight icon-twitter"></i></a></li>
                  <li><a href="#" data-placement="bottom" title="Linkedin"><i className="icon-circled icon-linkedin icon-bglight"></i></a></li>
                  <li><a href="#" data-placement="bottom" title="Pinterest"><i className="icon-circled icon-pinterest  icon-bglight"></i></a></li>
                  <li><a href="#" data-placement="bottom" title="Google +"><i className="icon-circled icon-google-plus icon-bglight"></i></a></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <div className="container">


          <div className="row nomargin">
            <div className="span4">
              <div className="logo">
                <h1><a href="index.html"><i className="icon-tint"></i> The Crop Doctor</a></h1>
              </div>
            </div>
            <div className="span8">
              <div className="navbar navbar-static-top">
                <div className="navigation">
                  <nav>
                    <ul className="nav topnav">
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Features <i className="icon-angle-down"></i></a>
                        <ul className="dropdown-menu">
                          <li><a href="typography.html">Typography</a></li>
                          <li><a href="components.html">Components</a></li>
                          <li><a href="icons.html">Icons</a></li>
                          <li><a href="icon-variations.html">Icon variations</a></li>

                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Pages <i className="icon-angle-down"></i></a>
                        <ul className="dropdown-menu">
                          <li><a href="about.html">About us</a></li>
                          <li><a href="pricingbox.html">Pricing boxes</a></li>
                          <li><a href="404.html">404</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Portfolio <i className="icon-angle-down"></i></a>
                        <ul className="dropdown-menu">
                          <li><a href="portfolio-2cols.html">Portfolio 2 columns</a></li>
                          <li><a href="portfolio-3cols.html">Portfolio 3 columns</a></li>
                          <li><a href="portfolio-4cols.html">Portfolio 4 columns</a></li>
                          <li><a href="portfolio-detail.html">Portfolio detail</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog <i className="icon-angle-down"></i></a>
                        <ul className="dropdown-menu">
                          <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                          <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                          <li><a href="post-left-sidebar.html">Post left sidebar</a></li>
                          <li><a href="post-right-sidebar.html">Post right sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact </a>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>


      <section id="intro">
        <div className="intro-container">
          <div id="introCarousel" className="carousel slide carousel-fade" data-ride="carousel">

            <div className="carousel-inner" role="listbox">


              <div className="item active">
                <div className="carousel-background"><img src="../assets/img/farm.jpg" alt=""/></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animated fadeInDown">The Crop Doctor</h2>
                    <p className="animated fadeInUp"> Specializing in <strong>cannabis</strong> pest prevention and control</p>
                    <a href="#about" className="btn-get-started animated fadeInUp">Read More</a>
                  </div>
                </div>
              </div>


              <div className="item">
                  <div className="carousel-background"><img src="../assets/img/farm2.jpg" alt=""/></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animated fadeInDown">Creativity and technology</h2>
                    <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" className="btn-get-started animated fadeInUp">Read More</a>
                  </div>
                </div>
              </div>


              <div className="item">
                  <div className="carousel-background"><img src="../assets/img/farm3.jpg" alt=""/></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animated fadeInDown">Sequi ea ut et est quaerat</h2>
                    <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" className="btn-get-started animated fadeInUp">Read More</a>
                  </div>
                </div>
              </div>

            </div>

            <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon fa fa-angle-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon fa fa-angle-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>

          </div>
        </div>
      </section>

      <section id="content">
        <div className="container">


          <div className="row">
            <div className="span12">
              <div className="row">
                <div className="span3">
                  <div className="box aligncenter">
                    <div className="icon">
                      <span className="badge badge-info badge-circled">1</span>
                      <i className="ico icon-dropbox icon-5x"></i>
                    </div>
                    <div className="text">
                      <h4><strong>Out of the box</strong></h4>
                      <p>
                        Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am anumat lib persum sea facilisis.
                      </p>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>

                <div className="span3">
                  <div className="box aligncenter">
                    <div className="icon">
                      <span className="badge badge-success badge-circled">2</span>
                      <i className="ico icon-bitbucket icon-5x"></i>
                    </div>
                    <div className="text">
                      <h4><strong>New taste</strong></h4>
                      <p>
                        Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                      </p>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="span3">
                  <div className="box aligncenter">
                    <div className="icon">
                      <span className="badge badge-warning badge-circled">3</span>
                      <i className="ico icon-rocket icon-5x"></i>
                    </div>
                    <div className="text">
                      <h4><strong>Faster load</strong></h4>
                      <p>
                        Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                      </p>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="span3">
                  <div className="box aligncenter">
                    <div className="icon">
                      <span className="badge badge-important badge-circled">4</span>
                      <i className="ico icon-cut icon-5x"></i>
                    </div>
                    <div className="text">
                      <h4><strong>Cut your times</strong></h4>
                      <p>
                        Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                      </p>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="span12">
              <div className="cta-box">
                <div className="row">
                  <div className="span8">
                    <div className="cta-text">
                      <h2>Special price in very <span>limited</span> times</h2>
                    </div>
                  </div>
                  <div className="span4">
                    <div className="cta-btn">
                      <a href="#" className="btn btn-color">Call Action <i className="icon-caret-right"></i></a>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="offer">
        <div className="container">
          <div className="row">
            <div className="span12">
              <div className="row">
                <div className="span12">
                  <div className="aligncenter">
                    <h3>Our features and pricing</h3>
                    <blockquote>
                      Lorem ipsum dolor sit amet, labores dolorum scriptorem eum an, te quodsi sanctus neglegentur eam, et lorem persecuti conclusionemque mei.
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="row">

                <div className="span3">
                  <h5>Choose package and start grow</h5>
                  <p>
                    Per an putent audiam adolescens, mel ceteros fierent democritum te. No ubique malorum euismod usu.
                  </p>
                  <p>
                    Movet facilis democritum ea quo. Est ei illum consulatu accommodare, nam dicta expetenda suavitate ad.
                  </p>
                </div>

                <div className="span3">
                  <div className="pricing-box-plain">
                    <div className="heading">
                      <h4>Standard</h4>
                      <span>$9 / Month</span>
                    </div>
                    <div className="desc">
                      <ul>
                        <li>For 1 Application</li>
                        <li>Free one year support</li>
                        <li>Unlimited disk spaces</li>
                      </ul>
                    </div>
                    <div className="action">
                      <a href="#" className="btn btn-inverse">Sign Up</a>
                    </div>
                  </div>
                </div>

                <div className="span3">
                  <div className="pricing-box-plain">
                    <div className="heading">
                      <h4>Medium</h4>
                      <span>$29 / Month</span>
                    </div>
                    <div className="desc">
                      <ul>
                        <li>For 10 Applications</li>
                        <li>Free life time support</li>
                        <li>Unlimited disk spaces</li>
                      </ul>
                    </div>
                    <div className="action">
                      <a href="#" className="btn btn-inverse">Sign Up</a>
                    </div>
                  </div>
                </div>

                <div className="span3">
                  <div className="pricing-box-plain">
                    <div className="heading">
                      <h4>Elite</h4>
                      <span>$59 / Month</span>
                    </div>
                    <div className="desc">
                      <ul>
                        <li>For unlimited appliacations</li>
                        <li>Free life time support</li>
                        <li>Unlimited disk spaces</li>
                      </ul>
                    </div>
                    <div className="action">
                      <a href="#" className="btn btn-color">Sign Up</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="works">
        <div className="container">
          <div className="row">
            <div className="span12">
              <h3>Recent works</h3>
              <div className="row">

                <div className="grid cs-style-3">
                  <div className="span3">
                    <div className="item">
                      <figure>
                        <div><img src="../assets/img/dummies/works/1.jpg" alt=""/></div>
                        <figcaption>
                          <h3>Portfolio name</h3>
                          <p>
                            <a href="../assets/img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="span3">
                    <div className="item">
                      <figure>
                        <div><img src="../assets/img/dummies/works/2.jpg" alt=""/></div>
                        <figcaption>
                          <h3>Portfolio name</h3>
                          <p>
                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="span3">
                    <div className="item">
                      <figure>
                        <div><img src="../assets/img/dummies/works/3.jpg" alt=""/></div>
                        <figcaption>
                          <h3>Portfolio name</h3>
                          <p>
                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="span3">
                    <div className="item">
                      <figure>
                        <div><img src="../img/dummies/works/4.jpg" alt=""/></div>
                        <figcaption>
                          <h3>Portfolio name</h3>
                          <p>
                            <a href="img/dummies/works/big.png" data-pretty="prettyPhoto[gallery1]" title="Portfolio caption here"><i className="icon-zoom-in icon-circled icon-bglight icon-2x active"></i></a>
                            <a href="#"><i className="icon-file icon-circled icon-bglight icon-2x active"></i></a>
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="span4">
              <div className="widget">
                <div className="footer_logo">
                  <h3><a href="index.html"><i className="icon-tint"></i> Remember</a></h3>
                </div>
                <address>
  							  <strong>Remember company Inc.</strong>
    							Somestreet KW 101, Park Village W.01
    							Jakarta 13426 Indonesia
    						</address>
                <p>
                  <i className="icon-phone"></i> (123) 456-7890 - (123) 555-7891
                  <i className="icon-envelope-alt"></i> email@domainname.com
                </p>
              </div>
            </div>
            <div className="span4">
              <div className="widget">
                <h5 className="widgetheading">Browse pages</h5>
                <ul className="link-list">
                  <li><a href="#">Our company</a></li>
                  <li><a href="#">Terms and conditions</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Press release</a></li>
                  <li><a href="#">What we have done</a></li>
                  <li><a href="#">Our support forum</a></li>
                </ul>

              </div>
            </div>
            <div className="span4">
              <div className="widget">
                <h5 className="widgetheading">From flickr</h5>
                <div className="flickr_badge">
                  <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"></script>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="sub-footer">
          <div className="container">
            <div className="row">
              <div className="span6">
                <div className="copyright">
                  <p><span>&copy; Remember Inc. All right reserved</span></p>
                </div>

              </div>

              <div className="span6">

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <a href="#" className="scrollup"><i className="icon-angle-up icon-rounded icon-bglight icon-2x"></i></a>
  </section>

);

export default Landing;
