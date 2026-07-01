$(document).ready(function () {
  $("title").text(
    "Pemrograman Web | Tutorial | Ibnu Ahmad Fauzi | Portofolio Web Page",
  );
  $(".tutorial-nav").addClass("active");

  let htmlTutorialWeb = ``;

  dataTutorialWebProgramming.forEach((item, index) => {
    htmlTutorialWeb += `
          <div class="col-lg-3">
            <div class="card rounded-0 card-box-tutorial" data-id='${item.id}' style="width: 100%">
              <img
                src="/images/${item.logo}"
                class="card-img-top"
                alt="Tutorial Pemrograman Web - HTML Dasar - Ibnu Ahmad Fauzi"
              />
              <div class="card-body">
                <h5 class="card-title text-center">
                  ${item.judul} Bahasa ${item.bahasa}
                </h5>
              </div>
            </div>
          </div>
    `;
  });

  $("#container-tutorial-web").html(htmlTutorialWeb);

  $(".card-box-tutorial").on("click", function () {
    let id = this.dataset.id;
    dataTutorialWebProgramming.forEach((item, index) => {
      if (item.id == id) {
        $(".tutorial-detail-modal img").attr("src", `/images/${item.logo2}`);
        $(".tutorial-detail-modal .detail-judul").text(item.judul);
        $(".tutorial-detail-modal .detail-bahasa").text(item.bahasa);
        $(".tutorial-detail-modal .detail-penyusun").text(item.penyusun);
        $(".tutorial-detail-modal .detail-konten").text(item.jenisKonten);
        $(".tutorial-detail-modal .detail-update").text(item.update);
        $(".tutorial-detail-modal .detail-halaman").text(item.halaman);
        $(".tutorial-detail-modal .detail-deskripsi").text(item.deskripsi);
        $(".detail-link").attr("href", item.link);
      }
    });
    $("#modalDetailTutorial").modal("show");
  });
});
