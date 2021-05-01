// console.log(document.all);
// console.log(document.head);
// console.log(document.links);


//Get element by Id

var headerTitle=document.getElementById('header-title');
// headerTitle.textContent="Hello";
// headerTitle.innerText="GoodBye!";
// headerTitle.innerHTML='<h3>Hello</h3>';


var header=document.getElementById('main-header');
header.style.borderBottom="solid 3px black";


// get element by class name

// var items=document.getElementsByClassName('list-group-item');
// items[1].textContent='Hello';  
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor="yellow";
// //items.style.backgroundColor="#ccc";   this will give an error ...we will have to iterate

// for(var i=0; i<items.length;i++){
// 	items[i].style.backgroundColor="#f4f4f4";
// }


// get elements by tag name 
var li=document.getElementsByTagName('li');
// li[1].textContent='Hello';  
// li[1].style.fontWeight="bold";
// li[1].style.backgroundColor="yellow";
// //items.style.backgroundColor="#ccc";   this will give an error ...we will have to iterate

// for(var i=0; i<li.length;i++){
// 	li[i].style.backgroundColor="#f4f4f4";
// }


// get elemnets by query Selector

// var header=document.querySelector('#main-header');
// header.style.borderBottom="solid 4px #ccc";

// var input=document.querySelector('input');
// input.value="Hello World";
// var submit=document.querySelector('input[type="submit');
// submit.value="send";
// var items=document.querySelector(".list-group-item");
// items.style.color='red';


// var lastItem=document.querySelector(".list-group-item:last-child");
// lastItem.style.color="blue";

// var secondItem=document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color="coral";

var odd=document.querySelectorAll("li:nth-child(odd)");
var even=document.querySelectorAll("li:nth-child(even)");
	for(var i=0;i<odd.length;i++){
		odd[i].style.backgroundColor="#f4f4f4"
	}
	for(var i=0;i<even.length;i++){
		even[i].style.backgroundColor="#ccc"
	}

