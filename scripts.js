let photos = [{
    photo: './img/eggs.jpeg',
    pTitle: 'Tojások',
    pDescription: 'Tojáshélyakon járok, ezt már az elején tudtam, hogy nem lesz könnyű...'
}, {
    photo: './img/hard_work.jpeg',
    pTitle: 'Az út a cél',
    pDescription: 'Kemény munkával sikerüt a kitűzött célt megközelíteni. Sokat tanultam!'
}, {
    photo: './img/moon.jpeg',
    pTitle: 'Erőforrás',
    pDescription: 'Telihold előtt mindig feltöltődöm energiával, olyan vagyok olyankor mint egy lelőhetetlen bagoly'
}];

let currentPhoto = 2;

$('#photo').attr('src', photos[currentPhoto].photo);
$('#pTitle').text(photos[currentPhoto].pTitle);
$('#pDescription').text(photos[currentPhoto].pDescription);
