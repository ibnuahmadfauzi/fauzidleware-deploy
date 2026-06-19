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
});
