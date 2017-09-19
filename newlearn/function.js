(function myFunction(){
	var a = 0;
	return (function(){return a+=1});
})


//bibao shi hanshu


function cv (){
	var a = 1;
	return function(){
	return a;
}
}


var b = cv();

b();
