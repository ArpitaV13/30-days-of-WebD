/*const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');


//select the tab content

function selectItem(e){
	removeBorder();
	removeShow();
	//add Border to the current tab
	this.classList.add('tab-border');

	//grab content items from DOM
const tabContentItem=document.querySelector('#${this.id}-content');
	tabContentItem.classList.add('show');
}
function removeBorder(){
	tabItems.forEach(item =>{item.classList.remove('tab-border')});
}

function removeShow(){
	tabContentItems.forEach(item =>{item.classList.remove('show')});
}


//listen for tab-click
tabItems.forEach(item=>{item.addEventListener('click', selectItem)});*/




const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector([id='22']);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
