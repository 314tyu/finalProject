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

/*$('#photo').attr('src', photos[currentPhoto].photo);
$('#pTitle').text(photos[currentPhoto].pTitle);
$('#pDescription').text(photos[currentPhoto].pDescription);*/

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