var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
// filter.addEventListener('keyup', filterItems);

// Add item
    function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById('item').value;

    //create new li

    let li = document.createElement('li');

    li.className = "list-group-item"

    console.log(li);

    //add node to input

    li.appendChild(document.createTextNode(newItem));

    //create delete element

    let deletebtn = document.createElement('button');

    //add class to delete

    deletebtn.className = "btn btn-danger btn-sm float-right delete" ;

    //append text node

    deletebtn.appendChild(document.createTextNode('X'));


    li.appendChild(deletebtn);



    itemList.appendChild(li);
    //adding edit button

let editbtn = document.createElement('button');
editbtn.className = 'btn btn-warning btn-sm float-right edit' ;


editbtn.appendChild(document.createTextNode('Edit'));

li.appendChild(editbtn);

itemList.append(li);




}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if (confirm('Are you sure')) {
            let li = e.target.parentElement ;
            itemList.removeChild(li);          
        }
    }
}

