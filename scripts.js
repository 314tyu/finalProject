(function () {
	$(document).ready(function () {
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

		photos.forEach((item, index) => {
			$(".thumbnails").append(
				`<div class="thumbnail" data-photo-id="${item.id}" photos-index="${item.id}"></div>`
			);
			$('[photos-index="' + item.id + '"]').css(
				"background-image",
				"url(" + item.photo + ")"
			);
		});

		let handleSpecialClass = () => {
			console.log($(".thumbnail"));

			[...$(".thumbnail")].forEach((item) => {
				if (
					photos[currentPhoto].id ===
					parseInt($(item).attr("data-photo-id"))
				) {
					item.classList.add("special");
				} else {
					item.classList.remove("special");
				}
			});
		};

		let loadPhoto = function (item) {
			$("#photo").attr({
				src: item ? item.photo : photos[currentPhoto].photo,
				"data-photo-id": item ? item.id : photos[currentPhoto].id,
			});
			$("#pTitle").text(item ? item.pTitle : photos[currentPhoto].pTitle);
			$("#pDescription").text(
				item ? item.pDescription : photos[currentPhoto].pDescription
			);
			handleSpecialClass();
		};

		$(".thumbnail").click(() => {
			// console.log($(event.target)[0].attributes);
			// console.log($(event.target).attr("data-photo-id"));

			photos.forEach((item) => {
				if (
					item.id === parseInt($(event.target).attr("data-photo-id"))
				) {
					loadPhoto(item);
					handleSpecialClass();
				}
			});

			// loadPhoto(event.target)
		});

		loadPhoto();

		let loadNextPhoto = () => {
			currentPhoto++;
			if (currentPhoto > photos.length - 1) {
				currentPhoto = 0;
			}
			loadPhoto();
		};

		let loadPreviousPhoto = () => {
			currentPhoto--;
			if (currentPhoto < 0) {
				currentPhoto = photos.length - 1;
			}
			loadPhoto();
		};

		$("#rightButton").click(() => {
			loadNextPhoto();
		});

		$("#leftButton").click(() => {
			loadPreviousPhoto();
		});
	});
})();
