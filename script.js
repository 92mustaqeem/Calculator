function val(a) {
	document.getElementById("result").value += a
}

function clr(){
	document.getElementById("result").value = ""
}

function sol() {
	var data = document.getElementById("result").value;
	var result = eval(data);
	document.getElementById("result").value = result;
}

function clrE(){
	var dlt = document.getElementById("result").value;
	document.getElementById("result").value = dlt.slice(0, -1);
	}
