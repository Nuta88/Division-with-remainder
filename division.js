function getResultDivisionWithRemainder(dividend, divider) {
	var arrNumDividend = getArrNumbersDividendFromArrStr(String(dividend));
	var strQuotient = "";
	var remainder = "";
	var newDividend = 0;
	for (var i = 0; i < arrNumDividend.length; i++) {
		newDividend = Number(remainder + arrNumDividend[i]);
		var numQuotient = Math.floor((newDividend / divider));
		strQuotient += String(numQuotient);
		remainder = String(newDividend - (numQuotient * divider));
		if (arrNumDividend.length >= String(divider).length && strQuotient=== "0") {
			strQuotient= "";
		}
	}
	return strQuotient+ "[" + remainder + "]";
}

function getArrNumbersDividendFromArrStr(arrStr) {
	arrNum = [];
	for (var i = 0; i < arrStr.length; i++) {
		arrNum[i] = Number(arrStr[i]);
	}
	return arrNum;
}

function testingdivisonWithRemainder() {
	var inputDivider = 12;
	var inputDividend = 213;
	var expected = "17[9]";
	var actual = getResultDivisionWithRemainder(inputDividend, inputDivider);
	if (actual == expected) {
		document.write("function is working good" + " " + actual);
	} else {
		document.write("function is working bad" + " " + actual);
	}
}
testingdivisonWithRemainder()