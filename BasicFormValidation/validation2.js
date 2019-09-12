function validate2() {
	var image1 = getImage(checkEmail(document.forms["contactInformation"]["email"].value), "email");
	document.getElementById("emailParagraph").appendChild(image1);
	
	var image2 = getImage(checkPhoneNumber(document.forms["contactInformation"]["phoneNumber"].value), "phoneNumber");
	document.getElementById("phoneNumberParagraph").appendChild(image2);

	var image3 = getImage(checkAddress(document.forms["contactInformation"]["address"].value), "address");
	document.getElementById("addressParagraph").appendChild(image3);
}

function getImage(bool, ID) {
	var image = document.getElementById("image" + ID);
	if (image == null) {

		image = new Image(15, 15);
		image.id = "image" + ID;
	}

	image.src = bool ? './res/correct.png' : './res/wrong.png';

	return image;
}

function checkEmail(entry) {
	atSplit = entry.split('@');
	if (atSplit.length == 2 && isNumLet(atSplit[0])) {

		periodSplit = atSplit[1].split(".");
		if (periodSplit.length == 2 && isNumLet(periodSplit[0] + periodSplit[1])) {

			return true;

		}
		return false;
	}
}

function checkPhoneNumber(entry) {
	let regExp = /(\d{3}\d{3}\d{4}|\d{3}\055\d{3}\055\d{4})/;
	return (entry != null && entry.match(regExp));
}

function checkAddress(entry) {
	commaSplit = entry.split(",");
	return (commaSplit.length == 2 && isNumLet(commaSplit[0]) && commaSplit[1].match(/[A-Z]{2}/));
}

function isNumLet(entry) { // Returns true if entry contains only numbers and/or letters
	let regExp = /^[a-z0-9]+$/i;
	return (entry != null && entry.match(regExp));
}