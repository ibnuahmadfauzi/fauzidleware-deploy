$(document).ready(function () {
  $("title").text("Analisis Artefak | Ibnu Ahmad Fauzi | Portofolio Web Page");
  $(".ppg-prajabatan-nav").addClass("active");

  $(".btn-asesmen-siklus-1").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1h4oGWqmUPOh4zGsxpKnmhE1V32B8l7EO/preview",
      "Asesmen Siklus 1",
    );
  });
  $(".btn-rpp-siklus-1").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1TPQhVaLp1GNpoUSx52-LreCbRXZIfReD/preview",
      "RPP Siklus 1",
    );
  });
  $(".btn-bahanajar-siklus-1").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1quOB3zIkkHcNHPdBXTL-yPmkWDydfthB/preview",
      "Bahan Ajar Siklus 1",
    );
  });
  $(".btn-lkpd-siklus-1").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1pMG57lrk82oaDWenry9peYGHbP71lfsm/preview",
      "LKPD Siklus 1",
    );
  });

  $(".btn-asesmen-siklus-2").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1e89vXey19Ys4jIq8eRzTbGf0ZFHwY54Q/preview",
      "Asesmen Siklus 2",
    );
  });
  $(".btn-rpp-siklus-2").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1ZnyfUjMpe5kugz-0uvvKjWkzPRsNJXDc/preview",
      "RPP Siklus 2",
    );
  });
  $(".btn-bahanajar-siklus-2").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/15_0iKMmH2ZnF9cQf8CVhMHDMxtxMKKY9/preview",
      "Bahan Ajar Siklus 2",
    );
  });
  $(".btn-lkpd-siklus-2").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1T4b4CeHa8bxAKhBITw7T48cDaGQJSKXx/preview",
      "LKPD Siklus 2",
    );
  });

  $(".btn-asesmen-siklus-3").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1hxKTQ13wFha7BrOn_L6CAstpJZccUHDC/preview",
      "Asesmen Siklus 3",
    );
  });
  $(".btn-rpp-siklus-3").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1RU0EuSZnn2CEY3vSpmRaiXs75nUfyQhD/preview",
      "RPP Siklus 3",
    );
  });
  $(".btn-bahanajar-siklus-3").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1Ce15ZmVB5_F5znwXCE8yQwJLUkLrgRKV/preview",
      "Bahan Ajar Siklus 3",
    );
  });
  $(".btn-lkpd-siklus-3").click(function () {
    modalDokumenArtefak(
      "https://drive.google.com/file/d/1RwQn4Q6qjTyovk2k-jC_T8EbrpOxn_QL/preview",
      "LKPD Siklus 3",
    );
  });

  function modalDokumenArtefak(url, name) {
    $("#artefakModalLabel").text(name);
    $("#artefakModalIframe").attr("src", url);
    $("#artefakModal").modal("show");
  }
});
