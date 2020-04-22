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
  if (photoNumber === 0) {
    $('#firstThumbnail').css('box-shadow', '0px 10px 10px 0px rgb(49, 49, 49)');
    $('#firstThumbnail::after').css('display','none');
    $('#secondThumbnail').css('box-shadow', 'none');
    $('#thirdThumbnail').css('box-shadow', 'none');
  } else if (photoNumber === 1) {
    $('#secondThumbnail').css('box-shadow', '0px 10px 10px 0px rgb(49, 49, 49)');
    $('#firstThumbnail').css('box-shadow', 'none');
    $('#thirdThumbnail').css('box-shadow', 'none');
    $('.active').toggleClass('.special');
  } else if (photoNumber === 2) {
    $('#thirdThumbnail').css('box-shadow', '0px 10px 10px 0px rgb(49, 49, 49)');
    $('#firstThumbnail').css('box-shadow', 'none');
    $('#secondThumbnail').css('box-shadow', 'none');
  }
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