const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: "017888854" },
  { id: 1, name: "Shabnoor", email: "shabnoor@gmail.com", phone: "017888889" },
  {
    id: 2,
    name: "Shrabonty",
    email: "shrabonty@gmail.com",
    phone: "017888887",
  },
  {
    id: 3,
    name: "Suchorita",
    email: "suchorita@gmail.com",
    phone: "017888885",
  },
  { id: 4, name: "Sonya", email: "sonya@gmail.com", phone: "017888884" },
  { id: 5, name: "Susmita", email: "susmita@gmail.com", phone: "017888886" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("Hitting the post", req.body);
  //   res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port...", port);
});
