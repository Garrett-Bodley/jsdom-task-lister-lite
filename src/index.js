document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById('create-task-form');
  let list = document.getElementById('tasks')

  // append node to existing list
  function addTask(node) {
    list.appendChild(node);
  };

  // create a <li>< node with a child <button> element and .innerText = task
  function createNode(task) {
    let node = document.createElement('li');
    node.innerText = `${task} `;
    let button = document.createElement('button');
    button.dataset.description = task;
    button.innerText = 'X';
    button.addEventListener('click', function() {
      button.parentElement.remove()
    });
    
    node.appendChild(button)
    return node;
  };


  
  form.addEventListener('submit', function(e) {

    // prevent form from submitting to server
    e.preventDefault();

    // declare a newtask with the value being the form's input 
    let newtask = document.getElementById('new-task-description').value;

    // translate the newtask into a <li> node with child delete <button>
    let node = createNode(newtask);

    // append node to existing list
    addTask(node);

  });

});

