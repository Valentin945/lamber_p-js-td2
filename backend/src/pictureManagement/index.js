const { list, add, remove, get, update } = require("./actions");

console.log("started !");

// NOTE: if you are looking for the right place to test your functions,
//   it might be right here.


/// List test
const updateElements =
   {
    shape: 'square',
    width: '100px',
    height: '100px',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG/1200px-Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG',
    title: 'lycee'
  }
console.log("\n\n\n ")
console.log("Update the element with 'epita' title: Change its height and width")
update(updateElements)
console.log(list())