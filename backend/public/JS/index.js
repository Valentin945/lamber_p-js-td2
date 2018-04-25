// Put all the js for index.html

const myHeaders = new Headers({
  "Content-Type": "text/plain",
  "X-Custom-Header": "ProcessThisImmediately",
  "crossdomain": true
});

let main = document.getElementById('main')
fetch('http://localhost:4242/api/pictures?amount=20')
.then((response) => {
  response.json().then( (data) => {
      for (let x in data)
  {
    let img = document.createElement('img');
    img.src = data[x].picture
    main.appendChild(img)
  }
})
})
.catch((error) => {
  console.log(error)
})