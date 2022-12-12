var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);



// Add item
function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById('item').value;
    // desc
    let newDesc = document.getElementById('description').value ;

  
    
    
    
    
    //create new li
    let li = document.createElement('li');
    li.className = "list-group-item"
    console.log(li);
    
    //add node to input
    
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDesc));

    //create delete element

    let deletebtn = document.createElement('button');

    //add class to delete

    deletebtn.className = "btn btn-danger btn-sm float-right delete";

    //append text node

    deletebtn.appendChild(document.createTextNode('X'));


    li.appendChild(deletebtn);



    itemList.appendChild(li);
    //adding edit button

    let editbtn = document.createElement('button');
    editbtn.className = 'btn btn-warning btn-sm float-right edit';


    editbtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editbtn);

    itemList.append(li);




}
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//adding filter

// Filter event
filter.addEventListener('keyup', filterItems);



function filterItems(e) {

    let text = e.target.value.toLowerCase();
    //get li 
    let items = itemList.getElementsByTagName('li');
    //   console.log(items);

    //   convert to array 

    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        let description =item.childNodes[1].textContent ;

        if (itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.Style.display = 'block';
        } else {   
            item.style.display = 'none';
        }

    });

}





