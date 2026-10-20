$(document).ready(function () {
  // 1. Tangkap parameter URL
  const urlParams = new URLSearchParams(window.location.search);
  const slugParam = urlParams.get("slug");
  const searchParam = urlParams.get("search");

  // =========================================================
  // GLOBAL: FITUR PENCARIAN BERBASIS URL (Berlaku di Semua Halaman)
  // =========================================================
  $(".search-form").on("submit", function (e) {
    e.preventDefault();
    const keyword = $(".search-input").val().trim();

    // Arahkan (redirect) ke halaman tulisan.html dengan parameter search
    if (keyword) {
      window.location.href =
        "tulisan.html?search=" + encodeURIComponent(keyword);
    } else {
      window.location.href = "tulisan.html"; // Reset jika input kosong
    }
  });

  // =========================================================
  // KONDISI A: TAMPILKAN DETAIL ARTIKEL (Jika ada parameter slug)
  // =========================================================
  if (slugParam) {
    $("#blog-list-container").hide();
    $("#blog-detail-container").show();

    const articleData = dataTulisan.find((item) => item.slug === slugParam);

    if (articleData) {
      $("#detail-title").text(articleData.title);
      $("#detail-author").text("👤 " + articleData.author);
      $("#detail-date").text("📅 " + articleData.createdAt);
      $("#detail-category").text(articleData.category);
      $("#detail-thumbnail").attr("src", articleData.thumbnail);
      $("#detail-content").html(articleData.content);

      let catClass = "cat-opini";
      if (articleData.category === "Refleksi PPL") catClass = "cat-refleksi";
      if (
        articleData.category === "Teknologi Web" ||
        articleData.category === "Tutorial" ||
        articleData.category === "Tech"
      )
        catClass = "cat-tech";
      $("#detail-category")
        .removeClass("cat-opini cat-refleksi cat-tech")
        .addClass(catClass);
    } else {
      $("#detail-title").text("⚠️ Artikel Tidak Ditemukan");
      $("#detail-category").hide();
      $("#detail-content").html(
        `<h4 class="text-center py-5">Maaf, tulisan yang Anda cari mungkin sudah dihapus atau tautannya salah.</h4>`,
      );
    }

    // =========================================================
    // KONDISI B: TAMPILKAN DAFTAR ARTIKEL (Default atau Pencarian)
    // =========================================================
  } else {
    $("#blog-list-container").show();
    $("#blog-detail-container").hide();

    let filteredData = [...dataTulisan];

    // Jika ada parameter pencarian di URL, lakukan penyaringan (filter)
    if (searchParam) {
      const keyword = searchParam.toLowerCase();

      // Isi kembali form pencarian agar pengguna tahu kata kunci apa yang sedang aktif
      $(".search-input").val(searchParam);

      filteredData = dataTulisan.filter((blog) => {
        return (
          blog.title.toLowerCase().includes(keyword) ||
          blog.category.toLowerCase().includes(keyword) ||
          blog.content.toLowerCase().includes(keyword)
        );
      });
    }

    // --- URUTKAN DARI ID TERBESAR (TERBARU DI ATAS) ---
    filteredData.sort((a, b) => b.id - a.id);

    // --- STATE MANAGEMENT PAGINATION ---
    let currentPage = 1;
    const itemsPerPage = 6;
    let totalPages = Math.ceil(filteredData.length / itemsPerPage);

    function renderArticles(page) {
      if (filteredData.length === 0) {
        $("#blog-list").html(`
          <div class="col-12 text-center py-5 bg-white brutal-border brutal-shadow mt-4">
            <h1 style="font-size: 4rem;">🔍</h1>
            <h3 class="fw-bold mt-3">Tidak ada artikel yang ditemukan.</h3>
            <p>Pencarian untuk kata kunci "<strong>${searchParam}</strong>" tidak membuahkan hasil.</p>
            <a href="tulisan.html" class="btn-read mt-3 d-inline-block p-2">Tampilkan Semua Artikel</a>
          </div>
        `);
        return;
      }

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      let blogListHTML = paginatedData
        .map((blog) => {
          let catClass = "cat-opini";
          if (blog.category === "Refleksi PPL") catClass = "cat-refleksi";
          if (
            blog.category === "Teknologi Web" ||
            blog.category === "Tutorial" ||
            blog.category === "Tech"
          )
            catClass = "cat-tech";

          let rawText = blog.content.replace(/<[^>]+>/g, "");
          let excerpt = rawText.substring(0, 100) + "...";

          return `
          <div class="col-md-6">
              <article class="blog-card">
                  <img src="${blog.thumbnail}" alt="Thumbnail ${blog.title}" class="blog-thumbnail" />
                  <div class="blog-content">
                      <span class="blog-category ${catClass}">${blog.category}</span>
                      <h2 class="blog-title">
                          <a href="tulisan.html?slug=${blog.slug}">${blog.title}</a>
                      </h2>
                      <p class="blog-excerpt">${excerpt}</p>
                      <div class="blog-meta">
                          <span>📅 ${blog.createdAt}</span>
                          <a href="tulisan.html?slug=${blog.slug}" class="btn-read">Baca &rarr;</a>
                      </div>
                  </div>
              </article>
          </div>
        `;
        })
        .join("");

      $("#blog-list").html(blogListHTML);
    }

    function renderPagination(page) {
      if (filteredData.length === 0 || totalPages <= 1) {
        $("#pagination-list").empty();
        return;
      }

      let paginationHTML = "";

      if (page > 1) {
        paginationHTML += `<li><a href="#" data-page="${page - 1}">&laquo;</a></li>`;
      } else {
        paginationHTML += `<li><span class="text-muted" style="background: #f8f9fa; cursor: not-allowed;">&laquo;</span></li>`;
      }

      for (let i = 1; i <= totalPages; i++) {
        if (i === page) {
          paginationHTML += `<li class="active"><span>${i}</span></li>`;
        } else {
          paginationHTML += `<li><a href="#" data-page="${i}">${i}</a></li>`;
        }
      }

      if (page < totalPages) {
        paginationHTML += `<li><a href="#" data-page="${page + 1}">&raquo;</a></li>`;
      } else {
        paginationHTML += `<li><span class="text-muted" style="background: #f8f9fa; cursor: not-allowed;">&raquo;</span></li>`;
      }

      $("#pagination-list").html(paginationHTML);
    }

    renderArticles(currentPage);
    renderPagination(currentPage);

    $(document).on("click", "#pagination-list a", function (e) {
      e.preventDefault();
      currentPage = parseInt($(this).data("page"));
      renderArticles(currentPage);
      renderPagination(currentPage);
      $("html, body").animate(
        { scrollTop: $("#blog-list").offset().top - 100 },
        400,
      );
    });
  }
});
