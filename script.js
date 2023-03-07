function addItem() {
  const list = document.querySelector('#todo');
  const item = document.createElement('li');
  const content = prompt('Enter description');

  if (content !== '') {
    list.appendChild(item);
    item.innerHTML = content;
    console.log(content);
  }
  else {
    alert('Missing description, no item has been created.');
  }
}

function changeItem() {
  const list = document.querySelectorAll('li');
  const lastItem = list.length - 1;
  const content = prompt('Change description');
  
  list[lastItem].innerHTML = content;
}

function removeItem() {
  const list = document.querySelector('#todo');
  list.removeChild(list.lastElementChild);
}