const nameInp = document.getElementById("name");
const surnameInp = document.getElementById("surname");
const emailInp = document.getElementById("email");
const passwordInp = document.getElementById("password");
const finInp = document.getElementById("fin");
const genderInp = document.getElementById("gender");
const tbody = document.getElementById("tbody");
const saveNewUserBtn = document.getElementById("saveNewUser");
let id = 0;
let users = [];
class User {
  #password;
  constructor(name, surname, email, password, fin, gender) {
    (this.id = id),
      (this.name = name),
      (this.surname = surname),
      (this.email = email),
      (this.#password = password),
      (this.fin = fin),
      (this.gender = gender),
      id++;
  }
  get getPassword(){
    return this.#password
  }
}
function addUser(name, surname, email, password, fin, gender) {
  let newUser = new User(name, surname, email, password, fin, gender);
  users.push(newUser);
  console.log(users);
  renderUI(users);
}
function deleteUser(id) {
  const target = users.find((user) => user.id == id);
  let indexOfTarget = users.indexOf(target);
  users.splice(indexOfTarget, 1);
  renderUI(users);
}
function editUser(id) {
    let newName = prompt("enter new name")
    let target = users.find(user=>user.id==id)
    target.name = newName
    renderUI(users)
}
function login() {}
function renderUI(array) {
  let innerHTML = ""; // string
  for (let i = 0; i < array.length; i++) {
    innerHTML += ` <tr>
    <th scope="row">${array[i].id}</th>
    <td>${array[i].name}</td>
    <td>${array[i].surname}</td>
    <td>${array[i].email}</td>
    <td>${array[i].fin}</td>
    <td>${array[i].gender}</td>
    <td><button class="btn btn-warning" onclick="editUser(${array[i].id})">Edit</button></td>
    <td><button class="btn btn-danger" onclick="deleteUser(${array[i].id})">Delete</button></td>
  </tr>`;
  }
  tbody.innerHTML = innerHTML;
}
saveNewUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nameVal = nameInp.value;
  let surnameVal = nameInp.value;
  let emailVal = emailInp.value;
  let passwordVal = passwordInp.value;
  let finVal = finInp.value;
  let genderVal = genderInp.value;
  addUser(nameVal, surnameVal, emailVal, passwordVal, finVal, genderVal);
  console.log(users);
});
