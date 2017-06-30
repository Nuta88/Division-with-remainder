function getResultDivisionWithRemainder(dividend, divider) {
	var strDividend = String(dividend);
	var strQuotient = "";
	var remainder  = "";
	var newDividend = 0;
	for (var i = 0; i < strDividend.length; i++) {
		if (strDividend.length < String(divider).length) {
			return "0[" + String(dividend) + "]";
		}
		newDividend = Number(remainder  + Number(strDividend[i]));
		var privet = Math.floor((newDividend / divider));
		strQuotient += String(privet);
		remainder  = String(newDividend - (privet * divider));
		if (strDividend.length >= String(divider).length && strQuotient === "0") {
			strQuotient = "";
		}
	}
	return strQuotient + "[" + remainder  + "]";
}

function testingdivisonWithRemainder() {
	var inputDivider = 128;
	var inputDividend = 15;
	var expected = "0[15]";
	var actual = getResultDivisionWithRemainder(inputDividend, inputDivider);
	if (actual === expected) {
		document.write("function is working good" + " " + actual);
	} else {
		document.write("function is working bad" + " " + actual);
	}
}

testingdivisonWithRemainder()