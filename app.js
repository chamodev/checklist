const addItemButton = document.querySelector('button.add-button');
const inputItem = document.querySelector('#input-item');
const removeItemButton = document.querySelector('button.remove-button');
const card = document.querySelector('.white-card');
const list = document.querySelector('.list');
const completed = document.querySelector('.completed');

addItemButton.addEventListener('click', () => {
  let item = document.createElement('div');
  let itemCheckBox = document.createElement('div');
  let itemText = document.createElement('span');
  itemCheckBox.className = 'check-box';
  item.className = 'unchecked';
  itemText.innerHTML = inputItem.value;
  item.appendChild(itemCheckBox);
  item.appendChild(itemText);
  list.appendChild(item);
  inputItem.value = '';
});

removeItemButton.addEventListener('click', () => {
  let item = list.lastElementChild;
  //let item = document.querySelector('.unchecked:last-child');
  if(item){
    list.removeChild(item);
    inputItem.value = '';
  }
});

card.addEventListener('click', (event) =>{
  if(event.target.className == 'check-box'){
    let item = event.target.parentNode;
    if (item.className == 'checked'){
      item.className = 'unchecked';
      completed.removeChild(item);
      list.appendChild(item);
    }else {
      item.className = 'checked';
      list.removeChild(item);
      completed.appendChild(item);
    }
  }
});

/*include something to use:
- node.previosElementSibling
- node.insertBefore
- node.nextElementSibling
- getting all children node.children
- firstElementChild and lastElementChild
*/
