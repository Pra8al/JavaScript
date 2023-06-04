function a() {
    
    function b() {
        console.log(myVar);
    }
    
	b();
}

var myVar = 1;
a();


/* 
Scope Chain Comes for Lexiographical where the code is present

Typing the execution process here : 

Number 1 Hoisting happens that is memory space is allocated to fn a and myVar
In 11th line the new execution context is created and again a new hoisting happens for fn b
Line 7th ran and again new execution context is created and the code part of the function that is console.log runs
Now here comes the JS Engine part it trying to find out myVar lexographically
    first find in b not present
    second find inside a not present
    last find in global variable where it's present
    so output would be 1


*/