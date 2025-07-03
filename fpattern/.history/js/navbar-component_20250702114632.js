// navbar-component.js

document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.createElement("div");
  navContainer.className = "fpattern-menu-frame";

  navContainer.innerHTML = `
    <!-- frame clone -->
    <div class="fpattern-frame-top">
      <a href="index.html" class="fpattern-logo icon-logo"></a>
      <div class="fpattern-menu-btn">
        <span></span>
      </div>
    </div>
    <!-- frame clone end -->
    <div class="container">
      <div class="fpattern-menu-content">
        <div class="row">
          <div class="col-xl-5">
            <nav class="fpattern-main-menu" id="swupMenu">
              <ul>
                <li class="fpattern-has-children fpattern-active">
                  <a href="#">Homepage</a>
                  <ul>
                    <li><a href="index.html">Landing page</a></li>
                    <li><a href="index-2.html">Personal</a></li>
                    <li><a href="portfolio-3.html">Portfolio slider</a></li>
                  </ul>
                </li>
                <li class="fpattern-has-children">
                  <a href="#">Portfolio</a>
                  <ul>
                    <li><a href="portfolio-1.html">Grid type 1</a></li>
                    <li><a href="portfolio-2.html">Grid type 2</a></li>
                    <li><a href="portfolio-3.html">Slider</a></li>
                  </ul>
                </li>
                <li class="fpattern-has-children">
                  <a href="#">Services</a>
                  <ul>
                    <li><a href="services.html">Services List</a></li>
                    <li><a href="service.html">Single service</a></li>
                  </ul>
                </li>
                <li class="fpattern-has-children">
                  <a href="#">Newsletter</a>
                  <ul>
                    <li><a href="blog.html">Blog List</a></li>
                    <li><a href="publication.html">Publication</a></li>
                  </ul>
                </li>
                <li class="fpattern-has-children">
                  <a href="#">Other pages</a>
                  <ul>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-xl-7">
            <div class="fpattern-menu-right-frame">
              <div class="fpattern-animation-in">
                <div class="fpattern-animation-frame">
                  <div class="fpattern-animation fpattern-position-1 fpattern-scale" data-value-1="2" data-value-2="2"></div>
                </div>
              </div>
              <div class="fpattern-menu-right">
                <div class="row">
                  <div class="col-lg-7 fpattern-mb-60">
                    <h6 class="fpattern-muted fpattern-mb-30">Projects</h6>
                    <ul class="fpattern-menu-list">
                      <li><a href="project-1.html" class="fpattern-light-soft">Interior design studio</a></li>
                      <li><a href="project-2.html" class="fpattern-light-soft">Home Security Camera</a></li>
                      <li><a href="project-3.html" class="fpattern-light-soft">Kemia Honest Skincare</a></li>
                      <li><a href="project-4.html" class="fpattern-light-soft">Cascade of Lava</a></li>
                      <li><a href="project-5.html" class="fpattern-light-soft">Air Pro by Molekule</a></li>
                      <li><a href="project-6.html" class="fpattern-light-soft">Tony's Chocolonely</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-5 fpattern-mb-60">
                    <h6 class="fpattern-muted fpattern-mb-30">Useful links</h6>
                    <ul class="fpattern-menu-list">
                      <li><a href="privacy.html" class="fpattern-light-soft">Privacy Policy</a></li>
                      <li><a href="terms.html" class="fpattern-light-soft">Terms and Conditions</a></li>
                      <li><a href="cookies.html" class="fpattern-light-soft">Cookie Policy</a></li>
                      <li><a href="careers.html" class="fpattern-light-soft">Careers</a></li>
                    </ul>
                  </div>
                </div>
                <div class="fpattern-divider fpattern-mb-60"></div>
                <div class="row justify-content-between">
                  <div class="col-lg-5 fpattern-mb-60">
                    <h6 class="fpattern-muted fpattern-mb-30">India</h6>
                    <p class="fpattern-light-soft fpattern-up">Pune, Maharashtra
                      <span class="fpattern-no-wrap">
                        <i class="fa fa-fw fa-phone fa-rotate-90" aria-hidden="true"></i>
                        <a href="tel:+918975511181">+91 897 5511 181</a>
                      </span>
                    </p>
                  </div>
                  <div class="col-lg-5 fpattern-mb-60">
                    <h6 class="fpattern-muted fpattern-mb-30">Netherlands</h6>
                    <p class="fpattern-light-soft">Uithoorn, Noord Holland
                      <span class="fpattern-no-wrap">
                        <i class="fa fa-fw fa-phone fa-rotate-90" aria-hidden="true"></i>
                        <a href="tel:+31622074483">+31 622 074 483</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertBefore(navContainer, document.body.firstChild);
});
