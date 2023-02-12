let isCorrect = true;
window.onload=function() {
	const count = document.getElementById("count");
	setInterval(function() {
		count.innerHTML = String(Number(count.innerHTML) - 1);
	}, 1000)
}
window.onunload = function(event) {
	window.opener.location.href = `../${isCorrect ? "correct" : "wrong"}/`;
};
function wrong() {
	isCorrect = false;
	window.close();
}