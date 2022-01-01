function allMenu() {
    $.getJSON('data.json', function(data) {
        let menu = data.menu;

        $.each(menu, function(i, data) {

            let max_char = 150;
            if (data.deskripsi.length > max_char) {
                deskripsi = data.deskripsi.substring(0, max_char) + '...';
            } else {
                deskripsi = data.deskripsi;
            }

            $('#list_menu').append(`<div class="col-md-3 d-flex">
          <div class="card mb-5 " style="min-height:max-content; width:100%">
          <div class="card-header">${data.jenis}</div>
          <img src="gambar/${data.gambar}" style="object-fit:contain; height:170px !important; align:center">
          <div class="card-body">
          <h5 class="card-title">${data.nama}</h5>
          <p class="card-text">${deskripsi}</p><br>
          <p class="card-text">Rp.${data.harga}</p>
          </div>
          <div class="card-footer">
          <small class="text-muted my-2" style="float:right">${data.estimasi}</small>
          <a href="#" class="btn btn-primary" style="background-color:#1E90FF;">Pesan Sekarang</a>
          </div>
          </div>
          </div>`);
        });
    });
}

allMenu();

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let jenis = $(this).html();
    $('h1').html(jenis);
    if (jenis == 'Restaurant UP') {
        $('#list_menu').empty();
        allMenu();
        return;
    }

    $.getJSON('data.json', function(data) {
        let menu = data.menu;
        let content = '';
        $.each(menu, function(i, data) {
            if (data.jenis == jenis) {
                content += `<div class="col-md-3 d-flex">
                  <div class="card mb-5 " style="min-height:max-content; width:100%">
                  <div class="card-header">${data.jenis}</div>
                  <img src="gambar/${data.gambar}" style="object-fit:contain; height:170px !important; align:center">
                  <div class="card-body">
                  <h5 class="card-title">${data.nama}</h5>
                  <p class="card-text">${data.deskripsi}</p><br>
                  <p class="card-text">Rp.${data.harga}</p>
                  </div>
                  <div class="card-footer">
                  <small class="text-muted my-2" style="float:right">${data.estimasi}</small>
                  <a href="#" class="btn btn-primary" style="background-color:#1E90FF;">Pesan Sekarang</a>
                  </div>
                  </div>
                  </div>`;
            }
        });
        $('#list_menu').html(content);
    });

});