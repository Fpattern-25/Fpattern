document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.className = "fpattern-dark-bg";

  footer.innerHTML = `
  <div class="mi-invert-fix">
    <div class="container fpattern-p-120-60">
      <div class="row justify-content-between">
        <div class="col-md-4 col-lg-4 fpattern-mb-60">
          <div class="fpattern-muted fpattern-logo fpattern-up fpattern-mb-30">FPattern</div>
          <p class="fpattern-light-soft fpattern-up fpattern-mb-30">Subscribe our newsletter:</p>
          <form class="fpattern-subscribe-form fpattern-up" id="newsletter-form">
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit" class="fpattern-button fpattern-icon-button-sm fpattern-arrow-place"></button>
          </form>
        </div>
        <div class="col-md-7 col-lg-6">
          <div class="row justify-content-end">
            <div class="col-md-6 col-lg-7">
              <nav class="fpattern-footer-menu fpattern-mb-60">
                <ul>
                  <li class="fpattern-up fpattern-active"><a href="index.html">Home</a></li>
                  <li class="fpattern-up"><a href="portfolio-1.html">Portfolio</a></li>
                  <li class="fpattern-up"><a href="services.html">Services</a></li>
                  <li class="fpattern-up"><a href="contact.html">Contact</a></li>
                  <li class="fpattern-up"><a href="blog.html">Blog</a></li>
                </ul>
              </nav>
            </div>
            <div class="col-md-6 col-lg-5">
              <ul class="fpattern-menu-list fpattern-up fpattern-mb-60">
                <li><a href="privacy.html" class="fpattern-light-soft">Privacy Policy</a></li>
                <li><a href="terms.html" class="fpattern-light-soft">Terms and Conditions</a></li>
                <li><a href="cookies.html" class="fpattern-light-soft">Cookie Policy</a></li>
                <li><a href="careers.html" class="fpattern-light-soft">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-between flex-sm-row-reverse">
        <div class="col-md-7 col-lg-6">
          <div class="row justify-content-between">
            <div class="col-md-6 col-lg-5 fpattern-mb-60">
              <h6 class="fpattern-muted fpattern-up fpattern-mb-30">India</h6>
              <p class="fpattern-light-soft fpattern-up">
                Pune, Maharashtra
                <span class="fpattern-no-wrap">
                  <i class="fa fa-fw fa-phone fa-rotate-90" aria-hidden="true"></i>
                  <a href="tel:+918975511181" data-no-swup class="fpattern-phone-link">+91 897 5511 181</a>
                </span>
              </p>
            </div>
            <div class="col-md-6 col-lg-5 fpattern-mb-60">
              <h6 class="fpattern-muted fpattern-up fpattern-mb-30">Netherlands</h6>
              <p class="fpattern-light-soft fpattern-up">
                Uithoorn, Noord Holland
                <span class="fpattern-no-wrap">
                  <i class="fa fa-fw fa-phone fa-rotate-90" aria-hidden="true"></i>
                  <a href="tel:+31622074483" data-no-swup class="fpattern-phone-link">+31 622 074 483</a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 fpattern-mb-60">
          <div class="fpattern-vert-between">
            <div class="fpattern-mb-30">
              <ul class="fpattern-social-icons fpattern-up">
                <li><a href="#" target="_blank" class="social-icon"><i class="fab fa-behance"></i></a></li>
                <li><a href="#" target="_blank" class="social-icon"><i class="fab fa-dribbble"></i></a></li>
                <li><a href="#" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#" target="_blank" class="social-icon"><i class="fab fa-github"></i></a></li>
              </ul>
            </div>
            <p class="fpattern-light-soft fpattern-up">© Copyright 2025 - F Pattern All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.appendChild(footer);

  // Initialize EmailJS
  const emailScript = document.createElement("script");
  emailScript.type = "text/javascript";
  emailScript.src = "https://cdn.emailjs.com/dist/email.min.js";
  document.body.appendChild(emailScript);

  emailScript.onload = function () {
    emailjs.init("LhirCf3fAM6-u9sry"); // ✅ Your actual public key

    // SweetAlert2 must be already loaded in the page

    document.getElementById("newsletter-form")?.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_qs8cx7n", "template_95sj15u", this)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Subscribed!',
            text: 'You have successfully subscribed to the newsletter.',
            confirmButtonColor: '#3085d6'
          });
          this.reset();
        }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Oops! Something went wrong. ' + error.text
          });
        });
    });
  };
});
