const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();
  console.log(data);
};

getUsers();
