

function validate1() {
	var isValid = true;
	isValid = isNumLet(document.forms["validationForm"]["firstName"].value);
	var image1 = getImage(isValid, "firstName");
	document.getElementById("firstNameParagraph").appendChild(image1);

	isValid = isNumLet(document.forms["validationForm"]["lastName"].value);
	var image2 = getImage(isValid, "lastName");
	document.getElementById("lastNameParagraph").appendChild(image2);

	isValid = isSelected(document.forms["validationForm"]["gender"].value);
	var image3 = getImage(isValid, "gender");
	document.getElementById("genderParagraph").appendChild(image3);

	isValid = isSelected(document.forms["validationForm"]["state"].value);
	var image4 = getImage(isValid, "state");
	document.getElementById("stateParagraph").appendChild(image4);
	return isValid;
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


function isNumLet(entry) { // Returns true if entry contains only numbers and/or letters
	let regExp = /^[a-z0-9]+$/i;
	return (entry != null && entry.match(regExp));
}

function isSelected(entry) { // Ensures the user has selcted an option from the dropdown menu
	if (entry == "") {
		isValid = false;
		return false;
	} else {
		return true;
	}
}