$(document).ready(function () {
  $("title").text("Penilaian Siklus | Ibnu Ahmad Fauzi | Portofolio Web Page");
  $(".ppg-prajabatan-nav").addClass("active");

  $(".btn-lampiran7-siklus1").click(function () {
    modalPenilaianGuruPamong(
      "https://drive.google.com/file/d/1Ml5rCnSmxu3HqjGX5giqlULIHG5ciegQ/preview",
      "Lampiran 7 - Penilaian Perangkat Pembelajaran - Siklus 1",
    );
  });
  $(".btn-lampiran8-siklus1").click(function () {
    modalPenilaianGuruPamong(
      "https://drive.google.com/file/d/1DWnIP3QOuROHgF6E1TYZU5AcAiKNMqQC/preview",
      "Lampiran 8 - Penilaian Praktik Mengajar - Siklus 1",
    );
  });

  $(".btn-lampiran7-siklus2").click(function () {
    modalPenilaianGuruPamong(
      "https://drive.google.com/file/d/1IKDFXrfhyIq_3owz5GFtl9kfrAlGWwJ4/preview",
      "Lampiran 7 - Penilaian Perangkat Pembelajaran - Siklus 2",
    );
  });
  $(".btn-lampiran8-siklus2").click(function () {
    modalPenilaianGuruPamong(
      "https://drive.google.com/file/d/12bKOzN5hWAMzh-67f2vUAiXRjptCvnaK/preview",
      "Lampiran 8 - Penilaian Praktik Mengajar - Siklus 2",
    );
  });

  $(".btn-lampiran7-siklus3").click(function () {
    modalPenilaianGuruPamong(
      "https://drive.google.com/file/d/1y_0XZIq-v0zrAREBesp2UpCjrZ802pSJ/preview",
      "Lampiran 7 - Penilaian Perangkat Pembelajaran - Siklus 3",
    );
  });
  $(".btn-lampiran8-siklus3").click(function () {
    modalPenilaianGuruPamong(
      "https://drive.google.com/file/d/1XsRZCT1YUU-AgVYoL8v1StV_ByN6y3Ag/preview",
      "Lampiran 8 - Penilaian Praktik Mengajar - Siklus 3",
    );
  });

  function modalPenilaianGuruPamong(url, name) {
    $("#modalPenilaianGuruPamongLabel").text(name);
    $("#modalPenilaianGuruPamongIframe").attr("src", url);
    $("#modalPenilaianGuruPamong").modal("show");
  }
});
