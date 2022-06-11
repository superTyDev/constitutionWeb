function responsiveNav() {
	var x = document.getElementById("myTopnav");
	x.classList.toggle("responsive");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	clearTimeout(window.changeSlide);
	window.changeSlide = setTimeout(() => {
		plusSlides(1);
	}, 5000);
}

changeSlide = setTimeout(() => {
	plusSlides(1);
}, 5000);

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove("active");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.classList.add("active");
}

// Shuffle Quotes
var items = document.querySelectorAll(".item");
document.getElementById("hexcontainer").innerHTML = "";
Array.from(items)
	.sort(function () {
		return Math.random() - 0.5;
	})
	.forEach((elem) => {
		document.getElementById("hexcontainer").append(elem);
	});
document.querySelectorAll(".item").forEach((elem, key, parent) => {
	document.querySelectorAll(".item")[key].style.animationDelay =
		String((key + 1) / 8) + "s";
	document.querySelectorAll(".item")[key].addEventListener("click", imageModal);
});

// Modal on click
function imageModal(evt) {
	console.log("this is big");
	evt.currentTarget.parentElement.classList.add("active");
	evt.currentTarget.classList.add("active");
	document.getElementById("fa-xmark").style.display = "block";
}
function closeImageModal(evt, target) {
	console.log(target);
	document.getElementById(target).classList.remove("active");
	Array.from(document.getElementById(target).childNodes).forEach(
		(elem, index) => {
			document
				.getElementById(target)
				.childNodes[index].classList.remove("active");
		}
	);
	document.getElementById("fa-xmark").style.display = "none";
}

var building = document.getElementById("buildingPath");
var length = building.getTotalLength();
building.style.strokeDasharray = length;
building.style.strokeDashoffset = length;

window.addEventListener("scroll", drawOnScroll);

function drawOnScroll() {
	var clientRect = document
		.getElementById("svgBuilding")
		.getBoundingClientRect();
	var scrollpercent = Math.min(
		Math.max(
			0,
			(document.documentElement.clientHeight - clientRect.top) /
				(clientRect.height + document.documentElement.clientHeight - 400)
		),
		1
	);
	var draw = length * scrollpercent;

	// Reverse the drawing (when scrolling upwards)
	building.style.strokeDashoffset = length - draw;
}
