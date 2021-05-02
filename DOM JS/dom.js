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
// Part 2 parent and siblings

var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4";

// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement is the same 
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor="#f4f4f4";

// //child nodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello !";// similarly lastElementChild

// siblings
// console.log(itemList.nextSibling);// gives the text node
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="green";


// create elenments

// craete a div

var newDiv=document.createElement('div');
//add a class
newDiv.className='hello';

// add a id
newDiv.id="hello1";

// add attribute
newDiv.setAttribute('title','Hello Div');


//create a text node

var newDivText=document.createTextNode('Hello World!');

newDiv.appendChild(newDivText);



//insert into DOM

var container=document.querySelector("header .container");
var h1=document.querySelector('header h1');


console.log(newDiv);

newDiv.style.fontSize="30px";
container.insertBefore(newDiv, h1);

