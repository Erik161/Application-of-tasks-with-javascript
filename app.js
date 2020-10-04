document.getElementById('formTask').addEventListener('submit', saveTask);


function saveTask(e) {

  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;


  const task ={
      title,
      description
  };

  
  //LOCALSTORAGE
   //allows us to store the data within the browser's own memory
  //and even if the browser closes and reopens our data they will continue there
  //gives us several methods

  // localStorage.setItem: allows us to store data
                           //to convert an object to a string we use JSON.stringify()
                          //It is a browser method that allows us to convert an object into a string
  localStorage.setItem(tasks, JSON.stringify(task));
  

  localStorage.getItem('tasks')

    e.preventDefault();
}


