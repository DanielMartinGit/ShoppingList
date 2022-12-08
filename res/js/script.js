const userItem = document.getElementById('newItem');
const submitButton = document.getElementById('submitItem');
const parentList = document.querySelector('ol');

let listItems = document.querySelectorAll('li');

const addNewItem = () =>
{
    const newItem = document.createElement('li');
    newItem.innerText = userItem.value;
    userItem.value = "";

    return newItem;
}

const removeItemFromList = (item) =>
{
    parentList.removeChild(item);
};

const addItemToList = () =>
{
    listItems = document.querySelectorAll('li');

    listItems.forEach(function(item) 
    {        
        item.onclick = function(e)
        {
            item.classList.toggle('done');   
        }
    });
}

const addItem = () =>
{
    if(userItem.value.length === 0)
        return;

    let newItem = addNewItem();

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() { removeItemFromList(newItem); }

    newItem.appendChild(deleteButton);
    parentList.appendChild(newItem);

    addItemToList();
};

const itemAddedAfterClick = () => { addItem(); }
const itemAddedAfterEnter = (event) =>
{
    if(event.code === "Enter")
    {
        addItem();
    }
}

addItemToList();

submitButton.addEventListener('click', itemAddedAfterClick);
userItem.addEventListener('keypress', itemAddedAfterEnter);