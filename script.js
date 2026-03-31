function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if((s1.length || s2.length) ===0) return -1;
	let string1 = s1.toLowerCase();
	let string2 = s2.toLowerCase();
	return string1.indexOf(string2);
	
}

// Please do not change the code below

const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
