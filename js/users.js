function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => getData(data));
}

function getData(data) {
  for (let user of data) {
    console.log(user);
  }
}
