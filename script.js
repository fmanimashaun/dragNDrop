// get the list container
const draggable_list = document.getElementById('draggable-list');

// get he check botton
const check = document.getElementById('check');

// the default list
const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffet',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

// intialise an empty array to hold the created list item
const listItems = [];

// initialise the drag start index
let dragStartIndex;

// swap item function
const swapItem = (fromIndex, toIndex) => {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
};

// drag start function
const dragStart = (e) => {
  dragStartIndex = e.target.closest('li').getAttribute('data-index') - 1;
}

// event funcntions
const dragOver = (e) => {
  e.preventDefault();
}

const dragDrop = (e) => {
  const dragEndIndex = e.target.closest('li').getAttribute('data-index') - 1;
  swapItem(dragStartIndex, dragEndIndex);
  e.target.classList.remove('over')
}

const dragEnter = (e) => {
  e.target.classList.add('over')
}

const dragLeave = (e) => {
  e.target.classList.remove('over')
}

// add event listener function
const addEventListeners = () => {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart',dragStart)
  });

    dragListItems.forEach(item => {
      item.addEventListener('dragenter',dragEnter)
      item.addEventListener('dragover',dragOver)
      item.addEventListener('dragleave',dragLeave)
      item.addEventListener('drop',dragDrop)
  });
};

const createList = () => {
  
  [...richestPeople]
    .map(a => ({value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .sort((a,b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
    const listItem = document.createElement('li');
    
    listItem.setAttribute('data-index', index + 1);

      // listItem.classList.add('over');

    listItem.innerHTML = `
      <span class='number'>${index + 1}</span>
      <div class='draggable' draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

    listItems.push(listItem);

    draggable_list.appendChild(listItem);
  });

    addEventListeners();
}


createList();

check.addEventListener('click', () => {
  listItems.forEach((item, index) => {
    const personName = item.querySelector('.person-name').innerText.trim();

    if (personName !== richestPeople[index]) {
      item.classList.add('wrong');
    } else {
      item.classList.remove('wrong');
      item.classList.add('right');
    }
  });
})


