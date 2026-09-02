$(document).ready(function () {
  $("title").text("Refleksi PPG | Ibnu Ahmad Fauzi | Portofolio Web Page");
  $(".ppg-prajabatan-nav").addClass("active");

  $(".btn-refleksi-ppg").click(function () {
    modalRefleksiPPG(
      "https://drive.google.com/file/d/11qsYFpdFKbGru65gfS651vkbt1aJEpBq/preview",
      "Refleksi PPG",
    );
  });

  function modalRefleksiPPG(url, name) {
    $("#refleksiPPGModalLabel").text(name);
    $("#refleksiPPGModalIframe").attr("src", url);
    $("#refleksiPPGModal").modal("show");
  }
});
