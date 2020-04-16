let photos = [{
    photo: './img/eggs.jpeg',
    pTitle: 'Tojások',
    pDescription: 'Tojáshélyakon járok; ezt már az elején tudtam, hogy nem lesz könnyű...'
}, {
    photo: './img/hard_work.jpeg',
    pTitle: 'Az út a cél',
    pDescription: 'Kemény munkával sikerüt a kitűzött célt megközelíteni. Sokat tanultam!'
}, {
    photo: './img/moon.jpeg',
    pTitle: 'Erőforrás',
    pDescription: 'Telihold előtt mindig feltöltődöm energiával, olyan vagyok olyankor mint egy lelőhetetlen bagoly'
}];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', photos[photoNumber].photo);
    $('#pTitle').text(photos[photoNumber].pTitle);
    $('#pDescription').text(photos[photoNumber].pDescription);
  }

  loadPhoto(currentPhoto);

  $('#rightButton').click(() => {
    currentPhoto++;
    if (currentPhoto > 2) {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
  })

  $('#leftButton').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
        currentPhoto = 2;
    }
    loadPhoto(currentPhoto);
  })

  $('#firstThumbnail').click(() => {
    loadPhoto(0);
    currentPhoto = 0;
  })

  $('#secondThumbnail').click(() => {
    loadPhoto(1);
    currentPhoto = 1;
  })

  $('#thirdThumbnail').click(() => {
    loadPhoto(2);
    currentPhoto = 2;
  })


/*let data = ["first", "second", "third"];

data.forEach((item, index) => {
  $('#container').append(`<div class="box" data-index="${index}">${item} (data-index="${index}")</div>`);
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(data[indexClicked]);
  });
});*/