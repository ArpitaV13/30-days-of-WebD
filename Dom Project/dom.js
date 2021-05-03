
//------------------ Summary of Dom----------------//


var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');


filter.addEventListener('keyup',filterItems);


//form submit event
form.addEventListener('submit',addItem);
// delete item 

itemList.addEventListener('click',removeItem);
function addItem(e){
	e.preventDefault();
	//get input value



	var newItem=document.getElementById('item').value;

	// create new li element
	var li=document.createElement('li');
	li.className="list-group-item";


	// add text nod ewith input value
	li.appendChild(document.createTextNode(newItem));


	//delete button element
	var deleteBtn=document.createElement('button');
	deleteBtn.className="btn btn-danger btn-sm float-right delete";
	//append the text
	deleteBtn.appendChild(document.createTextNode('X'));

	// append li to list
	li.appendChild(deleteBtn);

	itemList.appendChild(li);
}
function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm("Are you sure?")){
			var li=e.target.parentElement;
			itemList.removeChild(li);
		}
	}


}

function filterItems(e){
	// convert into lowercase
	var text=e.target.value.toLowerCase();
	//get the li
	var items=itemList.getElementsByTagName('li');

	Array.from(items).forEach(function(item){
		var itemName=item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text)!=-1){
			item.style.display='block';

}
else{
	item.style.display='none';
	}
});

}
 

