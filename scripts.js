let photos = [{
  id: 1,
  photo: './img/eggs.jpeg',
  pTitle: 'Tojások',
  pDescription: 'Tojáshéjakon járok; ezt már az elején tudtam, hogy nem lesz könnyű...'
}, {
  id: 2,
  photo: './img/hard_work.jpeg',
  pTitle: 'Az út a cél',
  pDescription: 'Kemény munkával sikerült a kitűzött célt megközelíteni. Sokat tanultam!'
}, 
{
  id: 3,
  photo: './img/moon.jpeg',
  pTitle: 'Erőforrás',
  pDescription: 'Telihold előtt mindig feltöltődöm energiával, olyan vagyok olyankor mint egy lelőhetetlen bagoly'
},
{
  id: 4,
  photo: './img/enter_the_new_world.jpeg',
  pTitle: 'ÚjVilág',
  pDescription: 'Aztaaaaaaa'
},
];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', photos[photoNumber].photo);
  $('#pTitle').text(photos[photoNumber].pTitle);
  $('#pDescription').text(photos[photoNumber].pDescription);
  /*if (photoNumber === 0) {
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
  }*/
}

photos.forEach((item, index) => {
  $('.thumbnails').append(`<div class="thumbnail" photos-index="${index}">${item.id} (data-index="${index}") ${item.photo}</div>`);
  $('.thumbnail').css('background-image','url('+item.photo+')');
  console.log(index);
  console.log(item.id);
  console.log(item.photo);
  // $('.thumbnail').click((event) => {
  //   let indexClicked = $(event.target).attr('photos-index');
  // });
});


loadPhoto(currentPhoto);

$('#rightButton').click(() => {
  currentPhoto++;
  if (currentPhoto > photos.length-1) {
    currentPhoto = 0;
  }
  loadPhoto(currentPhoto);

})

$('#leftButton').click(() => {
  currentPhoto--;
  if (currentPhoto < 0) {
    currentPhoto = photos.length-1;
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