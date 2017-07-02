function divide(dividend, divider) {
	var strDividend = String(dividend);
	var strQuotient = "";
	var strRemainder = "";
	var dividendPart = 0;

	for (var i = 0; i < strDividend.length; i++) {

		if (divider === 0) {
			return "[ERROR]: division by zero";
		}

		dividendPart = Number(strRemainder + strDividend[i]);
		var quotientPart = Math.floor((dividendPart / divider));
		strQuotient += quotientPart === 0 ? "" : String(quotientPart);
		strRemainder = String(dividendPart - (quotientPart * divider));
	}

	if (strQuotient.length === 0) {
		strQuotient = 0;
	}

	return strQuotient + "[" + strRemainder + "]";
}

function testingdivisonWithRemainder() {
	var inputDividend = 15;
	var inputDivider = 33;
	var expected = "0[15]";
	var actual = divide(inputDividend, inputDivider);
	
	if (actual === expected) {
		document.write("SUCCESSFUL " + actual);
	} else {
		document.write("FAULT " + actual);
	}
}

testingdivisonWithRemainder()
