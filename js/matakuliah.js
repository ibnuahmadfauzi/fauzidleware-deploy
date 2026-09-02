$(document).ready(function () {
  $("title").text("Mata Kuliah | Ibnu Ahmad Fauzi | Portofolio Web Page");
  $(".ppg-prajabatan-nav").addClass("active");

  let matrikulasiHTML = ``;
  praPPG.forEach((matakuliah) => {
    matrikulasiHTML += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${matakuliah.title}</h5>
          <p class="card-text">
            ${matakuliah.description}
          </p>
          <a href="${matakuliah.link}" target="_blank" class="btn btn-sm btn-primary">Lembar Kerja</a>
        </div>
      </div>
    `;
  });
  $("#matakuliah-matrikulasi").html(matrikulasiHTML);

  function modalDokumenRefleksiMatkul(url, name) {
    $("#refleksiMatkulModalLabel").text(name);
    $("#refleksiMatkulModalIframe").attr("src", url);
    $("#refleksiMatkulModal").modal("show");
  }

  let semester1HTML = ``;
  smt1PPG.forEach((matakuliah) => {
    semester1HTML += `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${matakuliah.title}</h5>
          <p class="card-text">
            ${matakuliah.description}
          </p>
          <a href="${matakuliah.link}" target="_blank" class="btn btn-sm btn-primary">Lembar Kerja</a>
        </div>
      </div>
    `;
  });
  $("#matakuliah-semester1").html(semester1HTML);

  $(".btn-refleksi-matkul-smt1").click(function () {
    modalDokumenRefleksiMatkul(
      "https://drive.google.com/file/d/1DkFw5TSuKqmhErT3RD-LF3Fe_KBYM6Ov/preview",
      "Refleksi Mata Kuliah SMT 1",
    );
  });

  let semester2HTML = ``;
  smt2PPG.forEach((matakuliah) => {
    semester2HTML += `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${matakuliah.title}</h5>
          <p class="card-text">
            ${matakuliah.description}
          </p>
          <a href="${matakuliah.link}" target="_blank" class="btn btn-sm btn-primary">Lembar Kerja</a>
        </div>
      </div>
    `;
  });
  $("#matakuliah-semester2").html(semester2HTML);

  $(".btn-refleksi-matkul-smt2").click(function () {
    modalDokumenRefleksiMatkul(
      "https://drive.google.com/file/d/1iwe6hzYeucBKtUkaCbLc7iG0J1Y-KAUE/preview",
      "Refleksi Mata Kuliah SMT 2",
    );
  });
});
