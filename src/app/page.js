
export default function Home() {
  return (
    
<body class="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">

  {/* <!-- ======= Header ======= --> */}
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        <img src="assets/img/Logo Fake No Name.png" alt="Logo Refresh"/>
        <h1>REFRESH</h1>
        <span>.</span>
      </a>

      {/* <!-- Nav Menu --> */}
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.html#hero" class="active">Inicio</a></li>
          <li><a href="index.html#about">Sobre Nosotros</a></li>
          <li><a href="index.html#services">Servicios</a></li>
          <li><a href="index.html#contact">Contactos</a></li>
          <li><a href="blog.html">Blogs</a></li>
        </ul>

        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      {/* <!-- End Nav Menu --> */}
    </div>
  </header>
  {/* <!-- End Header --> */}

  <main id="main">

    {/* <!-- Banner Section - Home Page --> */}
    <section id="hero" class="hero">

      <img src="assets/img/banner.jpg" alt="" data-aos="fade-in"/>

      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">Siente la diferencia</h2>
            <p data-aos="fade-up" data-aos-delay="200">renuévate por dentro y por fuera</p>
          </div>
        </div>
      </div>

    </section>
    {/* <!-- End Banner Section --> */}

    {/* <!-- About Section - Home Page --> */}
    <section id="about" class="about">

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-xl-center gy-5">

          <div class="col-xl-5 content">
            <h3>Sobre Nosotros</h3>
            <h2>¿A qué nos dedicamos?</h2>
            <p>En Refresh, transformamos vidas. Nuestra combinación única de asesoramiento en nutrición y tecnología avanzada ayuda a nuestros clientes a alcanzar su mejor versión. Desde perder peso hasta mejorar la piel, estamos comprometidos con tu bienestar y confianza. Únete a nosotros en este apasionante camino hacia una vida más saludable y revitalizada.</p>
            {/* <!-- <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a> --> */}
          </div>

          <div class="col-xl-7">
            <div class="row gy-4 icon-boxes">

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                  <i class="bi bi-buildings"></i>
                  <h3>Perdida de Peso</h3>
                  <p>Nuestros suplementos te brindan el impulso que necesitas para alcanzar tus objetivos de pérdida de peso de manera segura y efectiva.</p>
                </div>
              </div> 
              {/* <!-- End Icon Box --> */}

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box">
                  <i class="bi bi-clipboard-pulse"></i>
                  <h3>Piel Refrescante</h3>
                  <p>Diseñado con ingredientes naturales y tecnología de vanguardia, este increíble tratamiento te proporcionará resultados visibles desde el primer día.</p>
                </div>
              </div>
               {/* <!-- End Icon Box --> */}

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box">
                  <i class="bi bi-command"></i>
                  <h3>Una Mejor Vida</h3>
                  <p>¡Descubre el camino hacia una vida más saludable junto a nosotros! En nuestro compromiso de cuidar de ti, te ofrecemos una amplia gama de soluciones para mejorar tu bienestar físico y emocional.</p>
                </div>
              </div> 
              {/* <!-- End Icon Box --> */}
            </div>
          </div>

        </div>
      </div>

    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- Call-to-action Section - Home Page --> */}
    <section id="call-to-action" class="call-to-action">

      <img src="assets/img/calltoaction.jpg" alt=""/>

      <div class="container">
        <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-xl-10">
            <div class="text-center">
              <h3>Refresca tu vida, despierta tu potencial</h3>
            </div>
          </div>
        </div>
      </div>

    </section>
    {/* <!-- End Call-to-action Section --> */}

    {/* <!-- Services Section - Home Page --> */}
    <section id="services" class="services">

      {/* <!--  Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Servicios</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Dolor Sitema</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="300">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-bar-chart"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="400">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-binoculars"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="500">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="600">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Eiusmod Tempor</a></h4>
                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- End Services Section --> */}

    
    {/* <!-- Recent-posts Section - Home Page --> */}
    <section id="recent-posts" class="recent-posts">
      <div class="container">

        <div class="row gy-4">

          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <article>

              <div class="post-img">
                <img src="assets/img/calltoaction.jpg" alt="" class="img-fluid"/>
              </div>

              <p class="post-category">Politics</p>

              <h2 class="title">
                <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
              </h2>
            </article>
          </div>
          {/* <!-- End post list item --> */}

          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <article>

              <div class="post-img">
                <img src="assets/img/calltoaction.jpg" alt="" class="img-fluid"/>
              </div>

              <p class="post-category">Sports</p>

              <h2 class="title">
                <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>
            </article>
          </div>
          {/* <!-- End post list item --> */}

          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <article>

              <div class="post-img">
                <img src="assets/img/calltoaction.jpg" alt="" class="img-fluid"/>
              </div>

              <p class="post-category">Entertainment</p>

              <h2 class="title">
                <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
              </h2>
            </article>
          </div>
          {/* <!-- End post list item --> */}

        </div>
        {/* <!-- End recent posts list --> */}

      </div>

    </section>
    {/* <!-- End Recent-posts Section --> */}

    {/* <!-- Contact Section - Home Page --> */}
    <section id="contact" class="contact">

      {/* <!--  Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy text-center">
          <div class="col-lg">

            <div class="row gy-4">
              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="200">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="300">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="400">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="500">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00AM - 05:00PM</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

            </div>

          </div>
        </div>

      </div>

    </section>
    {/* <!-- End Contact Section --> */}

  </main>

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer" class="footer">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>REFRESH</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
          <p><strong>Email:</strong> <span>info@example.com</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>&copy; <span>Copyright</span> <strong class="px-1">REFRESH</strong> <span>All Rights Reserved</span></p>
    </div>

  </footer>
  {/* <!-- End Footer --> */}

  {/* <!-- Scroll Top Button --> */}
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  {/* <!-- Preloader --> */}
  {/* <div id="preloader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div> */}

  {/* <!-- Vendor JS Files --> */}
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  {/* <!-- Template Main JS File --> */}
  <script src="assets/js/main.js"></script>

</body>
  );
}
