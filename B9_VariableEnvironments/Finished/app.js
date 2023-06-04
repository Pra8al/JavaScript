function b() {
	var myVar;
    console.log(myVar);
}

function a() {
	var myVar = 2;
    console.log(myVar);
	b();
}

var myVar = 1;  
console.log(myVar);
a();
console.log(myVar);


/* 
1. Memory Space is assigned.
first to fn b then fn a then myVar = undefined.
2. Checks for execution parts
Came to line 12 and sets myVar = 1 
Came to line 13 output 1
Called a new execution context and called a in it
	the below lines are for a context now
	myVar = 2, output 2 
	Called a new execution context and called b in it
		the below lines are for a context now
		myVar = undefined, output undefined 
	Pops out execution context b
	Pops out execution context a
Came back to global execution context and here myVar=1
output 1


*/