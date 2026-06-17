$(document).ready(function () {
  $("title").text("Blog | Ibnu Ahmad Fauzi | Portofolio Web Page");
  $(".blog-nav").addClass("active");

  $(".btn-search").on("click", function (e) {
    e.preventDefault();
    let keywordSearch = $(".input-search").val().trim();

    if (keywordSearch !== "") {
      window.location.href =
        "/blog.html?keyword=" + encodeURIComponent(keywordSearch);
    } else {
      window.location.href = "/blog.html";
    }
  });

  const params = new URLSearchParams(window.location.search);

  const slug = params.get("slug");
  const keyword = params.get("keyword");
  const tag = params.get("tag");

  // =====================================
  // HALAMAN LIST BLOG
  // =====================================
  if (slug == null) {
    $(".blog-detail").hide();

    let filteredBlogs = [...dataBlog].sort((a, b) => b.id - a.id);

    // Filter berdasarkan keyword
    if (keyword) {
      filteredBlogs = filteredBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(keyword.toLowerCase()),
      );

      $(".page-title-blog-list span").text(`Hasil Pencarian: "${keyword}"`);
    }

    // Filter berdasarkan tag
    if (tag) {
      filteredBlogs = filteredBlogs.filter((blog) =>
        blog.tag.some((item) => item.toLowerCase() === tag.toLowerCase()),
      );

      $(".page-title-blog-list span").text(`Artikel dengan Tag: "${tag}"`);
    }

    const itemsPerPage = 6;
    let currentPage = 1;

    function renderBlog(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      const blogs = filteredBlogs.slice(start, end);

      // Tidak ada data
      if (blogs.length === 0) {
        let message = "Tidak ditemukan artikel.";

        if (keyword) {
          message = `Tidak ditemukan artikel dengan kata kunci "${keyword}".`;
        }

        if (tag) {
          message = `Tidak ditemukan artikel dengan tag "${tag}".`;
        }

        $(".blog-list-container").html(`
          <div class="col-12">
            <div class="alert alert-warning">
              ${message}
            </div>
          </div>
        `);

        $(".blog-pagination-wrapper").html("");
        return;
      }

      let htmlDataBlog = "";

      blogs.forEach((blog) => {
        const tags = blog.tag
          .map(
            (tagItem) => `
              <a
                href="blog.html?tag=${encodeURIComponent(tagItem)}"
                class="badge bg-primary text-decoration-none me-1"
              >
                ${tagItem}
              </a>
            `,
          )
          .join("");

        htmlDataBlog += `
          <div class="col-lg-6 mb-4">
            <a href="blog.html?slug=${blog.slug}" class="text-decoration-none text-dark">
              <div class="card h-100">
                <img
                  src="/images/blog/${blog.thumbnail}"
                  class="card-img-top"
                  alt="${blog.title}"
                />
                <div class="card-body">
                  <div class="mb-2">
                    ${tags}
                  </div>

                  <h5 class="card-title">
                    ${blog.title}
                  </h5>

                  <p class="card-text">
                    ${blog.excerpt}
                  </p>
                </div>
              </div>
            </a>
          </div>
        `;
      });

      $(".blog-list-container").html(htmlDataBlog);
    }

    function renderPagination() {
      const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

      if (totalPages <= 1) {
        $(".blog-pagination-wrapper").html("");
        return;
      }

      let html = "";

      for (let i = 1; i <= totalPages; i++) {
        html += `
          <button
            class="blog-page-btn ${i === currentPage ? "active" : ""}"
            data-page="${i}"
          >
            ${i}
          </button>
        `;
      }

      $(".blog-pagination-wrapper").html(html);
    }

    $(document).on("click", ".blog-page-btn", function () {
      currentPage = parseInt($(this).data("page"));

      renderBlog(currentPage);
      renderPagination();

      $("html, body").animate(
        {
          scrollTop: $("#blog-list").offset().top - 100,
        },
        300,
      );
    });

    // Form pencarian
    $(document).on("submit", "#search-blog-form", function (e) {
      e.preventDefault();

      const keywordValue = $("#search-keyword").val().trim();

      if (keywordValue.length > 0) {
        window.location.href =
          "blog.html?keyword=" + encodeURIComponent(keywordValue);
      }
    });

    renderBlog(currentPage);
    renderPagination();
  }

  // =====================================
  // HALAMAN DETAIL BLOG
  // =====================================
  else {
    $(".page-title-blog-list").hide();
    $(".blog-list").hide();

    const blog = dataBlog.find((item) => item.slug === slug);

    if (!blog) {
      $("#blog-detail-title").text("Artikel Tidak Ditemukan");

      $("#blog-detail-body").html(`
        <div class="alert alert-danger">
          Artikel yang Anda cari tidak ditemukan.
        </div>
      `);

      return;
    }

    $("#blog-detail-title").text(blog.title);

    $("#blog-detail-thumbnail").attr("src", `/images/blog/${blog.thumbnail}`);

    $("#blog-detail-date").html(
      `<i class="fa-regular fa-calendar"></i> ${blog.updated_at}`,
    );

    $("#blog-detail-body").html(blog.body);

    const tags = blog.tag
      .map(
        (tagItem) => `
          <a
            href="blog.html?tag=${encodeURIComponent(tagItem)}"
            class="badge bg-primary text-decoration-none me-1"
          >
            ${tagItem}
          </a>
        `,
      )
      .join("");

    $("#blog-detail-tags").html(tags);
  }

  // SideBar Elemen
  // Postingan Terbaru
  const latestBlogs = [...dataBlog].sort((a, b) => b.id - a.id).slice(0, 5);
  let htmlPostinganTerbaru = ``;
  latestBlogs.forEach((blog) => {
    htmlPostinganTerbaru += `
                  <div class="d-flex mb-3">
                    <img
                      src="/images/blog/${blog.thumbnail}"
                      width="80"
                      class="rounded"
                    />
                    <div class="ms-3">
                      <a href="/blog.html?slug=${blog.slug}" class="text-decoration-none text-dark">
                        ${blog.title}
                      </a>
                      <small class="d-block text-muted">${blog.updated_at}</small>
                    </div>
                  </div>
    `;
  });
  $(".box-postingan-populer").html(htmlPostinganTerbaru);

  // Tag
  let htmlTagSidebar = ``;
  dataTagBlog.forEach((tag) => {
    htmlTagSidebar += `
                  <a
                    href="/blog.html?tag=${tag}"
                    class="badge bg-primary text-decoration-none mb-2"
                  >
                    ${tag}
                  </a>
    `;
  });
  $(".box-tag-sidebar").html(htmlTagSidebar);
});
