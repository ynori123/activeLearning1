function submit(answer) {
	document.getElementById("result").innerHTML = answer == "B" ? "<p>正解</p>" : "<p>不正解</p>";
	document.getElementById("explain").hidden = false;
}