// jQuery for simple interactions
$(document).ready(function () {
  // set facivon in all page
  let faviconElement = `<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`;
  $("head").append(faviconElement);

  // Create navbar elements dynamically
  $(".navbar").html(
    `
    <div class="container">
        <a class="navbar-brand" href="/">FAUZIDLEWARE.</a>
        <button
          class="navbar-toggler brutal-border"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Beranda</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                PPG Prajabatan 2026
              </a>
              <ul
                class="dropdown-menu brutal-shadow"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="/profil-mahasiswa.html"
                    >Profil Mahasiswa</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/artefak.html"
                    >Analisis Artefak</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/penilaian-siklus.html"
                    >Penilaian Siklus</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/matakuliah.html"
                    >Mata Kuliah</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/pembelajaran-mendalam.html"
                    >Pembelajaran Mendalam</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/karya-inovasi.html"
                    >Karya Inovasi</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/projek-kepemimpinan.html"
                    >Projek Kepemimpinan</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/refleksi-ppg.html"
                    >Refleksi PPG</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dokumentasi.html">Dokumentasi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tulisan.html">Tulisan</a>
            </li>
          </ul>
        </div>
      </div>
        `,
  );

  // Create footer elements dynamically
  $(".footer").html(
    `
      <div class="container">
        <h2 class="mb-3">FAUZIDLEWARE.</h2>
        <p class="mb-0">
          Dibuat dengan semangat belajar mendalam &copy; 2026 Ibnu Ahmad Fauzi
        </p>
      </div>
    `,
  );

  // Smooth scrolling for anchor links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        },
      );
    }
  });
});
