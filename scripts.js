let photos = [
	{
		id: 1,
		photo: "./img/eggs.jpeg",
		pTitle: "Tojások",
		pDescription:
			"Tojáshéjakon járok; ezt már az elején tudtam, hogy nem lesz könnyű...",
	},
	{
		id: 2,
		photo: "./img/hard_work.jpeg",
		pTitle: "Az út a cél",
		pDescription:
			"Kemény munkával sikerült a kitűzött célt megközelíteni. Sokat tanultam!",
	},
	{
		id: 3,
		photo: "./img/moon.jpeg",
		pTitle: "Erőforrás",
		pDescription:
			"Telihold előtt mindig feltöltődöm energiával, olyan vagyok olyankor mint egy lelőhetetlen bagoly",
	},
	{
		id: 4,
		photo: "./img/enter_the_new_world.jpeg",
		pTitle: "ÚjVilág",
		pDescription: "Aztaaaaaaa",
	},
];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
	$("#photo").attr("src", photos[photoNumber].photo);
	$("#pTitle").text(photos[photoNumber].pTitle);
	$("#pDescription").text(photos[photoNumber].pDescription);
};

photos.forEach((item, index) => {
	$(".thumbnails").append(
		`<div class="thumbnail" photos-index="${item.id}">${item.id} (data-index="${index}") ${item.photo}</div>`
	);
	$('[photos-index="' + item.id + '"]').css(
		"background-image",
		"url(" + item.photo + ")"
	);
});

loadPhoto(currentPhoto);

$("#rightButton").click(() => {
	currentPhoto++;
	if (currentPhoto > photos.length - 1) {
		currentPhoto = 0;
	}
	loadPhoto(currentPhoto);
});

$("#leftButton").click(() => {
	currentPhoto--;
	if (currentPhoto < 0) {
		currentPhoto = photos.length - 1;
	}
	loadPhoto(currentPhoto);
});
