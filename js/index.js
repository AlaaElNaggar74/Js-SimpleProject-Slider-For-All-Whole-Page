/* 

let sondivimg=document.querySelectorAll(".comp img");
let sondivimgwithclaas=document.getElementsByClassName("imgitem");



let arrOFImag=[];
let anthorarraimg=Array.from(sondivimg);


for(let i=0;i<sondivimg.length;i++){
	
	arrOFImag[i]=sondivimg[i];
	
}

for(let i=0;i<sondivimg.length;i++){
	
	arrOFImag.push(sondivimg[i]);
	
}

console.log(sondivimg);
console.log(sondivimgwithclaas);

console.log(arrOFImag);
console.log(anthorarraimg);


 */
 
 
 
 
 
 
 
 
 
 
 

let sondivimg=document.querySelectorAll(".comp img");
let maindiplapic=document.getElementById("fuscrediv");
let sonpic=document.getElementById("sonpic");
let arrOFImag=[];

let prev=document.getElementById("prev");
let nexxx=document.getElementById("nexxx");
let closs=document.getElementById("closs");



let index=0;



for(let i=0;i<sondivimg.length;i++){
	
	arrOFImag[i]=sondivimg[i];
	arrOFImag[i].addEventListener("click",function(e){
		maindiplapic.style.cssText="display:flex";
		sonpic.style.backgroundImage=`url(${sondivimg[i].src})`;
		console.log(`the index of div that clicked on is ${i}`);
		index=i;
		console.log(e)
		
		/* for(let c=1;c<sondivimg.length;c++){
			
		
		
	
		
		} */
		
	});
	
	
}


function prevmouseaction(){
	
	
	if(index===0){
		index=sondivimg.length;
		sonpic.style.backgroundImage=`url(${sondivimg[index-1].src})`;
		index--;
	}else{
		sonpic.style.backgroundImage=`url(${sondivimg[index-1].src})`;
		index--;
	}
}


function nexxmouseaction(){
	
		
	if(index===sondivimg.length-1){
		index=-1;
		sonpic.style.backgroundImage=`url(${sondivimg[index+1].src})`;
		index++;
	}else{
		sonpic.style.backgroundImage=`url(${sondivimg[index+1].src})`;
		index++;
	}
}




function colsee(){
	
		maindiplapic.style.cssText="display:none";
	
}





closs.addEventListener("click",colsee);
nexxx.addEventListener("click",nexxmouseaction);
prev.addEventListener("click",prevmouseaction);


document.body.addEventListener("keydown",function(e){
	
	if(e.keyCode==39){
		nexxmouseaction();
	}else if(e.keyCode==37){
		prevmouseaction();
		
	}else if(e.keyCode==27){
		colsee();
	}
})


















/* 

let sondiv=document.getElementsByClassName("comp");
let sondivimg=document.querySelectorAll(".comp img");
let fullscrediv=document.getElementById("fuscrediv");


let sonscrediv=document.getElementById("sonpic");
let sonscredivimg=document.querySelector(".fuulsmalcont img");


let prev=document.getElementById("prev");
let closs=document.getElementById("closs");
let nexxx=document.getElementById("nexxx");

console.log(sonscredivimg);





for(let i=0;i<sondiv.length;i++){
	
	
	sondiv[i].addEventListener("click",function(e){
	
	fullscrediv.style.cssText="display:flex;";
	
	sonscrediv.style.backgroundImage=`url(${sondivimg[i].src})`;
	
	
	console.log(`the index of div that clicked on is ${i}`);
	console.log(e)
	
	
	
	closs.addEventListener("click",function(){
		fullscrediv.style.cssText="display:none;";
		
	});
	
	fullscrediv.addEventListener("click",function(){
		fullscrediv.style.cssText="display:none;";
		
	});
	
	
	
	
});


} */