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
              <a class="nav-link text-light home-nav" href="/">HOME</a>
            </li>
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light profil-nav" href="profil.html"
                >PROFIL MAHASISWA</a
              >
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-light ppg-prajabatan-nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PPG Prajabatan 2026
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="artefak.html">Analisis Artefak</a></li>
                <li><a class="dropdown-item" href="penilaian-siklus.html">Penilaian Siklus</a></li>
                <li><a class="dropdown-item" href="model-guru.html">Model Guru</a></li>
                <li><a class="dropdown-item" href="refleksi-ppl.html">Refleksi PPL</a></li>
                <li><a class="dropdown-item" href="filosofi-mengajar.html">Filosofi Mengajar</a></li>
              </ul>
            </li>
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light dokumentasi-nav" href="dokumentasi.html"
                >DOKUMENTASI</a
              >
            </li>
            <li class="nav-item me-2 ms-2">
              <a class="nav-link text-light blog-nav" href="blog.html">BLOG</a>
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
