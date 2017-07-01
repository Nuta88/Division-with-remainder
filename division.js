function getResultDivisionWithRemainder(dividend, divider) {
	var strDividend = String(dividend);
	var strQuotient = "";
	var strRemainder = "";
	var newDividend = 0;
	for (var i = 0; i < strDividend.length; i++) {
		if (divider === 0) {
			return "[ERROR]: division on zero";
		}
		if (strDividend.length < String(divider).length) {
			return "0[" + String(dividend) + "]";
		}
		newDividend = Number(strRemainder + Number(strDividend[i]));
		var privet = Math.floor((newDividend / divider));
		strQuotient += String(privet);
		strRemainder = String(newDividend - (privet * divider));
		if (strDividend.length >= String(divider).length && strQuotient === "0") {
			strQuotient = "";
		}
	}
	return strQuotient + "[" + strRemainder + "]";
}

function testingdivisonWithRemainder() {
	var inputDivider = 0;
	var inputDividend = 15;
	var expected = "0[25]";
	var actual = getResultDivisionWithRemainder(inputDividend, inputDivider);
	if (actual === expected) {
		document.write("function is working good" + " " + actual);
	} else {
		document.write("function is working bad" + " " + actual);
	}
}

testingdivisonWithRemainder()