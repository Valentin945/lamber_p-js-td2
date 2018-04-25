let main = document.getElementById('main')

const processForm = (e) => {
  if (e.preventDefault) e.preventDefault();
  const id = e.target.ID.value
  fetch('http://localhost:4242/api/pictures' + '/' + id, {
    method: 'delete'
  })
  .then(response => 
    response.json().then(json => {
      return json
    })
  )
}

var form = document.getElementById('formDelete');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}