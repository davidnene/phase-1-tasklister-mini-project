document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
   e.preventDefault() //prevents auto-refresh
   handleToDo(e.target.new.value)
   form.reset() //removes input display after submit
 })
});

//function to handle incoming input
function handleToDo(todo) {
  let tasks = document.createElement('li') //creates new 'ul'
  document.querySelector('#tasks').appendChild(tasks)
  tasks.textContent = `${todo} `
  let btn = document.createElement('button') //creates a button
  btn.textContent = 'x'
  tasks.appendChild(btn)

  btn.addEventListener('click', deleteTasks)
}

//function to remove the tasks by clicking the 'x' button
function deleteTasks(e) {
  e.target.parentNode.remove()
}