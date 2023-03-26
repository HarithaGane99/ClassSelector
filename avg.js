function show_result() {
	let oop=document.querySelector("#oop").value;
	let sdgp=document.querySelector("#sdgp").value;
	let dbms=document.querySelector("#dbms").value;
	let ml=document.querySelector("#ml").value;
	let algo=document.querySelector("#algo").value;
	let op1=document.querySelector("#op1").value;

	let fyp=document.querySelector("#fyp").value;
	let op2=document.querySelector("#op2").value;
	let cp=document.querySelector("#cp").value;
	let cs=document.querySelector("#cs").value;
	let fm=document.querySelector("#fm").value;


	let to=parseFloat(oop)+parseFloat(ml)+parseFloat(op1)+parseFloat(sdgp)+parseFloat(algo)+parseFloat(dbms);
	let per=(to)/6;

	let to1=parseFloat(cs)+parseFloat(cp)+parseFloat(op2)+parseFloat(fm);
	let to2=parseFloat(fyp);

	let ftotal=to1+to2+to;

	let per2=(to1+(2*to2))/6;

	let favg=(per+per2*2)/3;
	console.log(favg);



	if(favg>=70){
		document.querySelector(".gra").innerHTML="First Class Honours";
	}else if(favg>=60){
		document.querySelector(".gra").innerHTML="Second Class-Upper";
	}else if(favg>=50){
		document.querySelector(".gra").innerHTML="Second Class-Lower";
	}else if(favg>=40){
		document.querySelector(".gra").innerHTML="Third Class";
	}else {
		document.querySelector(".gra").innerHTML="F";
	}

	document.querySelector(".to").innerHTML=ftotal;
	document.querySelector(".per").innerHTML=favg;

	if(favg>40){
		document.querySelector(".result h2").innerHTML="you are pass";
	}

}