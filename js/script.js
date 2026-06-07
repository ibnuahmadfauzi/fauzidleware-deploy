$(document).ready(function () {
  // Set the HTML content of the <nav> element to the navbar structure
  let navbarHtml = `
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light" href="/">HOME</a>
            </li>
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light" href="profil.html"
                >PROFIL MAHASISWA</a
              >
            </li>
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light" href="artefak.html">ARTEFAK</a>
            </li>
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light" href="lampiran.html">LAMPIRAN</a>
            </li>
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light" href="dokumentasi.html"
                >DOKUMENTASI</a
              >
            </li>
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light" href="blog.html">BLOG</a>
            </li>
          </ul>
        </div>
      </div>
    `;
  $("nav").addClass("navbar navbar-expand-lg bg-primary");
  $("nav").html(navbarHtml);

  let footerHtml = `
      <p>
        &copy; 2026 Ibnu Ahmad Fauzi. <br />
        Portfolio PPG Prajabatan PPLG.
      </p>
  `;
  $("footer").html(footerHtml);
});
