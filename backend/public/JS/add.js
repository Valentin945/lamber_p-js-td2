let main = document.getElementById('main')

const processForm = (e) => {
  if (e.preventDefault) e.preventDefault();

  const resp = {
    id: e.target.Id.value,
    picture: e.target.Picture.value,
    caption: e.target.Caption.value,
    latitude: e.target.Latitude.value,
    longitude: e.target.Longitude.value,
    tags: e.target.Tags.value,
  }

  fetch('http://localhost:4242/api/pictures', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resp),
  })
}

var form = document.getElementById('formAdd');

if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}