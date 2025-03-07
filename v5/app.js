// Declare the toggle variable before calling changeBackground
let toggle = true; // Variable to toggle between two colors

// Select The Button Object
let button = document.querySelector("#button");
console.log(button);
changeBackground();

// Add the event listener method to it, on click would call a function that changes background
button.addEventListener("click", changeBackground);

function changeBackground() {
    console.log("Button clicked");
    // Define two colors
    let color1 = { r: 0, g: 204, b: 102 }; // Green
    let color2 = { r: 235, g: 51, b: 36 }; // Red
	let text1 = "Free"
	let text2 = "Occupied"
	

    // Choose color based on toggle
    let color = toggle ? color1 : color2;
	let text = toggle ? text1 : text2;
    toggle = !toggle; // Toggle the value

    // Change background color
    document.body.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

    // Change page's text color white or black
    document.body.style.color = textColor(color.r, color.g, color.b);
    button.style.color = textColor(color.r, color.g, color.b);
	document.getElementById("button").textContent=text;
}

function textColor(r, g, b) {
    // luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return 0.2126 * r + 0.7152 * g + 0.0722 * b > 128 ? 'black' : 'white';
}
