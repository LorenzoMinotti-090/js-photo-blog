axios.get("https://lanciweb.github.io/demo/api/pictures/")
  .then(function(resp){
    const dataArray = resp.data;
    const container = document.querySelector(".board");
    let contentString = "";

    dataArray.forEach(function(elem){

      let imgSrc = elem.url ? elem.url : "/img/placeholder.png";
      let title = elem.title ? elem.title : "";

      contentString +=
        '<div class="col-12 col-sm-6 col-md-4">' +
          '<div class="card pin-card position-relative appear">' +
            '<img src="/img/pin.svg" class="pin-img" alt="puntina">' +
            '<img src="' + imgSrc + '" class="card-img-top" alt="">' +
            '<div class="card-body">' +
              '<p class="card-text pin-caption">' + title + '</p>' +
            '</div>' +
          '</div>' +
        '</div>';
    });

    container.insertAdjacentHTML("beforeend", contentString);
    
  })